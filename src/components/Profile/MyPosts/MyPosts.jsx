import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {



  let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch( addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: text})
    let action = updateNewPostTextActionCreator(text);
  }

  return (
    <div className={s.PostsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>
            Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts