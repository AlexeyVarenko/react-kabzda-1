import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

  let posts=[
    {id:1, message:'Hi! How are you?', likeCount: 10},
    {id:2, message:"It's my first page", likeCount: 15},
    {id:3, message:"BlaBla", likeCount: 11},
    {id:4, message:"Yo", likeCount: 151},
]

let postsElement=posts.map(p=><Post message={p.message} likeCount={p.likeCount} />)

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
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts