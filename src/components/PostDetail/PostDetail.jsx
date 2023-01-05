import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/actions/actions'

function PostDetail() {
  const { id } = useParams()
  const post = useSelector(state => state.postList)
  const commentLimit = useSelector(state => state.setting)
  const dispatch = useDispatch()
  const currPost = post[id]
  let getChanges = ''

  const getComment = (e) => {
    getChanges = e.target.value
  }

  const submitNewComment = () => {
    dispatch(addComment(getChanges, id))

  }
  const checkLimit = () => {
    console.log(currPost.commentCount.length, Number(commentLimit.comment));
    if (commentLimit.comment != '' && currPost.commentCount.length < Number(commentLimit.comment)) {
      submitNewComment()
    } else {
      alert('Reached the limit!')
    }
  }
  return (
    <div className='post-detail-wrapper'>
      <div className="container">
        <div className="post-title"><h1>{currPost.title}</h1></div>
        <div className="likes-count flex-start">Likes Count : {currPost.likeCount}</div>
        <div className="post-description flex-start">Description : {currPost.description}</div>
        <div className="post-comments flex-start">Comments:
          <div>{currPost.commentCount.map((comment, index) => {
            return (<div className='post-comment' key={index}>
              <p>{comment}</p>
              <hr className='post-hr' />
            </div>)
          })}</div>
        </div>
        <div className="your-comment flex-start">
          <textarea placeholder='your comment' onChange={getComment}></textarea>
          <button className='send-comment-btn' onClick={checkLimit}><i className="fa-solid fa-check tic"></i></button>
        </div>
      </div>
    </div>
  )
}

export default PostDetail