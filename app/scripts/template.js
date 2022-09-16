/****************************************

TEMPLATE JS FILE


$(document).ready(function(){
	//my code here
});

****************************************/

$(document).ready(function(){
	console.log('template.js connected');
});


// Click Listener JS code
function makeClickListener (clickTarget, classTarget, classToToggle) {
  console.log(clickTarget, classTarget, classToToggle)
  clickTarget.addEventListener('click', function () {
    console.log(this)
    if (classTarget && classTarget.classList && !classTarget.classList.contains(classToToggle)) {
      classTarget.classList.add(classToToggle)
    } else if (classTarget && classTarget.classList && classTarget.classList.contains(classToToggle)) {
      classTarget.classList.remove(classToToggle)
    }
  })
}

// (function () {
//   var interval = setInterval(timer, 200)
//   var counter = 0
//   function timer () {
//     var footerItem = document.querySelector('.dg_footer_item_7')
//     if (footerItem) {
//       stopTimer()
//       footerItem.insertAdjacentHTML('afterend', '©2019 Weston Brands LLC. All Rights Reserved.<br>')
//     } else if (counter >= 50) {
//       stopTimer()
//     }
//     counter++
//   }

//   function stopTimer () {
//     clearInterval(interval)
//   }
// })()

function backToForm () {
  window.location.href = '/'
}

function fixNumber () {
  var numberInput = document.getElementById('CP_PhoneNumber')
  var phoneError = document.getElementById('Phone_Error')

  var number = numberInput.value
  var numCount = number.replace(/[^0-9]/g, '').length
  // var firstNumbers = number.slice(0, 3)
  // var areaCodeCheck = firstNumbers.replace(/[^0-9]/g, '').length
  // if (number != '' && areaCodeCheck != 3) {
  //   phoneError.classList.add('show')
  // }
  if (numCount < 10) {
    // var excessNumbers = numCount - 10
    // console.log(excessNumbers, 'excessNumbers')
    // var trimmedNumber = number.slice(0, -(excessNumbers))
    // console.log(trimmedNumber, 'trimmedNumber')
    // numberInput.value = trimmedNumber
    phoneError.classList.add('show')
    numberInput.value = ''
  }

  if (numCount == 10) {
    phoneError.classList.remove('show')
  }
}

function fixZipNumber () {
  var zipInput = document.getElementById('CP_ZipCode')
  var zipError = document.getElementById('Zip_Error')

  var zipCode = zipInput.value
  var zipCount = zipCode.replace(/[^0-9]/g, '').length

  if (zipCount < 5) {
    zipError.classList.add('show')
    zipInput.value = ''
  }
  if (zipCount == 5) {
    zipError.classList.remove('show')
  }
}

/***** Image Check *****/
/*
 * Function to check the image uploads before sending them through to the API. We should only accept PNGs or JPGs that are less than 10MB. 
 */
function checkImage() {
  var fileError = document.getElementById('file-error')
  fileError.classList.add('hide');
  fileError.classList.remove('show');
  if($('#CP_image')[0].files[0].length == 0){
    // jQuery("#formImage").closest('.input-item').addClass('has-error');
    // $("#img_fileName").html('No file selected.');
    // hasError = true;
  }else{
    var imageType = $('#CP_image')[0].files[0].type.split('/');
    console.log(imageType)
    var imgName= $('#CP_image')[0].files[0].name.replace(/(<([^>]+)>)/gi, '');;
      if(imageType[1].toLowerCase() == 'png' || 
        imageType[1].toLowerCase() == 'jpeg' || 
        imageType[1].toLowerCase() == 'jpg'){
          if($('#CP_image')[0].files[0].size  < 10000000){
            $('#img_fileName').html('File: ' + imgName);
        }
          else if($('#CP_image')[0].files[0].size > 10000000){
              jQuery('#CP_image').closest('.input-item').addClass('has-error');
              //$('#img_fileName').html('File size exceeds 10MB');
              fileError.classList.remove('hide');
              jQuery('#file-error').html('File size exceeds 10MB')
              fileError.classList.add('show');
          }
      }else{
          jQuery('#CP_image').closest('.input-item').addClass('has-error');
          jQuery('#file-error').html('Invalid file. Please upload only JPG or PNG.')
          fileError.classList.remove('hide');
          fileError.classList.add('show');
      }
  }
}

