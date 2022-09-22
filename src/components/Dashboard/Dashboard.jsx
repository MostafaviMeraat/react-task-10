import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { like } from '../../redux/actions/actions'


const Dashboard = () => {


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state => state.login)
  const posts = useSelector(state => state.postList)
  const setting = useSelector(state => state.setting)
  let isUser = false
  let isAdmin = true
  data[0].user === 'user' ? isUser = true : isAdmin = true
  const date = posts.time
  const [comment, setComment] = useState(false)

  const checkSetting = (e, index) => {
    if (e.target.name === 'like') {
      console.log('here');
      if (setting.like !== '' && posts[index].likeCount < parseInt(setting.like)) {
        console.log('avali');
        dispatch(like(index))
      }
      else if (setting.like === '') {
        console.log('khali');
        dispatch(like(index))
      }
      else {
        alert('reach the limit');
      }
    }
    else if (e.target.name === 'comment') {
      if (setting.comment !== '' && posts[index].commentCount < parseInt(setting.comment)) {
        navigate(`feed/${index}`)
      }
      else if (setting.comment === '') {
        navigate(`feed/${index}`)
      }
      else {
        alert('reach the limit');
      }
    }

  }
  // navigate(`feed/${index}`


  const likePost = (index) => {
    checkSetting(index)
  }

  const edit = (id) => {
    navigate(`edit/${id}`)
  }

  const postDetail = (id) => {
    navigate(`feed/${id}`)
  }

  return (
    <div className='dashboard-wrapper'>
      <nav>
        <i
          className="fa-solid fa-gear gear"
          onClick={() => navigate('/dashboard/setting')}
        ></i>
        {isAdmin && <i
          className="fa-regular fa-plus plus"
          onClick={() => { navigate('admin/new') }}
        ></i>}
      </nav >
      <div className="posts">
        {posts.map((post, index) => {
          return (<div className='post' key={index}>
            <h2 onClick={() => postDetail(post.id)} >{post.title}</h2>
            <p className='description'>{post.description}</p>
            <span className='italic'>Posted in: {post.year}/{post.month}/{post.day}  </span><br />
            <div className='emotions'>
              <div name='like' className='like' onClick={(e) => checkSetting(e, index)}><span><i className="fa-regular fa-heart heart"></i>&nbsp;&nbsp; {post.likeCount}</span></div>
              {post?.commentCount && <span>{post.commentCount.length} Comments</span>}
              {isAdmin && <div><i className="fa-sharp fa-solid fa-pen pen" onClick={() => { edit(index) }}></i></div>}
            </div>
            <div className='comment-box'>
              <button name='comment' onClick={(e) => checkSetting(e, index)} className='add-comment-btn'>Add a comment</button>
            </div>
            <hr />
          </div>)
        })}

      </div>
    </div >
  )
}

export default Dashboard