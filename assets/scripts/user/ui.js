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

const signOutSuccess = responseData => {
  $('.primary').removeClass('hide')
  $('.accountDetails').addClass('hide')
  $('.title').text('Groups')
}

const signOutFail = responseData => {
  $('.system-message').show()
  $('.system-message').text(`What?? That didn't work? How'd you even get here?`)
  messageReset()
}

const changePasswordSuccess = responseData => {
  $('.system-message').show()
  $('.system-message').text(`SUCCESS! Write that down! I don't know how to do a 'forgot my password' thing so...`)
  messageReset()
}

const changePasswordFail = respondData => {
  $('.system-message').show()
  $('.system-message').text(`Uh oh - looks like that password didn't work. Try again!`)
  messageReset()
}

const userDataUpdated = responseData => {
  console.log(responseData)
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFail,
  changePasswordSuccess,
  changePasswordFail,
  userDataUpdated
}
