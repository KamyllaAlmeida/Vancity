import React from 'react';
import MainNav from './MainNav'
import ReactStoreIndicator from 'react-score-indicator'
import "./MainPage.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";



class Loan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loanbalance: [100]
        }
        this.changeLoanBalance = this.changeLoanBalance.bind(this)
    }
    changeLoanBalance(loanValue) {
        const loanbalance = loanValue
        this.setState(loanbalance.push(loanValue))
    }
    render() {
        if (!this.state.loanbalance.length) {
            return (
                <div className="background">
                    <MainNav />
                    <div className="loan-text">
                        <ReactStoreIndicator
                            value={70}
                            maxValue={100} />
                        <h3>Hi Joe!</h3>
                        <h4>We realized you have something in your wish list</h4>
                        <h4>Do you want to request a loan from family bank?</h4>
                    </div>
                </div>)
        }
        else {
            return (
                <div className="background">
                    <MainNav />
                    <p></p>
                    <div className="loan-text">
                        <ReactStoreIndicator
                            value={720}
                            maxValue={890} />
                            <div className="loanGreeting">
                        <h3>Hi Joe!</h3>
                        <h4>You current loan balance is ${this.state.loanbalance}</h4>
                        <h5>Your minimal payment is $10 and will be due in 20 days</h5>
                        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Goal</Form.Label>
    <Form.Control type="text" placeholder="Goal" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Amount</Form.Label>
    <Form.Control type="number" placeholder="Amount" />
  </Form.Group>

</Form>
                        <Button>Request New Loan</Button>
                        </div>
            
                    </div>
                </div>
                    )}
       }
   }
   
   
export default Loan