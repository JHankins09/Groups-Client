'use strict'

const store = require('./../store.js')
const showGroupsTemplate = require('../templates/groups-page.handlebars')

const messageReset = function () {
  $('form').trigger('reset')
  $('.system-message').delay(2000).fadeOut(200)
}

const getGroupsSuccess = responseData => {
  $('.secondary').addClass('hide')
  $('.GroupsViewAll').removeClass('hide')
  $('.title').text('Explore your groups')
  const showGroupsHtml = showGroupsTemplate({ groups: responseData.groups })
  $('.content').append(showGroupsHtml)
  console.log(responseData)
}

const getGroupsFail = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Uh oh - looks like that didn't work...`)
  messageReset()
}

const createGroupSuccess = responseData => {
  console.log(responseData)
}

const createGroupFail = responseData => {
  console.log('fail', responseData)
}

module.exports = {
  getGroupsSuccess,
  getGroupsFail,
  createGroupSuccess,
  createGroupFail
}
