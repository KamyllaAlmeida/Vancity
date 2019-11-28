import React from 'react';
import Balance from "./MainPage/Balance"
import avatar from "../img/avatar-2.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import PrograssBars from './MainPage/ProgressBar';


function MainPage() {

  return (

    <div>
      <Balance avatar={avatar}/>
      <PrograssBars/>
    </div>
  );
}

export default MainPage;