// document.querySelector('.form-button').addEventListener('click', function () {
//   if (document.querySelector('.errorMessageText')) {
//     console.log('It works!')
//   }
// })

// $(window).bind('load', function () {
//   try {
//     var visibleFooterElement = document.querySelectorAll('.dg_footer_item_7')
//     var footerTextElement = document.querySelectorAll('.dg_footer_item_last')

//     if (visibleFooterElement && footerTextElement) {
//       var footerText = visibleFooterElement[0].innerText
//       var textToAdd = footerTextElement[0].innerText

//       var finalFooterText = textToAdd + '\n' + footerText

//       visibleFooterElement[0].innerText = finalFooterText
//       footerTextElement[0].classList.add('hide')
//     } else {
//       console.log('no footer')
//       footerTextElement[0].classList.add('.showFooter')
//     }
//   } catch (error) {
//     console.log(error)
//   }
// })

var signupButtons = document.getElementsByClassName('signupButton')
var peletonPanel = document.getElementById('peletonPanel')
// var submitButton = document.getElementById('submitButton')
var firstNameInput = document.getElementById('firstNameInput')
var lastNameInput = document.getElementById('lastNameInput')
var dobDayInput = document.getElementById('dobDayInput')
var dobMonthInput = document.getElementById('dobMonthInput')
var dobYearInput = document.getElementById('dobYearInput')
var emailInput = document.getElementById('emailInput')
var cityInput = document.getElementById('cityInput')
var stateInput = document.getElementById('stateInput')
var zipCodeInput = document.getElementById('zipCodeInput')
var phoneNumberInput = document.getElementById('phoneNumberInput')
var additionalNewsByEmail = document.getElementById('additionalNewsByEmail')
var acceptTermsAndConditions = document.getElementById('acceptTermsAndConditions')
// var goBack = document.getElementById('goBack')

// makeClickListener(signupButton, peletonPanel, 'form')

// makeClickListener(goBack, peletonPanel, 'form')

for (var x = 0; x < signupButtons.length; x++) {
  makeClickListener(signupButtons[x], peletonPanel, 'form')
}

// submitButton.addEventListener('click', function () {
//   console.log('Submitting Form')
//   submitFormData()
// })

// function submitFormData () {
//   if (true
//   //   submitButton &&
//   // additionalNewsByEmail &&
//   // acceptTermsAndConditions &&
//   // cityInput &&
//   // stateInput &&
//   // zipCodeInput &&
//   // phoneNumberInput &&
//   // emailInput &&
//   // dobYearInput &&
//   // dobMonthInput &&
//   // dobDayInput &&
//   // firstNameInput &&
//   // lastNameInput
//   ) {
//     // console.log('submitButton.value', submitButton.value)
//     // console.log('firstNameInput', firstNameInput.value)
//     // console.log('lastNameInput', lastNameInput.value)
//     // console.log('dobDayInput', dobDayInput.value)
//     // console.log('dobMonthInput', dobMonthInput.value)
//     // console.log('dobYearInput', dobYearInput.value)
//     // console.log('emailInput', emailInput.value)
//     // console.log('cityInput', cityInput.value)
//     // console.log('stateInput', stateInput.value)
//     // console.log('zipCodeInput', zipCodeInput.value)
//     // console.log('phoneNumberInput', phoneNumberInput.value)
//     // console.log('additionalNewsByEmail', additionalNewsByEmail.checked)
//     // console.log('acceptTermsAndConditions', acceptTermsAndConditions.checked)
//   }
// }
