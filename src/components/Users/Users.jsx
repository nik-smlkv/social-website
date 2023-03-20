import React from 'react';
import style from '../Users/Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/img/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.webp';
class Users extends React.Component {
   getUsers = () => {
      if (this.props.users.length === 0) {
         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
         });
      }
   }
   render() {
      return (
         <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
               this.props.users.map(user => <div className={style.avatar__image}>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                  <div>
                     {user.followed ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                        : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
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
}

export default Users;