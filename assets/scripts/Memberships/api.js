'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const joinGroup = buttonData => {
  return $.ajax({
    url: config.apiUrl + '/memberships/',
    data: buttonData,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getMemberships = () => {
  return $.ajax({
    url: config.apiUrl + '/memberships/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMembership = (id) => {
  console.log('Where to delete ', config.apiUrl + '/memberships/' + id)
  return $.ajax({
    url: config.apiUrl + '/memberships/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  joinGroup,
  getMemberships,
  deleteMembership
}
