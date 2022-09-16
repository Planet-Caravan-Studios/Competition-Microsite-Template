# README #

### Project-Specific Notes ###
* Project-specific notes go here.

#### Server Links ####
* Local: http://localhost:9000/
* Test: 
* Staging: 
* Live: 

## Thorium Microsite Starter Project ##

This is the starter project for Thorium Digital's competition microsite projects.  The project is meant to be self-contained and unopinionated, and should allow devs to jump in with minimal prep.  All setup and general use instructions are contained in this readme, and the index page's filler content provides some extra guidence for working with the template.  Any project-specific notes you have should be added to their section above, and would be greatly appreciated by the next dev to work on your project.

### Best Practices ###
* Use lots of comments and documentation
* Keep your tabs lined up correctly
* Follow HTML5 element heirarchy
* Double check your title tags and favicon
* Store your local project in a regular folder with no cloud syncing - this can cause issues with running/building the project

### Initialize ###
* Use Node v10.24.0 (most stable version for project, set with nvm)
* Pull the latest updates for the starter project repo
* Open a new repo in BitBucket (ask Alec Reimel or Bill Visokay if you don't have permissions)
* In BitBucket, click "Clone" button in the upper right, copy the command it gives you (HTTPS version), and run it at the location you want to store your project - the repo should be mostly empty at this point
* Copy/paste files from starter project repo into the new repo, with the exception of the .git, node_modules, dist, .tmp folders
* cd into project
* npm run init-setup (runs multiple setup commands)
* npm run dev (start and serve commands are the same as this by default, customize them if you need to)

### Initial Server Deploy ###
* Remove 'dist/' from gitignore - Bitbucket adds this by default
* npm run build
* commit and push up changes
* Log on to test server
* cd deploy
* git clone git@bitbucket.org:diageo/[PROJECT_NAME].git - grab this from Bitbucket under Clone > SSH.

### Update Test Server ###
* npm run build
* Push up Git commits
* Log on to test server
* cd deploy/[PROJECT_NAME]
* git pull

### Form Configuration ###
* Minimum Age - Set in /app/src/form.ts - [SEARCH-MINIMUM-AGE]
** also update /app/scripts/form.js, and search for: return d().diff(r,"years",!1)
* AppID - Set in /api/storage/CIDBapi/App.config - [SEARCH-APPID]
* Promocode - Set in index in 'form metas' section - [SEARCH-PROMOCODE]

### Working Pages ###
Make sure that you're working on the page files under '/app/pages/' - these are the pages you should be working out of, not the page files under '/app/' - these are the rendered pages served up on your local server.  Anything saved directly to the rendered files will be overwritten the next time the site is re-rendered. 

### Secondary Pages ###
Once you've completed the design of the index page, you're ready to clone it out into the secondary pages, which are Success, Closed, Error, and 404. These pages are pre-built using the design of the index page, but have their own content specific to their subject, with the styling for them being handled in the template.scss file. 

To make things easy, copy/paste the inner content into an empty editor workspace to hold onto it, copy/paste the index page into the secondary page you're editing, and then paste the inner content back into the page.  Styling should then more or less already be taken care of for you.

#### Page Links ####
* http://localhost:9000/ - Index/Home
* http://localhost:9000/success - Successful form submission
* http://localhost:9000/closed - When contest is closed, replace index with this page
* http://localhost:9000/error - Error in form submission
* http://localhost:9000/404 - 404 page, different from Error page

### 404 Datalayer Push ###
Make sure that this script is present on the 404 page.  It is also available for linking under /app/scripts/datalayer-404.js

    <script>
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event':'404',
            'pagePath': '/404'+window.location.pathname+window.location.search,
            'is404':'true'
        });
    </script>

### Assets Checklist ###
When you start the project, check in with the projects's Analyst for the following:

* Font files
* Logo(s) - as PNGs
* Favicon - you can usually resize the logo for this
* Figma/PSD of the design to export individual assets
* Legal copy/links
* Social links
* Contest start/end dates

### Help ###
If you have any questions on how to work with this site template, check in with Alec Reimel (areimel@thoriumdigital.com) on Teams. I am also available for help with Photoshop tasks, more intensive UI/UX tasks, QA testing, etc.

### Coming Features ###
* reCaptcha integration
* Header/Footer/Base Layout Components
* Prebuilt homepage for larger sites
* Blog Directory/Posts for larger sites

