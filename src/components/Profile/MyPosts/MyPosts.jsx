import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {
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
        <Post message='Hi! How are you?' likeCount='10' />
        <Post message="It's my first page" likeCount='15' />
      </div>
    </div>
  )
}

export default MyPosts