import React from 'react';
import Balance from './components/Balance'
import avatar from "./img/avatar-2.jpeg"
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNav from './components/MainNav';
import PrograssBars from './components/ProgressBar';

function App() {

  return (
    <div>
      <MainNav />
      <Balance avatar={avatar}/>
      <PrograssBars/>
    </div>
  );
}

export default App;
