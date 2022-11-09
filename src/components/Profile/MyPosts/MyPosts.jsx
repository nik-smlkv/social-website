import React from 'react';
import classes from '../MyPosts/MyPosts.module.css';
import Posts from './Posts/Posts';
const MyPosts = (props) => {

   let postsElement = props.posts.map(
      p => <Posts message={p.message} countOfLikes={p.countOfLikes} />
   );

   return (
      <div>
         My post
         <div>
            <textarea></textarea>
            <button>Add posts</button>
         </div>
         <div className={classes.posts}>
         {postsElement}
         </div>
      </div>
   );
}
export default MyPosts;