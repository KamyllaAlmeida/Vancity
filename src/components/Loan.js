import React from 'react';
import MainNav from './MainNav'
import ReactStoreIndicator from 'react-score-indicator'
import "./style.css"

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
                <div>
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
                <div>
                    <MainNav />
                    <div className="loan-text">
                        <ReactStoreIndicator
                            value={70}
                            maxValue={100} />
                        <h3>Hi Joe!</h3>
                        <h4>You current loan balance is ${this.state.loanbalance}</h4>
                        <h5>Your minimal payment is $10 and will be due in 20 days</h5>
            
                    </div>
                </div>
                    )}
       }
   }
   
   
export default Loan