'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

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

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUserData = (data) => {
  return $.ajax({
    url: config.apiUrl + '/users/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getUserData
}
