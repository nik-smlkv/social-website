import React from 'react';
import classes from './Profile.module.css';
const Profile = () => {
   return (
      <div className='content'>
         <img src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img>
         <div>
            ava + description
         </div>
         <div>
            My post
            <div>
               New Post
            </div>
            <div className={classes.posts}>
               <div className={classes.item}>
                  post 1
               </div>
               <div className={classes.item}>
                  post 2
               </div>
            </div>
         </div>
      </div>
   );
}
export default Profile;