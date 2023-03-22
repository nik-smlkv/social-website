import React from 'react';
import classes from './ProfileInfo.module.css'
import Reloader from '../../common/Preloader/Preloader';
const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Reloader />
   }
   
   return (
      <div className={classes.content}>
         <img src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img>
         <div>
            <img src={props.profile.photos.large} />
            <div className={classes.padding}>
               <div className={classes.descriptions}><p>Descriptions</p></div>
               <div>{props.profile.aboutMe}</div>
               <div>{props.profile.contacts.facebook}</div>
               <div>{props.profile.fullName}</div>
               <div>{props.profile.lookingForAJob}</div>
               <div>{props.profile.lookingForAJobDescription}</div>
            </div>
         </div>
      </div>
   );
}
export default ProfileInfo;