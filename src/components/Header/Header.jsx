import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Header/Header.module.css';

const Header = (props) =>
{
   return(
      <header className={classes.header}>
         <img src="https://www.pngall.com/wp-content/uploads/10/Message-Logo.png"></img>
         {props.isAuth ? props.login : <div className={classes.login}><NavLink to={'/login'}>Login</NavLink></div>}

      </header>

   );
}
export default Header;