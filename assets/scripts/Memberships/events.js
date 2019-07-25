'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

// Get all groups
const onGetGroups = event => {
  api.getGroups()
    .then(ui.getGroupsSuccess)
    .catch(ui.getGroupsFail)
}

// Get a single group
const onGetGroup = event => {
  const groupid = $(event.target).data('id')
  api.getGroup(groupid)
    .then(ui.getGroupSuccess)
    .catch(ui.getGroupFail)
  // console.log('Clicked!', (event.target).data('id'))
}

// Delete a group
const onDeleteGroup = event => {
  console.log('Clicked! This bitch is getting deleted!', event.target)
}

// Create a group
const onCreateGroup = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createGroup(formData)
    .then(ui.createGroupSuccess)
    .catch(ui.createGroupFail)
}

// And Handlers that live in Handlebars Template
const addHandlers = () => {
  $('.content').on('click', '.viewGroup', onGetGroup)
  $('.content').on('click', '.deleteGroup', onDeleteGroup)
}

module.exports = {
  addHandlers,
  onGetGroup,
  onGetGroups,
  onCreateGroup
}
