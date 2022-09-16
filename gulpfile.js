const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const browserSync = require('browser-sync').create()
const del = require('del')
const runSequence = require('run-sequence')
const $ = gulpLoadPlugins()
const reload = browserSync.reload
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const modRewrite = require('connect-modrewrite')
const fs = require('fs')

const bundler = webpack(config('development'))
let dev = true
const dataPath = './app/data/data.json'

bundler.plugin('done', (stats) => {
  if (stats.hasErrors() || stats.hasWarnings()) {
    return browserSync.sockets.emit('fullscreen:message', {
      title: 'Webpack Error:',
      body: stats.toString(),
      timeout: 100000
    })
  }
  browserSync.reload()
})

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.', './node_modules/bootstrap-sass']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
    .pipe($.if(dev, $.sourcemaps.write()))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({ stream: true }))
})

gulp.task('scripts', () => {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    .pipe($.babel({
      presets: ['@babel/env']
    }
    ))
    .pipe($.if(dev, $.sourcemaps.write('.')))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(reload({ stream: true }))
})

gulp.task('webpack', () => {
  return gulp.src('app/src/sites.js')
    .pipe($.webpack(config('production'), webpack)) // TODO: create prod config to compile to ./dist
    .pipe(gulp.dest('dist/scripts'))
})

gulp.task('nunjucks', () => {
  return gulp.src('app/pages/**/*.+(html|nunjucks|njk)')
    .pipe($.data((file) => {
      let data = JSON.parse(fs.readFileSync(dataPath))
      return data
    }))
    .pipe($.nunjucksRender({
      path: ['app/templates']
    }))
    .pipe(gulp.dest('app'))
})

gulp.task('data', () => {
  let data = JSON.parse(fs.readFileSync(dataPath))
  if (data.content) {
    for (let type in data.content) {
      const route = (data.contentRoutes && data.contentRoutes[type]) ? data.contentRoutes[type] : type
      render(data.content[type], type, route)
    }
  }
})

gulp.task('html', ['styles', 'scripts', 'nunjucks'], () => {
  return gulp.src('app/**/*.html')
    .pipe($.useref({ searchPath: ['.tmp', 'app', '.'] }))
    .pipe($.if(/\.js$/, $.babel()))
    // .pipe($.if(/\.js$/, $.uglify({compress: {drop_console: true}})))
    // .pipe($.if(/\.css$/, $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if(/\.html$/, $.htmlmin({
      collapseWhitespace: true,
      minifyCSS: false,
      minifyJS: { compress: { drop_console: true } },
      // minifyJS: false,
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    })))
    .pipe(gulp.dest('dist'))
})

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if('!*.svg', $.cache($.imagemin())))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('fonts', () => {
  return gulp.src('app/styles/fonts/**/*')
    .pipe($.if(dev, gulp.dest('.tmp/styles/fonts'), gulp.dest('dist/styles/fonts')))
})

gulp.task('extras', () => {
  gulp.src([
    'app/videos/**/*'
  ], { dot: true })
    .pipe(gulp.dest('dist/videos'))
  gulp.src([
    'app/data/**/*'
  ], { dot: true })
    .pipe(gulp.dest('dist/data'))
  gulp.src([
    'app/vendor/**/*'
  ], { dot: true })
    .pipe(gulp.dest('dist/vendor'))
  return gulp.src([
    'app/*',
    '!app/*.html'
  ], { dot: true })
    .pipe(gulp.dest('dist'))
})

gulp.task('clean', del.bind(null, ['.tmp', 'dist']))

gulp.task('serve', () => {
  runSequence(
    ['nunjucks', 'data'], ['styles', 'scripts', 'fonts'], () => {
      browserSync.init({
        notify: false,
        port: 9000,
        open: false,
        server: {
          baseDir: ['.tmp', 'app'],
          serveStaticOptions: {
            extensions: ['html', 'htm']
          },
          routes: {
            '/bower_components': 'bower_components'
          },

          middleware: [
            modRewrite([
              '^/rsvpdashboard/(.*)$ /rsvpdashboard [L]'
            ]),
            webpackDevMiddleware(bundler, {
              publicPath: config().output.publicPath,
              // pretty colored output
              stats: { colors: true }
            })
          ]
        }
      })

      gulp.watch([
        'app/**/*.html',
        'app/images/**/*',
        '.tmp/fonts/**/*'
      ]).on('change', reload)

      gulp.watch('app/styles/**/*.scss', ['styles'])
      // changed .njk to .html to watch for raw html changes
      gulp.watch('app/**/*.html', ['nunjucks', 'data'])
      gulp.watch('app/data/**/*', ['data'])
      gulp.watch('app/scripts/**/*.js', ['scripts'])
      gulp.watch('app/fonts/**/*', ['fonts'])
      gulp.watch('bower.json', ['fonts'])
    })
})

gulp.task('serve:dist', ['default'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    open: false,
    server: {
      baseDir: ['dist'],
      serveStaticOptions: {
        extensions: ['html', 'htm']
      }
    }
  })
})

gulp.task('build', ['html', 'images', 'fonts', 'extras', 'webpack'], () => {
  dev = false
  return gulp.src('dist/**/*').pipe($.size({ title: 'build', gzip: true }))
})

gulp.task('default', () => {
  return new Promise(resolve => {
    dev = false
    runSequence(['clean'], 'build', resolve)
  })
})

function render (data, type, route) {
  if (!data.length || data.length < 1) return
  data.map((item, i) => {
    item.next = i >= data.length - 1 ? data[0].slug : data[i + 1].slug
    item.prev = i === 0 ? data[data.length - 1].slug : data[i - 1].slug
    gulp.src(`app/templates/${type}.njk`)
      .pipe($.data(item))
      .pipe($.nunjucksRender({
        path: ['app/templates']
      }))
      .pipe($.rename((path) => {
        path.basename = item.slug
        path.extname = '.html'
      }))
      .pipe(gulp.dest(`app/${route}/`))
  })
}
