'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const getGroups = () => {
  return $.ajax({
    url: config.apiUrl + '/groups/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getGroups
}
