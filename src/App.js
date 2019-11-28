import React from 'react';
import MainPage from './components/MainPage'
import Loan from "./components/Loan"
// import MainNav from "./components/MainNav"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>

      <Router>

        <Switch>
      
        <Route exact path="/" Component={MainPage} />
        <Route path="/loan" Component={Loan}/>
      
      </Switch>
    </Router>
    </React.Fragment>
    )
  }
}

export default App;
