'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const userEvents = require('./user/events')
const groupEvents = require('./groups/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// your JS code goes here
$(() => {
  // Sign up
  $('#sign-up').on('submit', userEvents.onSignUp)
  // Sign in.
  $('#sign-in').on('submit', userEvents.onSignIn)
  // view Account Settings
  $('#accountSettings').on('click', userEvents.onAccountSettings)
  // change-password
  $('#changePassword').on('submit', userEvents.onChangePassword)
  // Sign out
  $('#signOut').on('click', userEvents.onSignOut)
  // Other stuff...
  $('#otherStuff').on('click', userEvents.onOtherStuff)
  // join group

  // sign out
  $('#logOut').on('submit', userEvents.onSignOut)
  // view groups
  $('#getGroups').on('click', groupEvents.onGetGroups)
  // back to main nav button
  $('.backbutton').on('click', groupEvents.onBack)
})
