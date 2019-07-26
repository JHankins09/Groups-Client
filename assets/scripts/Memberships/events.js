'use strict'

const api = require('./api')
const store = require('./../store.js')
const ui = require('./ui')
const groupApi = require('./../groups/api.js')

const onJoinGroup = event => {
  store.newMembership = $(event.target).closest('ul').data('id')
  const data = {
    membership: {
      group_id: store.newMembership,
      user_id: store.user.id
    }
  }
  api.joinGroup(data)
    .then(ui.joinGroupSuccess)
    .catch(ui.fail)
}

const onGetMembership = event => {
  const groupid = $(event.target).data('id')
  groupApi.getGroup(groupid)
    .then(ui.getMembershipSuccess)
    .catch(ui.getGroupFail)
}

const onGetMemberships = event => {
  api.getMemberships()
    .then(ui.getMembershipsSuccess)
    .catch(ui.getMembershipFail)
}

const onDeleteMembership = event => {
  const groupID = $(event.target).data('id')
  const membershipsList = store.userData.memberships
  const membershipToDelete = membershipsList.find(membershipList => membershipList.group_id === groupID).id
  api.deleteMembership(membershipToDelete)
    .then(ui.deleteMembershipSuccess)
    .catch(ui.fail)
}

const addHandlers = () => {
  $('.content').on('click', '.joinGroup', onJoinGroup)
  $('.content').on('click', '.viewMembership', onGetMembership)
  $('.content').on('click', '.deleteMembership', onDeleteMembership)
  $('.content').on('click', '.backToMemberships', onGetMemberships)
}

module.exports = {
  addHandlers,
  onGetMemberships,
  onGetMembership
}
