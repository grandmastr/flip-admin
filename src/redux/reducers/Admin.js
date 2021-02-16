import {
  ALT_ADMIN_DATA,
  ALT_ADMIN_DASHBOARD,
  ALT_WITHDRAWAL_REQUESTS,
  ALT_GIFTCARDS,
} from '../constants/Admin'

const initState = {
  adminData: {},
  dashboardData: {},
  withDrawalRequests: [],
  giftCards: [],
}

const admin = (state = initState, action) => {
  switch (action.type) {
    case ALT_ADMIN_DATA:
      return {
        ...state,
        adminData: action.payload,
      }
    case ALT_ADMIN_DASHBOARD:
      return {
        ...state,
        dashboardData: action.payload,
      }
    case ALT_WITHDRAWAL_REQUESTS:
      return {
        ...state,
        withDrawalRequests: action.payload,
      }
    case ALT_GIFTCARDS:
      return {
        ...state,
        giftCards: action.payload,
      }
    default:
      return state
  }
}

export default admin
