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

const getGroup = (groupid) => {
  return $.ajax({
    url: config.apiUrl + '/groups/' + groupid,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGroup = formData => {
  return $.ajax({
    url: config.apiUrl + '/groups/',
    data: formData,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getGroups,
  createGroup,
  getGroup
}
