import React from 'react';
import Balance from './components/Balance'
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from "./img/avatar-2.jpeg"

function App() {

  return (
    <Balance avatar={avatar}/>
  );
}

export default App;
