import React from 'react';
import classes from './Posts.module.css';
const Posts = () => {
   return (
      <div className={classes.item}>
         <img src="https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg"></img>
         post 1
         <div>
            <span>like</span>
         </div>
      </div>

   );
}
export default Posts;