import React from 'react';
import Balance from "./MainPage/Balance"
import avatar from "../img/avatar-2.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import PrograssBars from './MainPage/ProgressBar';
import MainNav from './MainNav'
import ReactCanvasNest from "react-canvas-nest"
import title from "../img/welcome.gif"


class MainPage extends React.Component {

  render () {
    return (
      <div className="background">
        
        <MainNav />
        {/* <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ',lineColor:'255,255,255' , count:"40"}} style = {{ zIndex: 99 }} /> */}
        <Balance avatar={avatar} title={title}/>
        <PrograssBars/>
      </div>
    );
  }
}

export default MainPage;
