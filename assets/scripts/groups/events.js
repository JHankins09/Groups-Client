'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')
// Set up event handlers

// get all books event handler:

const onGetGroups = event => {
  api.getGroups()
    .then(ui.getGroupsSuccess)
    .catch(ui.getGroupsFail)
}

const onBack = event => {
  ui.back()
}

// const addHandlers = () => {
//  $('#getBooksButton').on('click', onGetBooks)
//  $('#clearBooksButton').on('click', onClearBooks)
//  $('main').on('click', '.removeBook', onRemoveBook)
// }

module.exports = {
  // addHandlers,
  onGetGroups,
  onBack
}
