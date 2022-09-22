import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submit } from '../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'


const Login = () => {


  let value =
  {
    user: '',
    pass: '',
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const data = useSelector(state => state.login)

  const handelChange = (e) => {
    if (e.target.name === 'username') {
      value.user = e.target.value
    }
    else if (e.target.name === 'password') {
      value.pass = e.target.value
    }
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    data.map(() => {
      if (value.user === 'user' && value.pass === 'user') {
        dispatch(submit(value))
        navigate('/dashboard')
      }
      else if (value.user === 'admin' && value.pass === 'admin') {
        dispatch(submit(value))
        navigate('/dashboard')
      }
    })

  }


  return (
    <div className="wrapperLogin">

      <div className="header"><h2>Welcome to Social Media Simulator, Login to Continue</h2></div>
      <div className="form">
        <form>

          <div className="user">
            <input
              onChange={handelChange}
              autoFocus
              className='login-input'
              type='text'
              placeholder=' '
              // value={value.user}
              name='username' />
            <label className='userLabel'>UserName</label>
          </div>
          <div className="pass">

            <input
              onChange={handelChange}
              className='login-input'
              type='password'
              placeholder=' '
              // value={value.pass}
              name='password' />
            <label className='passwordLabel'>Password</label>
          </div>
          <div className="submit">
            <button
              className='button'
              onClick={handelSubmit}
            >Login</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login