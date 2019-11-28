import React from 'react';
import MainPage from './components/MainPage'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <MainPage />
      </Router>
    </div>
  )
}

export default App;
