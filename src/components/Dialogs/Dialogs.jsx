import React from "react";
import { NavLink, Route } from "react-router-dom";
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import MessagesAuthor from "./MessagesAuthor/MessagesAuthor";
import MessagesWindow from "./MessagesWindow/MessagesWindow";




const Dialogs = (props) => {

   let dialogsElement = props.dialogs.map(
      d => <DialogItem name={d.name} id={d.id} />
   );
   let messagesElement = props.messages.map(
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