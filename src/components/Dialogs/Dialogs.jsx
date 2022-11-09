import React from "react";
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import MessagesAuthor from "./MessagesAuthor/MessagesAuthor";
import MessagesWindow from "./MessagesWindow/MessagesWindow";




const Dialogs = (props) => {

   let dialogsElement = props.state.dialogs.map(
      d => <DialogItem name={d.name} id={d.id} />
   );
   let messagesElement = props.state.messages.map(
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