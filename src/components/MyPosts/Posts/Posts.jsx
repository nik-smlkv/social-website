import React from 'react';
import classes from './Posts.module.css';
const Posts = (props) => {
   return (
      <div className={classes.item}>
         <img src="https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg"></img>
         {props.message}
         <div>
            <span>like: {props.countOfLikes}</span>
         </div>
      </div>

   );
}
export default Posts;