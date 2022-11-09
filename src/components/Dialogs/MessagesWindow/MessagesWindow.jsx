import React from "react";
import { NavLink, Route } from "react-router-dom";
import './../Dialogs.css'

const MessagesWindow = (props) => {
   return (
      <p>
         {props.message}
      </p>
   );
}

export default MessagesWindow