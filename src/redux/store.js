import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let store = {
   _state:
   {
      dialogsPage: {
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
      },
      profilePage: {
         posts: [
            { id: 1, message: "Hi, how are you?", countOfLikes: 12 },
            { id: 2, message: "It's a beautiful day", countOfLikes: 9 },
            { id: 3, message: "My English is very bad", countOfLikes: 40 },
            { id: 4, message: "I go to the University everyday", countOfLikes: 22 },
         ],
         newPostText: '',
      },
   },
   _callSubscriber() {
      console.log("State is good");
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state;
   },
   dispatch(action) {
      this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._callSubscriber(this._state);
   }
}
export default store;