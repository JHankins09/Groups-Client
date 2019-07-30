'use strict'

const showGroupsTemplate = require('../templates/groups-page.handlebars')
const showGroupTemplate = require('../templates/single-group-page.handlebars')
// const showMembershipTemplate = require('../templates/single-membership-page.handlebars')

const messageReset = function () {
  $('form').trigger('reset')
  $('.system-message').delay(2000).fadeOut(200)
}

const home = function () {
  $('.secondary').removeClass('hide')
  $('.GroupsViewAll').addClass('hide')
  $('.accountDetails').addClass('hide')
  $('.createGroupView').addClass('hide')
  $('.content').html('')
  $('.title').text('Dashboard')
}

const updateGroupSuccess = () => {
  home()
  $('.system-message').show()
  $('.system-message').text('Nice! Thanks for updating!')
  messageReset()
}

const fail = () => {
  $('.secondary').removeClass('hide')
  $('.GroupsViewAll').addClass('hide')
  $('.accountDetails').addClass('hide')
  $('.createGroupView').addClass('hide')
  $('.content').html('')
  $('.title').text('Dashboard')
  $('.system-message').text(`Oops! That didn't work...`)
  messageReset()
}

// Delete Group
const deleteSuccess = (responseData) => {
  $('.system-message').show()
  $('.system-message').text('Group Deleted')
  messageReset()
}

const deleteFailure = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Uh oh - looks like that didn't work...`)
  messageReset()
}

// get all groups
const getGroupsSuccess = responseData => {
  console.log(responseData)
  $('.secondary').addClass('hide')
  $('.GroupsViewAll').removeClass('hide')
  $('.createGroupView').addClass('hide')
  $('.title').text('Explore new communities')
  const showGroupsHtml = showGroupsTemplate({ groups: responseData.groups })
  $('.content').html('')
  $('.content').append(showGroupsHtml)
}

const getGroupsFail = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Uh oh - looks like that didn't work...`)
  messageReset()
}

// get a single groups
const getGroupSuccess = responseData => {
  console.log(responseData)
  const showGroupHtml = showGroupTemplate({ group: responseData.group })
  $('.content').html('')
  $('.content').append(showGroupHtml)
}

const getGroupFail = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Uh oh - looks like that didn't work...`)
  messageReset()
}

// create a group
const createGroupSuccess = responseData => {
  $('.system-message').show()
  $('.system-message').text('Created Successfuly')
  messageReset()
}

const createGroupFail = responseData => {
  $('.system-message').show()
  $('.system-message').text('Whoops! Something went wrong...')
  messageReset()
}

// const updateGroupSuccess = responseData => {
//   const showGroupHtml = showMembershipTemplate({ group: responseData.group })
//   $('.content').html('')
//   $('.content').append(showGroupHtml)
// }

module.exports = {
  getGroupsSuccess,
  getGroupsFail,
  createGroupSuccess,
  createGroupFail,
  getGroupFail,
  getGroupSuccess,
  deleteSuccess,
  deleteFailure,
  fail,
  updateGroupSuccess
}
