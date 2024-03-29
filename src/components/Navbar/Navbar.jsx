import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Navbar/Navbar.module.css';
const Navbar = () => {
   return (
      <nav className={classes.nav}>
         <div className={classes.item}>
            <NavLink to={'/profile'} className={navData => navData.isActive ? classes.item__active : classes.item}>Profile</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to={'/users'} className={navData => navData.isActive ? classes.item__active : classes.item}>Users</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to={'/dialogs'} className={navData => navData.isActive ? classes.item__active : classes.item} >Messages</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to={'/news'} className={navData => navData.isActive ? classes.item__active : classes.item}>News</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to={'/music'} className={navData => navData.isActive ? classes.item__active : classes.item}>Music</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to={'/settings'} className={navData => navData.isActive ? classes.item__active : classes.item}>Settings</NavLink>
         </div>
      </nav>
   );
}
export default Navbar;