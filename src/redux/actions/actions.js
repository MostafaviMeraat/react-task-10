
export const ACTIONS = {
  SUBMIT: 'SUBMIT',
  SUBMITSETTING: 'SUBMITSETTINGS',
  CHANEGETHEME: 'CHANGETHEME',
  ADDPOST: 'ADDPOST',
  LIKE: 'LIKE',
  ADDCOMMENT: 'ADDCOMMENT',
  UPDATEPOST: 'UPDATEPOST',
  DELETEPOST: 'DELETEPPOST',
}

const date = new Date()

export const submit = (data) => {
  return {
    type: ACTIONS.SUBMIT,
    payload: data
  }
}

export const submitSettings = (data) => {
  return {
    type: ACTIONS.SUBMITSETTING,
    payload: data
  }
}

export const addPost = (data) => {
  console.log(data);
  return {
    type: ACTIONS.ADDPOST,
    payload: {
      id: Math.random(),
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      title: data.title,
      description: data.description,
      likeCount: 0,
      commentCount: 0

    }
  }
}

export const like = (index) => {
  return {
    type: ACTIONS.LIKE,
    payload: index
  }
}

export const addComment = (comment, index) => {
  return {
    type: ACTIONS.ADDCOMMENT,
    payload: {
      comment: comment,
      index: index
    }
  }
}

export const updatePost = (index, title, description) => {

  return {
    type: ACTIONS.UPDATEPOST,
    payload: {
      index: index,
      title: title,
      description: description,
    }
  }
}

export const deletePost = (index) => {
  return {
    type: ACTIONS.DELETEPOST,
    payload: index
  }
}

export const changeTheme = (current) => {
  return {
    type: ACTIONS.CHANEGETHEME,
    payload: current
  }
}