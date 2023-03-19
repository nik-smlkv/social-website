import { combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";



let reducers = combineReducers({
   dialogsPage: dialogReducer,
   profilePage: profileReducer,
   usersPage: usersReducer,
});
let store = createStore(reducers);

export default store;