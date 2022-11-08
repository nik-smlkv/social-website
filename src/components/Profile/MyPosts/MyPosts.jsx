import React from 'react';
import classes from '../MyPosts/MyPosts.module.css';
import Posts from './Posts/Posts';
const MyPosts = () => {
   let posts = [
      { id: 1, message: "Hi, how are you?", countOfLikes: 12 },
      { id: 2, message: "It's a beautiful day", countOfLikes: 9 },
      { id: 3, message: "My English is very bad", countOfLikes: 40 },
      { id: 4, message: "I go to the University everyday", countOfLikes: 22 },
   ]

   let postsElement = posts.map(
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