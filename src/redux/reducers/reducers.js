import { ACTIONS } from '../actions/actions'

const date = new Date()

const loginInitial = [{
  user: 'user',
  pass: 'user'
}, {
  user: 'admin',
  pass: 'admin'
}]

const submitSettingInitial = {
  like: '',
  comment: ''
}

const postInitial = [{
  id: 1,
  title: 'test 1',
  description: 'asndasdaskmdoas aosdoas oasndaos das oasndoias oas ',
  likeCount: 12,
  commentCount: ['asdasd', 'casdas', 'casdasdas', 'asdasd4', 'casdasdasd5'],
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear(),
},
{
  id: 2,
  title: 'test 2',
  description: 'asndasdaskmdoas aosdoas oasndao klasd askdkla askdasld as asmdmasl  laskldas kld  askl dklasd las dlks s das oasndoias oas ',
  likeCount: 12,
  commentCount: ['c1', 'c2', 'c3', 'c4', 'c5'],
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear(),
},
{
  id: 3,
  title: 'test 3',
  description: 'asndasdaskmdoas aosdoas oasndaos das oasndoias oas ',
  likeCount: 12,
  commentCount: [],
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear(),
}]

const theme = { theme: 'dark' }



export const loginReducer = (state = loginInitial, { type, payload }) => {
  switch (type) {
    case ACTIONS.SUBMIT:
      return [payload]
    default:
      return state
  }
}

export const submitSettingReducer = (state = submitSettingInitial, { type, payload }) => {
  switch (type) {
    case ACTIONS.SUBMITSETTING:
      return { like: payload.like, comment: payload.comment }
    default:
      return state
  }
}

export const themeReducer = (state = theme, { type, payload }) => {
  switch (type) {
    case ACTIONS.CHANEGETHEME:
      return { theme: payload }
    default:
      return state
  }
}

export const postsListReducer = (state = postInitial, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADDPOST:
      // console.log(payload);
      return [...state, payload]
    case ACTIONS.LIKE:
      // console.log(payload, state[payload].likeCount + 1)
      return [...state, state[payload].likeCount = state[payload].likeCount + 1]
    case ACTIONS.ADDCOMMENT:
      // console.log(payload)
      return [...state, [...state[payload.index].commentCount,
      state[payload.index].commentCount.splice(state[payload.index].commentCount.length, 0, payload.comment)]]
    case ACTIONS.UPDATEPOST:
      // console.log(payload)
      return [...state, state[payload.index].title = payload.title, state[payload.index].description = payload.description]
    case ACTIONS.DELETEPOST:
      console.log(payload);
      state.splice(payload, 1)
      return state
    default:
      return state
  }
}


