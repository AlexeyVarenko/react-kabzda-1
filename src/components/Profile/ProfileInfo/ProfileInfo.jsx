import React from 'react';
import Preloader from '../../Common/Preloader/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      
      <div>
        <img src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' />
      </div>
      
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
       <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>

    </div>
  )
}

export default ProfileInfo