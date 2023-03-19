import React from 'react';
import classes from '../MyPosts/MyPosts.module.css';
import Posts from './Posts/Posts';
const MyPosts = (props) => {
   let postsElement = props.posts.map(
      p => <Posts message={p.message} countOfLikes={p.countOfLikes} />
   );
   let newPostText = props.newPostText;
   let onAddPost = () => {props.addPost();}
   let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostText(text);
   }
   return (
      <div> 
         My post
         <div>
            <textarea onChange={onPostChange} value={newPostText} />
            <button onClick={onAddPost}>Add posts</button>
         </div>
         <div className={classes.posts}>
            {postsElement}
         </div>
      </div>
   );
}
export default MyPosts;