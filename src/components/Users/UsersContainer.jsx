import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Users from './Users';


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      followed: (userId) => {
         dispatch(followAC(userId));
      },
      unfollowed:(userId)=>{
         dispatch(unfollowAC(userId));
      },
      setUsers: (user)=>{
         dispatch(setUsersAC(user));
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);