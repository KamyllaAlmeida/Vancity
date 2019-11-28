import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainPage.css"



class Balance extends React.Component {
    render() {
        const username = "Joe Smith"
        const balance = 300
        const loanbalance = 100
        return (
            <div>
                <div className="greeting">

                <img className="title" src={this.props.title} alt="avatar img"/>
                <p>Great! You are saving for your amazing future!{username}</p>
                </div>
                <div className="avatar">
                <img className="user-avatar" src={this.props.avatar} alt="user avatar" />
                </div>
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