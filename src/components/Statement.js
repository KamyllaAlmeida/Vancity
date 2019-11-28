import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./Balance.css"
import getMoneyImg from "../img/Finance_loan_money-512.png"
import { Table } from 'react-bootstrap';
import MainNav from './MainNav'


class Statement extends React.Component {

  renderTableData(list) {
    return list.map((item) => {
       const { date, value, company, id } = item //destructuring
       return (
          <tr key={id}>
             <td> 
               <img
                  alt=""
                  src={getMoneyImg}
                  width="45"
                  height="45"
                  //className="d-inline-block align-top"
                />
              </td>
             <td>{date}</td>
             <td>{company}</td>
             <td>{value}</td>
          </tr>
       )
    })
  }

  render() {
    var list = [
        { date: '12/1/2011', value: 3, company: 'Amazon', id: 1 },
        { date: '13/1/2011', value: 5, company: 'Amazon', id: 2 },
        { date: '14/1/2011', value: 6, company: 'Amazon', id: 3 }
    ];

    return (
      <div>
        <MainNav />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>$</th>
              <th>Date</th>
              <th>Details</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData(list)}
          </tbody>
        </Table>
      </div>
    )
  }
}
        
export default Statement;