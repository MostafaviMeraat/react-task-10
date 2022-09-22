import { combineReducers } from 'redux'
import { loginReducer, submitSettingReducer, postsListReducer, themeReducer } from './reducers'

const allReducers = combineReducers({
  login: loginReducer,
  setting: submitSettingReducer,
  postList: postsListReducer,
  theme: themeReducer,
})

export default allReducers