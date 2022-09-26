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
  let isUser = true
  let isAdmin = false
  data[0].user === 'user' ? isUser = true : isAdmin = true
  const date = posts.time
  const [comment, setComment] = useState(false)

  const checkSetting = (index) => {

    if (setting.like !== '' && posts[index].likeCount < parseInt(setting.like)) {
      dispatch(like(index))
    }
    else if (setting.like === '') {
      dispatch(like(index))
    }
    else {
      alert('reach the limit');
    }
  }

  const checkComment = (e, index) => {
    if (setting.comment !== '' && posts[index].commentCount.length < parseInt(setting.comment)) {
      navigate(`feed/${index}`)
    }
    else if (setting.comment === '') {
      navigate(`feed/${index}`)
    }
    else {
      alert('reach the limit');
    }
  }




  const likePost = (index) => {
    checkSetting(index)
  }

  const edit = (id) => {
    navigate(`edit/${id}`)
  }

  const postDetail = (id) => {
    navigate(`feed/${id - 1}`)
  }

  console.log(posts);

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
              <div className='like' onClick={() => likePost(index)}><span><i className="fa-regular fa-heart heart"></i>&nbsp;&nbsp; {post.likeCount}</span></div>
              {post?.commentCount && <span>{post.commentCount.length} Comments</span>}
              {console.log(isAdmin)}
              {isAdmin && <div><i className="fa-sharp fa-solid fa-pen pen" onClick={() => { edit(index) }}></i></div>}
            </div>
            <div className='comment-box'>
              <button onClick={(e) => checkComment(e, index)} className='add-comment-btn'>Add a comment</button>
            </div>
            <hr />
          </div>)
        })}

      </div>
    </div >
  )
}

export default Dashboard