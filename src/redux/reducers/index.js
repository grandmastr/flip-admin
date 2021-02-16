import { combineReducers } from 'redux'
import Auth from './Auth'
import Theme from './Theme'
import Users from './Users'
import Admin from './Admin'

const reducers = combineReducers({
  theme: Theme,
  users: Users,
  auth: Auth,
  admin: Admin,
})

export default reducers
