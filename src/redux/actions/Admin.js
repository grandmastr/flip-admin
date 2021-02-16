import axios from '../../lib/axios'
import {
  ALT_ADMIN_DATA,
  ALT_ADMIN_DASHBOARD,
  ALT_WITHDRAWAL_REQUESTS,
  ALT_GIFTCARDS,
} from '../constants/Admin.js'

export const altAdminData = (payload) => ({
  type: ALT_ADMIN_DATA,
  payload,
})

export const altAdminDashboardData = (payload) => ({
  type: ALT_ADMIN_DASHBOARD,
  payload,
})

export const altWithDrawalRequests = (payload) => ({
  type: ALT_WITHDRAWAL_REQUESTS,
  payload,
})

export const altGiftCards = (payload) => ({
  type: ALT_GIFTCARDS,
  payload,
})

export const handleGetDashboardData = () => async (dispatch) => {
  return await axios.get('/admin/dashboard').then((response) => {
    console.log(response, 'sdjsdkjskj')
  })
}

// Gift Cards
export const handleUpdateCardRate = (cardparams, formData) => async (
  dispatch,
) => {
  console.log(cardparams, formData, 'sjkdjskj')
  return await axios
    .put(`/admin/cards/${cardparams}/update-card-rates`, formData)
    .then((response) => {
      console.log(response, 'Sjskdjdkj')
    })
}

export const handleGetAllGiftSaleTransactions = () => async (dispatch) => {
  return await axios
    .get('/admin/cards/get-all-transactions?skip=0&limit=20')
    .then((response) => {
      console.log(response, 'Sdjkdksdjskj')
    })
}

export const handleGetNewCardSales = () => async (dispatch) => {
  return await axios
    .get(`/admin/cards/get-new-transactions?skip=0&limit=20`)
    .then((response) => {
      console.log(response, 'sjdkjdskdjskkj')
    })
}

export const AlterCardSalesTransaction = (transactionId, action) => async (
  dispatch,
) => {
  const url =
    action === 'approve'
      ? `/admin/cards/${transactionId}/approve-transaction`
      : `/admin/cards/${transactionId}/decline-transaction`

  return await axios.post(url).then((response) => {
    // if (response)
    // Fetch all transaction
    // dispatch(handleGetNewCardSales())
  })
}

// WithDrawal
export const handleGetAllWithDrawal = () => async (dispatch) => {
  return await axios
    .get(`/admin/withdrawals/get-all-transactions?skip=0&limit=20`)
    .then((response) => {
      console.log(response, 'Sdjksdkjsksj')
    })
}

export const handleGetNewWithdrawalRequests = () => async (dispatch) => {
  return await axios
    .get(`/admin/withdrawals/get-new-transactions?skip=0&limit=20`)
    .then((response) => {
      console.log(response)
    })
}
