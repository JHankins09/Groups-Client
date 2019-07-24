'use strict'

const store = require('./../store.js')
const showGroupsTemplate = require('../templates/groups-page.handlebars')

const messageReset = function () {
  $('form').trigger('reset')
  $('.system-message').delay(2000).fadeOut(200)
}

const getGroupsSuccess = responseData => {
  console.log('success', responseData)
  $('.secondary').addClass('hide')
  $('.GroupsViewAll').removeClass('hide')
  $('.title').text('Explore your groups')
  const showGroupsHtml = showGroupsTemplate({ groups: responseData.groups })
  $('.content').append(showGroupsHtml)
}

const getGroupsFail = responseData => {
  console.log('failure', responseData)
}

module.exports = {
  getGroupsSuccess,
  getGroupsFail
}
