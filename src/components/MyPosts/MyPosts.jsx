import React from 'react';
import classes from '../MyPosts/MyPosts.module.css';
import Posts from './Posts/Posts';
const MyPosts = () => {
   return (
      <div>
         My post
         <div>
            <textarea></textarea>
            <button>Add posts</button>
         </div>
         <div className={classes.posts}>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
         </div>
      </div>
   );
}
export default MyPosts;