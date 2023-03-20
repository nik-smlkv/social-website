import React from 'react';
import style from '../Users/Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/img/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.webp';
class Users extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
      });
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
      });
   }
   render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }

      return (
         <div className={style.padding}>
            <div>{pages.map(numberPage => {
               return <span className={this.props.currentPage === numberPage ? style.span__style : ''} 
                  onClick={(e) => { this.onPageChanged(numberPage)}}>
                  {numberPage}</span>
            })}
            </div>
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