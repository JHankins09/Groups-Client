'use strict'

const config = require('./../config.js')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    data: formData,
    method: 'POST'
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    data: formData,
    method: 'POST'
  })
}

module.exports = {
  signUp,
  signIn
}
