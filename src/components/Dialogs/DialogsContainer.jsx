import { connect } from "react-redux";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   };
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => { dispatch(addMessageActionCreator()) },
      updateMessage: (messageText) => { dispatch(updateMessageActionCreator(messageText)) },
   };
}  
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;