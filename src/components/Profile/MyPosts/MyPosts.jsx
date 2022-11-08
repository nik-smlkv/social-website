import React from 'react';
import classes from '../MyPosts/MyPosts.module.css';
import Posts from './Posts/Posts';
const MyPosts = () => {
   let postsData = [
      { id: 1, message: "Hi, how are you?", countOfLikes: 12 },
      { id: 2, message: "It's a beautiful day", countOfLikes: 9 },
      { id: 3, message: "My English is very bad", countOfLikes: 40 },
      { id: 4, message: "I go to the University everyday", countOfLikes: 22 },
   ]
   return (
      <div>
         My post
         <div>
            <textarea></textarea>
            <button>Add posts</button>
         </div>
         <div className={classes.posts}>
            <Posts message={postsData[0].message} countOfLikes={postsData[0].countOfLikes} />
            <Posts message={postsData[1].message} countOfLikes={postsData[1].countOfLikes} />
            <Posts message={postsData[2].message} countOfLikes={postsData[2].countOfLikes} />
            <Posts message={postsData[3].message} countOfLikes={postsData[3].countOfLikes} />
         </div>
      </div>
   );
}
export default MyPosts;