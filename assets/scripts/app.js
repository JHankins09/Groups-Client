'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const userEvents = require('./user/events')
const groupEvents = require('./groups/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// your JS code goes here
$(() => {
  // groupEvents.addHandlers()
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('.backbutton').on('click', groupEvents.onBack)
  // change-password
  $('#accountSettings').on('click', userEvents.onAccountSettings)
  $('#updatePassword').on('submit', userEvents.onChangePassword)
  $('#signOut').on('click', userEvents.onSignOut)
  $('#otherStuff').on('click', userEvents.onOtherStuff)
  // join group
  // sign out
  // modal
  // view groups
  $('#getGroups').on('click', groupEvents.onGetGroups)
})
