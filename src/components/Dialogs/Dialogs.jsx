import React from "react";
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import MessagesAuthor from "./MessagesAuthor/MessagesAuthor";
import MessagesWindow from "./MessagesWindow/MessagesWindow";


const Dialogs = (props) => {

   let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
   let messagesElement = props.dialogsPage.messages.map(m => <MessagesWindow message={m.message} key={m.id} />);

   let newMessageText = props.dialogsPage.newMessageText;

   const addNewMessage = () => { props.addMessage(); }
   const changeMessage = (e) => {
      let messageText = e.target.value;
      props.updateMessage(messageText);
   }
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
               <div>
                  <textarea onChange={changeMessage} value={newMessageText}>
                  </textarea>
                  <button onClick={addNewMessage}>Add Message</button>
               </div>
            </div>
         </div>
      </section>
   );
}
export default Dialogs;