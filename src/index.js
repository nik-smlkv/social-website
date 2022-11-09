import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
   { id: 1, message: "Hi, how are you?", countOfLikes: 12 },
   { id: 2, message: "It's a beautiful day", countOfLikes: 9 },
   { id: 3, message: "My English is very bad", countOfLikes: 40 },
   { id: 4, message: "I go to the University everyday", countOfLikes: 22 },
]

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <React.StrictMode>
      <App posts={posts} messages={messages} dialogs={dialogs} />
   </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
