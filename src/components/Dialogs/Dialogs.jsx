import React from "react";
import { NavLink, Route } from "react-router-dom";
import './Dialogs.css'


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
const MessagesWindow = (props) => {
   return (
      <p>
         {props.message}
      </p>
   );
}

const Dialogs = () => {
   let dialogs = [
      { id: 1, name: 'Alexandr' },
      { id: 2, name: 'Artem' },
      { id: 3, name: 'Nikita' },
      { id: 4, name: 'Alisa' },
      { id: 5, name: 'Nikolay' },
      { id: 6, name: 'Viktor' },
   ]
   let messages = [
      { id: 1, message: "How are you?" },
      { id: 2, message: "Hi, Im Dory" },
      { id: 3, message: "What happened?" },
      { id: 4, message: "I go to school" },
      { id: 5, message: "YO!" },
      { id: 6, message: "YO!" },
   ]


   let dialogsElement = dialogs.map(
      d => <DialogItem name={d.name} id={d.id} />
   );
   let messagesElement = messages.map(
      m => <MessagesWindow message={m.message} />
   );


   return (
      <section className="dialogs">
         <div className="dialogs__container">
            <div className="dialogs__body">
               <div className="dialogs__name name__dialogs">
                  {dialogsElement}
               </div>
               <div className="dialogs__messages messages__dialogs">
                  <MessagesAuthor />
                  <div className="messages__window">
                     {messagesElement}
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}
export default Dialogs;