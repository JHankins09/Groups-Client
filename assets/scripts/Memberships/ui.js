'use strict'
const store = require('../store.js')
const showMemberhshipsTemplate = require('../templates/memberships-groups.handlebars')
const showMembershipTemplate = require('../templates/single-membership-page.handlebars')

const getMembershipsSuccess = (responseData) => {
  $('.secondary').addClass('hide')
  $('.GroupsViewAll').removeClass('hide')
  $('.createGroupView').addClass('hide')
  $('.title').text('Get back to your groups')
  $('.content').html('')
  const showMembershipsHtml = showMemberhshipsTemplate({ groups: store.userData.groups })
  $('.content').append(showMembershipsHtml)
  console.log('Succes', store.userData.groups)
}

const getMembershipSuccess = (responseData) => {
  const showGroupHtml = showMembershipTemplate({ group: responseData.group })
  $('.content').html('')
  $('.content').append(showGroupHtml)
}

module.exports = {
  getMembershipsSuccess,
  getMembershipSuccess
}
