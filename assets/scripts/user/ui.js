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
  $('.title').text(`Your communities`)
  $('.primary').addClass('hide')
  $('.secondary').removeClass('hide')
  messageReset()
}

const signInFailure = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Oops! Forgot you password? Tough...`)
  messageReset()
}
// ------- Sign in and Sign up UI components. -------- //

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccess,
  signInFailure
}
