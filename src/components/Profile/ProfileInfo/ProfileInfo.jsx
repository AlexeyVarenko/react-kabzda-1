import React from 'react';
import Preloader from '../../Common/Preloader/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      
      <div>
        <img src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' />
      </div>
      
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
       <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>

    </div>
  )
}

export default ProfileInfo