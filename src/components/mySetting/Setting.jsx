import React, { useState } from 'react'
import { submitSettings, changeTheme } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Setting = () => {

  const dispatch = useDispatch()
  const apply = useSelector(state => state.setting)
  const navigate = useNavigate()


  const [likeLimit, setLikeLimit] = useState(true)
  const [commentLimit, setCommentLimit] = useState(true)
  const [currTheme, setCurrTheme] = useState(true)
  const counter = {}


  const changed = (e) => {


    if (e.target.name === 'theme') {
      if (currTheme) {
        dispatch(changeTheme('light'))
        setCurrTheme(!currTheme)
      }
      else {
        dispatch(changeTheme('dark'))
        setCurrTheme(!currTheme)
      }
    }
    else if (e.target.name === 'like') {
      setLikeLimit(!likeLimit)
    }
    else if (e.target.name === 'comment') {
      setCommentLimit(!commentLimit)
    }

  }

  const changeCount = (e) => {
    if (e.target.name === 'count-like') {
      counter.like = e.target.value
    }
    else if (e.target.name === 'count-comment') {
      counter.comment = e.target.value
    }
  }
  const count = () => {
    dispatch(submitSettings(counter))
    navigate(-1)
  }

  return (
    <div className='wrapperSetting'>
      <div className="setting">
        <h1>Setting</h1>

        {/* theme section */}
        <div className="theme">
          <div className="head">
            <h2>Theme</h2>
          </div>
          <div className="flex">
            <div className="flex">
              <label className='mylabel'>Dark</label>
              <input
                className='radio'
                type='radio'
                name='theme'
                defaultChecked
                onChange={changed}
              /></div>
            <div className="flex">
              <label className='mylabel'>Light</label>
              <input
                className='radio'
                type='radio'
                name='theme'
                onChange={changed}
              /></div>
          </div>
        </div><hr />
        {/* like section */}
        <div className="like">
          <div className="head">
            <h2>Maximum Likes Count</h2>
          </div>
          <div className="flex">
            <div className="flex">
              <label className='mylabel'>Limited</label>
              <input
                className='radio'
                type='radio'
                name='like'
                defaultChecked
                onChange={changed}
              /></div>
            <div className="flex">
              <label className='mylabel'>Unlimited</label>
              <input
                className='radio'
                type='radio'
                name='like'
                onChange={changed}
              /></div>
          </div>
          {likeLimit && <div className="count">
            <input
              className='setting-input'
              type='number'
              name='count-like'
              placeholder='Count'
              onChange={changeCount}
            />
          </div>}
        </div><hr />
        {/* comment section */}
        <div className="comment">
          <div className="head">
            <h2>Maximum Comments Count</h2>
          </div>
          <div className="flex">
            <div className="flex">
              <label className='mylabel'>Limited</label>
              <input
                className='radio'
                type='radio'
                name='comment'
                defaultChecked
                onChange={changed}
              /></div>
            <div className="flex">
              <label className='mylabel'>Unlimited</label>
              <input
                className='radio'
                type='radio'
                name='comment'
                onChange={changed}
              /></div>
          </div>
          {commentLimit && <div className="count">
            <input
              className='setting-input'
              type='number'
              name='count-comment'
              placeholder='Count'
              onChange={changeCount}
            />
          </div>}
        </div>
        {/* button */}
        <div className='submit-setting'>
          <button className="button-setting" onClick={count}>Apply Changes</button>
        </div>
      </div>
    </div>
  )
}

export default Setting