import './App.css';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chats/:userId" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings/*" element={ <Settings />  }/>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
