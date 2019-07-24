'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const userEvents = require('./user/events')
const groupEvents = require('./groups/events')
const generalEvents = require('./General/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// your JS code goes here
$(() => {
  // User features
  // Sign up
  $('#sign-up').on('submit', userEvents.onSignUp)
  // Sign in.
  $('#sign-in').on('submit', userEvents.onSignIn)
  // change-password
  $('#changePassword').on('submit', userEvents.onChangePassword)
  // Sign out
  $('#signOut').on('click', userEvents.onSignOut)
  // sign out
  $('#logOut').on('submit', userEvents.onSignOut)

  // Groups Features
  // view groups
  $('#getGroups').on('click', groupEvents.onGetGroups)
  // join group
  // create group
  $('#create-group').on('submit', groupEvents.onCreateGroup)

  // General App Features
  // view Account Settings
  $('#accountSettings').on('click', generalEvents.onAccountSettings)
  // Other stuff...
  $('#otherStuff').on('click', generalEvents.onOtherStuff)
  // back to main nav button
  $('.backbutton').on('click', generalEvents.onBack)
  // go to create group
  $('#goToCreateGroup').on('click', generalEvents.onGoToCreateGroup)
})
