import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Balance.css"


class Balance extends React.Component {
    render() {
        const username = "Joe Smith"
        const balance = 300
        const loanbalance = 100
        return (
            <div>
                <h2>Welcome back! {username}</h2>
                <img className="user-avatar" src={this.props.avatar} alt="user avatar" />
                    <div className="balance-container">
                        <h2>Your current balance is ${balance}</h2>
                    </div>
                    <div className="loan-container">
                        <h2>Your current loan balance is ${loanbalance}</h2>
                    </div>
            </div>
        )
    }
}
        
export default Balance