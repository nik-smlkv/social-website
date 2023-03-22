import React from 'react';
import style from '../Users/Users.module.css';
import userPhoto from '../../assets/img/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.webp';
import { NavLink } from 'react-router-dom';
let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return (
      <div className={style.padding}>
         <div>{pages.map(numberPage => {
            return <span className={props.currentPage === numberPage ? style.span__style : ''}
               onClick={(e) => { props.onPageChanged(numberPage) }}>
               {numberPage}</span>
         })}
         </div>
         {
            props.users.map(user => <div className={style.avatar__image}>
               <NavLink to={'/profile/' + user.id}><img src={user.photos.small != null ? user.photos.small : userPhoto} /></NavLink>
               <div>
                  {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                     : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
               </div>
               <div>
                  <span>{user.name}</span>
                  <div>
                     <span>{user.status}</span>
                     <div>
                        <span>{'user.location.country'} </span>
                        <span>{'user.location.city'}</span>
                     </div>
                  </div>
               </div>
            </div>
            )}
      </div>)
}


export default Users;