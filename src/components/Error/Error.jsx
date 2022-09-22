import { Link } from 'react-router-dom'
import React from 'react'

const Error = () => {
  return (
    <div className='error-wrapper'>
      <div className="error">
        <h2>404 !!</h2>
        <h1>Oops, Looks like you lost <i className="fa-solid fa-face-frown-open"></i> </h1>
        <Link className='link' to='/dashboard'>Back to Dashboard</Link>
      </div>

    </div>
  )
}

export default Error