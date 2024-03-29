import React from 'react';
import HomePage from './pages/HomePage/HomePage';

import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import FavouritePage from './pages/FavouritePage/FavouritePage'
import SettingsPage from './pages/SettingsPage/SettingPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {




  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>}></Route>
        <Route path = "/login" element = {<LoginPage/>}></Route>
        <Route path = "/register" element = {<RegisterPage/>}></Route>
        <Route path="/favourite" element = {<FavouritePage/>}></Route>
        <Route path="/settings" element = {<SettingsPage/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
