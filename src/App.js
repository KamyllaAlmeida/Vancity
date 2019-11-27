import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNav from './components/MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrograssBars from './components/ProgressBar';



function App() {
  return (
    <div>

      <MainNav />

      <PrograssBars/>
    </div>
    
  );
}

export default App;
