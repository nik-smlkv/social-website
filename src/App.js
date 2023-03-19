import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
const App = (props) => {
   return (
      <div className='app-wrapper'>
         <Header />
         <Navbar />
         <div className='app-wrapper-content'>
            <Routes>
               <Route exact path='/dialogs' element={<DialogsContainer  />} />
               <Route exact path='/profile' element={<Profile  />} />
               <Route exact path='/users' element={<UsersContainer/>} />
               <Route exact path='/news' element={<News />} />
               <Route exact path='/music' element={<Music />} />
               <Route exact path='/settings' element={<Settings />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
