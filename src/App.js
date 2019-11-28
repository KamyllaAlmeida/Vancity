import React from 'react';
import MainPage from './components/MainPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Statement from './components/Statement';
import Loan from './components/Loan';
import WishList from "./components/WishList"

class App extends React.Component{
  render(){
    return(
      <React.Fragment>

      <Router>
      <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/statement">
            <Statement />
          </Route>
          <Route path="/loan">
            <Loan />
          </Route>
          <Route path="/wishList">
            <WishList />
          </Route>
        </Switch>
      </Router>
      
    </React.Fragment>
  )
}}

export default App;
