'use strict'

const back = () => {
  $('.secondary').removeClass('hide')
  $('.GroupsViewAll').addClass('hide')
  $('.accountDetails').addClass('hide')
  $('.createGroupView').addClass('hide')
  $('.content').html('')
  $('.title').text('Dashboard')
}

const accountSettings = responseData => {
  $('.secondary').addClass('hide')
  $('.accountDetails').removeClass('hide')
  $('#collapseThree').removeClass('show')
  $('#collapseFour').removeClass('show')
  $('.title').text('Account Details')
}

const goToCreateGroup = responseData => {
  $('.secondary').addClass('hide')
  $('.createGroupView').removeClass('hide')
  $('.title').text('Create')
}

const goToEditGroup = () => {
  $('.secondary').addClass('hide')
  $('.editGroupView').removeClass('hide')
  $('.title').text('Create')
}

module.exports = {
  back,
  accountSettings,
  goToCreateGroup,
  goToEditGroup
}
