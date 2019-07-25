'use strict'

const api = require('./api')
const store = require('./../store.js')
const ui = require('./ui')

const onJoinGroup = event => {
  store.newMembership = $(event.target).closest('ul').data('id')
  const data = {
    membership: {
      group_id: store.newMembership,
      user_id: store.user.id
    }
  }
  console.log(data)
  api.joinGroup(data)
    .then(console.log(`You're in the band`))
    .catch(console.log(`fuck you, get out.`))
}

const onGetMemberships = event => {
  api.getMemberships()
    .then(ui.getMembershipsSuccess)
    .catch(ui.getMembershipFail)
}

const addHandlers = () => {
  $('.content').on('click', '.joinGroup', onJoinGroup)
}

module.exports = {
  addHandlers,
  onGetMemberships
}
