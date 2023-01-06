import './App.css';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import Privateroute from './componants/Privateroute';
import NoteState from './Context/Notes/NoteState';
import Register from './pages/Register';

function App() {

  return (
    <NoteState>
      <BrowserRouter>
        <Routes>
          <Route element={<Privateroute />} >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/settings/*" element={<Settings />} />
            <Route path="/chats/:userId" element={<Home />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
