import React from 'react';
import  './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { LoginPage, SignUpPage } from './Routes';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
         <Route path="/signUp" element={<SignUpPage/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App