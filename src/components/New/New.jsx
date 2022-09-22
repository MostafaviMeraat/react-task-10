import { addPost } from '../../redux/actions/actions'

import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const New = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const newPost = {}

  const change = (e) => {
    if (e.target.name === 'title') {
      newPost.title = e.target.value
    } else if (e.target.name === 'description') {
      newPost.description = e.target.value
    }
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost(newPost))
    navigate(-1)
  }

  return (
    <div className='new-wrapper'>
      <form>

        <div className="title">
          <input
            autoFocus
            id='title'
            type='text'
            placeholder=' '
            name='title'
            onChange={change}
          />
          <label
            className='label-title'>Title</label>
        </div>
        <div className="discription">
          <textarea
            onChange={change}
            name='description'
            className='textarea'
            placeholder='Description'
          ></textarea>
        </div>
        <div className="submit">
          <button
            onClick={handelSubmit}
            className='button'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default New