'use strict'

const store = require('./../store.js')

const messageReset = function () {
  $('form').trigger('reset')
  $('.system-message').delay(2000).fadeOut(200)
}

// ------- Sign in and Sign up UI components. -------- //
const signUpSuccessful = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Nice - you've signed up successfully! Now please sign in!`)
  messageReset()
}

const signUpFailure = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Oops! Something went wrong. Try signing in!`)
  messageReset()
}

const signInSuccess = responseData => {
  store.user = responseData.user
  $('.title').text(`Welcome!`)
  $('.primary').addClass('hide')
  $('.secondary').removeClass('hide')
  $('.system-message').show()
  $('.system-message').text(`Logged in as: ${store.user.email}`)
  messageReset()
}

const signInFailure = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Oops! Forgot you password? Tough...`)
  messageReset()
}
// ------- Sign in and Sign up UI components. -------- //

const accountSettings = responseData => {
  $('.secondary').addClass('hide')
  $('.accountDetails').removeClass('hide')
  $('#collapseThree').removeClass('show')
  $('#collapseFour').removeClass('show')
  $('.title').text('Account Details')
}

const signOutSuccess = responseData => {
  console.log('success', responseData)
  $('.primary').removeClass('hide')
  $('.accountDetails').addClass('hide')
  $('.title').text('Groups')
}

const signOutFail = responseData => {
  console.log('fail', responseData)
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccess,
  signInFailure,
  accountSettings,
  signOutSuccess,
  signOutFail
}
