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

   let dialogsData = [
      { id: 1, name: 'Alexandr' },
      { id: 2, name: 'Artem' },
      { id: 3, name: 'Nikita' },
      { id: 4, name: 'Alisa' },
      { id: 5, name: 'Nikolay' },
      { id: 6, name: 'Viktor' },
   ]

   let messagesData = [
      { id: 1, message: "How are you?" },
      { id: 2, message: "Hi, Im Dory" },
      { id: 3, message: "What happened?" },
      { id: 4, message: "I go to school" },
      { id: 5, message: "YO!" },
      { id: 6, message: "YO!" },
   ]
   return (
      <section className="dialogs">
         <div className="dialogs__container">
            <div className="dialogs__body">
               <div className="dialogs__name name__dialogs">
                  <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                  <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                  <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
               </div>
               <div className="dialogs__messages messages__dialogs">
                     <MessagesAuthor/>
                  <div className="messages__window">
                     <MessagesWindow message={messagesData[0].message} />
                     <MessagesWindow message={messagesData[1].message} />
                     <MessagesWindow message={messagesData[2].message} />
                     <MessagesWindow message={messagesData[4].message} />
                     <MessagesWindow message={messagesData[5].message} />
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}
export default Dialogs;