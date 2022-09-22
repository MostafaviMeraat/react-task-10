import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updatePost, deletePost } from '../../redux/actions/actions'

const Update = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [acknowledge, setAcknowledge] = useState(false)
  const post = useSelector(state => state.postList)
  const { id } = useParams()
  const [title, setTitle] = useState(post[id].title)
  const [description, setDiscription] = useState(post[id].description)

  const deleteBox = (e) => {
    e.preventDefault()
    setAcknowledge(true)
  }

  const setChanges = (e) => {
    e.preventDefault()
    dispatch(updatePost(id, title, description))
    navigate('/dashboard')

  }
  const deletingPost = (e, id) => {
    e.preventDefault()
    dispatch(deletePost(id))
    navigate('/dashboard')

  }

  return (
    <div className='edit-wrapper' >

      <form className="form">
        <input
          name='title'
          type='text'
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          name='description'
          className='textarea'
          placeholder='Description'
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
        ></textarea>
        <div className='buttons'>
          <button className='btn-edit' onClick={setChanges}>Update</button>
          <button className='btn-delete' onClick={deleteBox}>Delete</button>
        </div>
      </form>

      {
        acknowledge &&
        <div className='acknowledge'>
          <p>Are you Sure?</p>
          <div className="delete-buttons">
            <button className='delete-btn' onClick={() => setAcknowledge(false)}>No</button>
            <button className='delete-btn' onClick={(e) => { deletingPost(e, id) }}>Yes</button>
          </div>
        </div>
      }

    </div >
  )
}

export default Update