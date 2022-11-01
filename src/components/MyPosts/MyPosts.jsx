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
            <Posts message = "Hi, how are you?" countOfLikes = "12"/>
            <Posts message="It's a beautiful day" countOfLikes="9" />
            <Posts message="My English is very bad" countOfLikes="40" />
            <Posts message="I go to the University everyday" countOfLikes="22" />
         </div>
      </div>
   );
}
export default MyPosts;