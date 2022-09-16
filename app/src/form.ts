/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
import { parse, stringify } from 'query-string'

import { countryMapper } from '@app/helpers/countryMapper'
import { track } from '@app/lib/gtm'

import 'es6-shim'
import 'whatwg-fetch'
import * as moment from 'moment'

async function init () {
  console.log('init')
  // const events = await fetchEvents()

  $('#cidbForm').each((i, el) => {
    const form = $(el)
    console.log(form, 'Form console log')
    const params = parse(window.location.search)
    const action = form.data('action')

    $('input[data-other-of]').hide()

    // Sort countries
    // form.find('#CP_Country').html((form.find('#CP_Country > option') as any).sort((a, b) => {
    //   if (a.value === 'US') return -1
    //   if (b.value === 'US') return 1
    //   return a.text === b.text ? 0 : a.text < b.text ? -1 : 1
    // })).val('US')


    form.find('select[data-has-other]').each((i, elSelect): void => {
      const select = $(elSelect)
      const optionsWithExtraField = select.data('has-other')
      const extraField = form.find('input[data-other-of=' + select.attr('id') + ']')
      select.on('change', (e) => {
        let values: number[]
        if (Array.isArray(select.val())) {
          values = (select.val() as string[]).map(value => +value)
        } else {
          values = [+select.val()]
        }
        let show = false
        for (const value of values) {
          if (optionsWithExtraField.indexOf(value) > -1) {
            show = true
          }
        }
        if (show) {
          extraField.show()
        } else {
          extraField.hide()
        }
      })
    })

    form.find('#CP_Country').on('change', (e): void => {
      const countryCode = countryMapper(($(e.target).val() as string))
      form.find('#PR_4_92_1').val(countryCode)
    })

    form.on('submit', (e) => {
      console.log('before preventDefault')
      e.preventDefault()
      console.log('after preventDefault')
      const hasError = validate()

      if (hasError) {
        console.log(hasError)
        var DOB_Error = document.getElementById("DOB_Error")
        if(DOB_Error) {
          DOB_Error.classList.add('show')
        }
        else {
          console.log('no DOB div found')
        }
        // DOB_Error.style.display = 'block'
        return false
      }

      try {
        fetchPPVersionOnLoad()
      } catch (err) {
        console.log(err)
        return false
      }

      console.log('Submit form')
      track({ 'event': 'customEvent', 'eventCategory': 'Form', 'eventAction': 'Submit RSVP form' })
      const data = transformData()

      console.log("DATA", data)

      /* This is for image uploads, if needed */
      // const formData = new FormData();
      // formData.append("CP_image", (<HTMLInputElement>$("#formImage")[0]).files[0] );
      // console.log((<HTMLInputElement>$("#formImage")[0]).files[0])
      // const data = transformData(formData)

      form.find('button[type="submit"]').attr('disabled', 'true').html('Submitting...')

      $.ajax({
        url: '/api/form',
        type: 'post',
        dataType: 'json',
        processData: false,
        contentType: false,
        data: data
      })
        .done((res) => {
          console.log('done', res)
          // var DOB_Error = document.getElementsByClassName('DOB_Error')[0]
          // $('#DOB_Error').css('display', 'none')
        

          try {
            if (res.cid.status && res.cid.status === 'success') {
		console.log('success')

		window['dataLayer']=window['dataLayer'] || []
		window['dataLayer'].push({'event':'pageView','pagePath':'/thankyou'})
    window.location.assign("/success?form_success=1");
              	return !params.debug

              	
            }
          } catch (err) {
            console.log(err)
          }

          return !params.debug
        })
        .fail((err) => {
	         console.log('fail', err)

	         window['dataLayer']=window['dataLayer'] || []
	         window['dataLayer'].push({'event':'pageView','pagePath':'/error'})
           window.location.assign("/error");
	         return !params.debug

	        
        })
        .always(() => {
          form.find('button[type="submit"]').removeAttr('disabled').html('Submit')
        })
    })

    /**
     * -----------------------------
     * Helper functions
     * -----------------------------
     */

    const validate = (): boolean => {
      let hasError = false
      form.find('.has-error').removeClass('has-error')
      form.find('[data-max-options]').each((e, el) => {
        const select = $(el)
        if (Array.isArray(select.val()) && (select.val() as any[]).length > 3) {
          select.parent().addClass('has-error')
          hasError = true
        }
      })

      const ageInput = form.find('[name=CP_DOB]')

      if (!moment(ageInput.val()).isValid()) {
        ageInput.addClass('is-invalid')
        hasError = true
      }

      /* [SEARCH-MINIMUM-AGE] */
      const birthday = moment(ageInput.val() as string)
      if (moment().diff(birthday, 'years', false) < 21) {
        ageInput.addClass('is-invalid')
        hasError = true
      }
      /* Check if the form image has an error */
      const image = form.find('#file-error')
      if(image.hasClass('show')){
        hasError = true
      }
      return hasError
    }

    const fetchPPVersionOnLoad = (): void => {
      const ppVer = (window as any).dg_footer_configurations.hg_PP_Version
      if (ppVer) {
        form.find('#PR_4_367_1_freetext').val(ppVer)
      } else {
        throw new Error('Cannot get Privacy Policy version')
      }
    }

    const transformData = function() {
      var params = new FormData(<HTMLFormElement>($('#cidbForm')[0]));
      var checkboxFields = $('#PR_1_64_1').prop('checked');

      if(!checkboxFields){
        params.append('PR_1_64_1', '99');
      }

      return params;
    }// END FUNCTION transformData

    const debug = () => {
      $('#CP_FirstName').val('John')
      $('#CP_LastName').val('Doe')
      $('#CP_DOB').val('1980-12-12')
      $('#CP_EmailId').val('test@test.com')
      $('#CP_ZipCode').val('10105')
      $('#CP_City').val('NYC')

    }

    if (params.debug) { debug() }
  }) // End of CIDB form

  $('#unsibscribeForm').each((i, el) => {
    const form = $(el)
    const params = parse(window.location.search)

    // Sort countries
    form.find('#Country').html((form.find('#Country > option') as any).sort((a, b) => {
      return a.text === b.text ? 0 : a.text < b.text ? -1 : 1
    }))

    const debug = () => {
      $('#FirstName').val('John')
      $('#LastName').val('Doe')
      $('#DOB').val('1980-12-12')
      $('#EmailId').val('test@test.com')
    }

    if (params.debug) { debug() }

    form.on('submit', (e) => {
      e.preventDefault()
      console.log('Submit form')
      form.find('button[type="submit"]').attr('disabled', 'true').html('Submitting...')

      $.ajax({
        url: '/api/consumer/unsubscribe',
        type: 'post',
        dataType: 'json',
        data: form.serialize()
      })
        .done((res) => {
          console.log('done', res)
          if (res.success) {
            return !params.debug && window.location.assign('/success')
          } else {
            return !params.debug && window.location.assign('/error')
          }
        })
        .fail((err) => {
          console.log('fail', err)
          return !params.debug && window.location.assign('/error')
        })
        .always(() => {
          form.find('button[type="submit"]').removeAttr('disabled').html('Submit')
        })
    })
  })
}

$('[data-page="error"]').each((i, el) => {
  const scope = $(el)
  const params = parse(window.location.search)
  if (params && params.msg) {
    scope.find('[data-error-code]').html(params.msg)
  }
})

// $('[data-page="success"]').each((i, el) => {
//   const scope = $(el)
//   const params = parse(window.location.search)
//   try {
//     if (params) {
//       scope.find('[data-date]').html(params.date)
//       scope.find('[data-time]').html(params.time)
//       scope.find('[data-location]').html(params.location)
//       scope.find('[data-confirmation]').html(params.confirmation)
//     }
//   } catch (e) {
//     console.warn(e)
//   }
//   if (params && params.msg) {
//     scope.find('[data-error-code]').html(params.msg)
//   }
// })

// async function fetchEvents () {
//   return fetch('/api/event?filtered=true')
//     .then(res => res.json())
//     .catch(err => {
//       console.log(err)
//       return []
//     })
// }

init()
