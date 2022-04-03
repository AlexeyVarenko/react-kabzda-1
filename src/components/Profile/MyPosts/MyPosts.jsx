import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi! How are you?' likeCount='10'/>
        <Post message="It's my first page" likeCount='15'/>
      </div>
    </div>
  )
}

export default MyPosts