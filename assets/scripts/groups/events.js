'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

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
const deleteGroupSuccess = () => {
  ui.deleteSuccess()
  onGetGroups()
}

const onDeleteGroup = event => {
  const groupId = $(event.target).closest('ul').data('id')
  api.deleteGroup(groupId)
    .then(deleteGroupSuccess)
    .catch(ui.deleteFailure)
}

// Create a group
const createGroupSuccess = () => {
  ui.createGroupSuccess()
  onGetGroups()
}

const onCreateGroup = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.createGroup(formData)
    .then(createGroupSuccess)
    .catch(ui.createGroupFail)
}

// And Handlers that live in Handlebars Template
const addHandlers = () => {
  $('.content').on('click', '.viewGroup', onGetGroup)
  $('.content').on('click', '.deleteGroup', onDeleteGroup)
  $('.content').on('click', '.getGroups', onGetGroups)
}

module.exports = {
  addHandlers,
  onGetGroup,
  onGetGroups,
  onCreateGroup
}
