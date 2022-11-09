import React from "react";
import { NavLink, Route } from "react-router-dom";
import './../Dialogs.css'


const MessagesAuthor = () => {
   return (
      <div className="messages__author">
         <div className="messages__avatar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAne04uWKmXzLpReuNl5Ls3Kp3o6YIUZgU3BC1Nm_K&s">
            </img>
         </div>
         <div className="messages__name">Alexandr</div>
      </div>

   );
}
 export default MessagesAuthor