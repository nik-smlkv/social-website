import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
const Profile = () => {
   return (
      <div className='content'>
         <img src='https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'></img>
         <div>
            ava + description
         </div>
         <MyPosts/>
      </div>
   );
}
export default Profile;