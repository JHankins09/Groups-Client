'use strict'
const store = require('../store.js')

const getMembershipsSuccess = (responseData) => {
  // const myMemberships = responseData.
  console.log('Succes', store.user.groups, store.user.memberships)
}

const getMembershipFail = (responseData) => {
  console.log('Fail', responseData)
}

module.exports = {
  getMembershipsSuccess,
  getMembershipFail
}
