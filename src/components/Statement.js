import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './MainNav'
import "./Statement.css"
import getMoneyImg from "../img/Finance_loan_money-512.png"
import wingsMoneyImg from "../img/money-with-wings-512.png"
import { Table, Container, Row, Col, Form } from 'react-bootstrap';


class Statement extends React.Component {

  constructor() {
    super();
    this.state = {value: 'November/2019'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    console.log(this.state.value);
  }

  formatter(value) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
    return formatter.format(value)
  }

  renderIcon (value) {
    if (value > 0) {
      return getMoneyImg;
    }
    return wingsMoneyImg;
  }

  renderTableData(list) {



    return list.map((item) => {
       const { date, value, company, id } = item
       return (
          <tr key={id}>
             <td> 
               <img
                  alt=""
                  src={this.renderIcon(value)}
                  width="45"
                  height="45"
                  //className="d-inline-block align-top"
                />
              </td>
             <td>{date}</td>
             <td>{company}</td>
             <td>{this.formatter(value)}</td>
          </tr>
       )
    })
  }

  renderMonths () {
    var months = [
      {month: "January", year: "2019", id:1},
      {month: "February", year: "2019", id:2},
      {month: "March", year: "2019", id:3},
      {month: "April", year: "2019", id:4},
      {month: "May", year: "2019", id:5},
      {month: "June", year: "2019", id:6},
      {month: "July", year: "2019", id:7},
      {month: "August", year: "2019", id:8},
      {month: "September", year: "2019", id:9},
      {month: "October", year: "2019", id:10},
      {month: "November", year: "2019", id:11},
      {month: "December", year: "2019", id:12}
    ];
    return months.map((item) => {
      const { month, year, id } = item 
      return (
        <option key={id}>{month}/{year}</option>
      )
    })
  }

  getMonth (date) {
    const month = new Date(date);
    return month.getMonth() + 1;
  }

  render() {
    var allStatements = {
      "January/2019": [
        { date: '2/1/2011', value: 100, company: 'Allowance', id: 1 },
        { date: '4/1/2011', value: -5, company: 'Amazon', id: 2 },
        { date: '6/1/2011', value: -6, company: 'Disney', id: 3 },
        { date: '12/1/2011', value: 20, company: 'Gift', id: 4 },
        { date: '13/1/2011', value: -5, company: 'Disney', id: 5 },
        { date: '14/1/2011', value: -6, company: 'ToyStore', id: 6 },
        { date: '15/1/2011', value: 3, company: 'Allowance', id: 7 },
        { date: '16/1/2011', value: -5, company: 'Amazon', id: 8 },
        { date: '17/1/2011', value: -6, company: 'Amazon', id: 9 }
      ],

    "February/2019": [
      { date: '2/2/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/2/2011', value: -30, company: 'Amazon', id: 2 },
      { date: '6/2/2011', value: -6, company: 'Disney', id: 3 } ,
      { date: '12/2/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/2/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/2/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/2/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/2/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/2/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "March/2019": [
      { date: '2/3/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/3/2011', value: -51, company: 'Amazon', id: 2 },
      { date: '6/3/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/3/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/3/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/3/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/3/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/3/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/3/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "April/2019": [
      { date: '2/4/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/4/2011', value: -30, company: 'Amazon', id: 2 },
      { date: '6/4/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/4/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/4/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/4/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/4/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/4/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/4/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "May/2019": [
      { date: '2/5/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/5/2011', value: -53, company: 'Amazon', id: 2 },
      { date: '6/5/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/5/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/5/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/5/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/5/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/5/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/5/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "June/2019": [
      { date: '2/6/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/6/2011', value: -54, company: 'Amazon', id: 2 },
      { date: '6/6/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/6/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/6/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/6/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/6/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/6/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/6/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "July/2019": [
      { date: '2/7/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/7/2011', value: -51, company: 'Amazon', id: 2 },
      { date: '6/7/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/7/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/7/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/7/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/7/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/7/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/7/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "August/2019": [
      { date: '2/8/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/8/2011', value: -5, company: 'Amazon', id: 2 },
      { date: '6/8/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/8/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/8/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/8/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/8/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/8/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/8/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "September/2019": [
      { date: '2/9/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/9/2011', value: -5, company: 'Amazon', id: 2 },
      { date: '6/9/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/9/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/9/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/9/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/9/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/9/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/9/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "October/2019": [
      { date: '2/10/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/10/2011', value: -5, company: 'Amazon', id: 2 },
      { date: '6/10/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/10/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/10/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/10/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/10/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/10/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/10/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "November/2019": [
      { date: '2/11/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/11/2011', value: -5, company: 'Amazon', id: 2 },
      { date: '6/11/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/11/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/11/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/11/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/11/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/11/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/11/2011', value: -6, company: 'Amazon', id: 9 }
    ],

    "December/2019": [
      { date: '2/12/2011', value: 100, company: 'Allowance', id: 1 },
      { date: '4/12/2011', value: -5, company: 'Amazon', id: 2 },
      { date: '6/12/2011', value: -6, company: 'Disney', id: 3 },
      { date: '12/12/2011', value: 20, company: 'Gift', id: 4 },
      { date: '13/12/2011', value: -5, company: 'Disney', id: 5 },
      { date: '14/12/2011', value: -6, company: 'ToyStore', id: 6 },
      { date: '15/12/2011', value: 3, company: 'Allowance', id: 7 },
      { date: '16/12/2011', value: -5, company: 'Amazon', id: 8 },
      { date: '17/12/2011', value: -6, company: 'Amazon', id: 9 }
    ]
    };
    var list = allStatements[this.state.value];

    return (
      
      <div className="background">
      <MainNav />
      <Container >
        <Row className="row-statement">
          <h1 className="head1">Statements</h1>
        </Row>
        <Row className="row-select">
            <Form.Control  as="select" value={this.state.value} onChange={this.handleChange}>
              {this.renderMonths()}
            </Form.Control>        
        </Row>
        <Row>
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>Withdraw/ Deposit</th>
                <th>Date</th>
                <th>Details</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData(list)}
            </tbody>
          </Table>
        </Row>
      </Container>
      </div>
    )
  }
}
        
export default Statement;

