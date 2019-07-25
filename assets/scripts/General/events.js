'use strict'

const ui = require('./ui')

const onBack = event => {
  ui.back()
}

const onAccountSettings = event => {
  ui.accountSettings()
}

const onGoToCreateGroup = event => {
  ui.goToCreateGroup()
}

const onUserCommunities = event => {
  ui.goToUserCommunities()
}

const onEditGroup = () => {
  ui.goToEditGroup()
}

const addHandlers = () => {
  $('.content').on('click', '.editGroup', onEditGroup)
}

module.exports = {
  onBack,
  onAccountSettings,
  onGoToCreateGroup,
  onUserCommunities,
  addHandlers
}
