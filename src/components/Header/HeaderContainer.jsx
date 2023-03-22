import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, toggleIsFetching } from '../../redux/authReducer';
import Header from './Header';
class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
         .then(response => {
            
            if (response.data.resultCode === 0) {
               let { id, email, login } = response.data.data;
               this.props.setAuthUserData({ id, email, login });
               this.props.toggleIsFetching(false);
            }
         });
   }

   render() {
      return (
         <Header {...this.props} />
      );
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      isFetching: state.isFetching
   }
}

export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching })(HeaderContainer);