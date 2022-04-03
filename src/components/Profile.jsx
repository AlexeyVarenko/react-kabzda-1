import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className='content'>
      <img src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' />
      <div> ava + description </div>
      <div>
        My posts
        <div>
          New Post
        </div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
          <div className={s.item}>Post 3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile