import React from 'react';
import Balance from "./MainPage/Balance"
import avatar from "../img/avatar-2.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./MainNav"
import PrograssBars from './MainPage/ProgressBar';

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