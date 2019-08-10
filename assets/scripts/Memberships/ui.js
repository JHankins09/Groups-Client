'use strict'
const store = require('../store.js')
const showMemberhshipsTemplate = require('../templates/memberships-groups.handlebars')
const showMembershipTemplate = require('../templates/single-membership-page.handlebars')

const messageReset = function () {
  $('form').trigger('reset')
  $('.system-message').delay(2000).fadeOut(200)
}

const joinGroupSuccess = () => {
  $('.secondary').removeClass('hide')
  $('.GroupsViewAll').addClass('hide')
  $('.accountDetails').addClass('hide')
  $('.createGroupView').addClass('hide')
  $('.content').html('')
  $('.title').text('Dashboard')
  $('.system-message').show()
  $('.system-message').text(`Huzzah - Success! Check out your new membership now!`)
  messageReset()
}

const deleteMembershipSuccess = () => {
  $('.secondary').removeClass('hide')
  $('.GroupsViewAll').addClass('hide')
  $('.accountDetails').addClass('hide')
  $('.createGroupView').addClass('hide')
  $('.content').html('')
  $('.title').text('Dashboard')
  $('.system-message').show()
  $('.system-message').text(`Whomp... sad to see you go, but look for new groups to join now!`)
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

const getMembershipsSuccess = (responseData) => {
  $('.secondary').addClass('hide')
  $('.GroupsViewAll').removeClass('hide')
  $('.createGroupView').addClass('hide')
  $('.title').text('Get back to your groups')
  $('.content').html('')
  const showMembershipsHtml = showMemberhshipsTemplate({ userMemberships: responseData })
  $('.content').append(showMembershipsHtml)
}

const getMembershipSuccess = (responseData) => {
  console.log('Data to pass to handlebars ', responseData.group)
  const showGroupHtml = showMembershipTemplate({ group: responseData.group })
  $('.content').html('')
  $('.content').append(showGroupHtml)
}

module.exports = {
  getMembershipsSuccess,
  getMembershipSuccess,
  fail,
  joinGroupSuccess,
  deleteMembershipSuccess
}
