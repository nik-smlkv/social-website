import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
const App = (props) => {
   return (
      <div className='app-wrapper'>
         <HeaderContainer />
         <Navbar />
         <div className='app-wrapper-content'>
            <Routes>
               <Route exact path='/dialogs' element={<DialogsContainer />} />
               <Route path='/profile/:userId' element={<ProfileContainer />} />
               <Route path='/profile/*' element={<ProfileContainer />} />
               <Route path='/users' element={<UsersContainer />} />
               <Route exact path='/news' element={<News />} />
               <Route exact path='/music' element={<Music />} />
               <Route exact path='/settings' element={<Settings />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
