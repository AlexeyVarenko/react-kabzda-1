import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

  let postData=[
    {id:1, message:'Hi! How are you?', likeCount: 10},
    {id:2, message:"It's my first page", likeCount: 15},
]

  return (
    <div className={s.PostsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likeCount={postData[0].likeCount} />
        <Post message={postData[1].message} likeCount={postData[1].likeCount} />
      </div>
    </div>
  )
}

export default MyPosts