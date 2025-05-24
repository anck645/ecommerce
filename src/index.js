import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './SignUp';
import Courses from './Courses';
import Home from './HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='Login' Component={Login}/>
      <Route path='SignUp' Component={SignUp}/>
      <Route path='Courses' Component={Courses}/>
      <Route path='' Component={Home}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
