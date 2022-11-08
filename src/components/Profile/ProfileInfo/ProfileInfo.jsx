import React from 'react';
import classes from './ProfileInfo.module.css'
const ProfileInfo = () => {
   return (
      <div className={classes.content}>
         <img src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img>
         <div>
            ava + description
         </div>
      </div>
   );
}
export default ProfileInfo;