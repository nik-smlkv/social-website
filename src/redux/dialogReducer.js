const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
   messages: [
      { id: 1, message: "How are you?" },
      { id: 2, message: "Hi, Im Dory" },
      { id: 3, message: "What happened?" },
      { id: 4, message: "I go to school" },
      { id: 5, message: "YO!" },
      { id: 6, message: "YO!" },
   ],
   dialogs: [
      { id: 1, name: 'Alexandr' },
      { id: 2, name: 'Artem' },
      { id: 3, name: 'Nikita' },
      { id: 4, name: 'Alisa' },
      { id: 5, name: 'Nikolay' },
      { id: 6, name: 'Viktor' },
   ],
   newMessageText: '',
}

const dialogReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE: {
         let newMessage = {
            id: 6,
            message: state.newMessageText,
         }
         return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, newMessage]
         };
      }
      case UPDATE_MESSAGE: {
         return {
            ...state,
            newMessageText: action.messageText
         };
      }
      default:
         return state;
   }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageActionCreator = (messageText) => ({ type: UPDATE_MESSAGE, messageText: messageText });
export default dialogReducer;