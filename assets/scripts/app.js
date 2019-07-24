'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const userEvents = require('./user/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// your JS code goes here
$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  // change-password
  // join group
  // sign out
  // modal
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
})
