import React from 'react';
import MainPage from './components/MainPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Statement from './components/Statement';

function App() {

  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/statement">
            <Statement />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App;
