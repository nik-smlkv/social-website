import React from "react";
import { NavLink} from "react-router-dom";
import './../Dialogs.css'


const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <ul className="name__list">
         <li className="name__item">
            <NavLink to={path} className={navData => navData.isActive ? ".item__active" : ".name__item"}>
               {props.name}
            </NavLink>
         </li>
      </ul>
   );
}
export default DialogItem