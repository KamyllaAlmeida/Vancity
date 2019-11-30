import React from 'react';
import MainNav from './MainNav'
import ReactCanvasNest from "react-canvas-nest"
import ProgressBar from "react-bootstrap/ProgressBar"
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import Harry from "../img/harry.png"
import Grandma from "../img/grandMa.png"
import Bike from "../img/bike.png"
import Key from "../img/key.jpg"
import Logo from "../img/vancity.png"
import CardDeck from "react-bootstrap/CardDeck"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import "./WishList.css"
import Button from "react-bootstrap/Button"
import Popover from "react-bootstrap/Popover"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import CanvasDraw from "react-canvas-draw";
import Form from "react-bootstrap/Form";


const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3"> Gift from your best friend! <img src={Logo} alt="img"/></Popover.Title>
    <Popover.Content>
    <img className="prize" src={Key} alt="img"/>
    <h5>Choose your give for 1000 Point level from the list! I know you will make it soon!</h5>
    <Button variant="info">Gift List</Button>
    </Popover.Content>
  </Popover>
);



const WishList = () => {
  
  return (
    
    <div className="wish">
    <MainNav />
    <Jumbotron fluid>
  <Container>
  <h2>Yeah! Your saving score is over 500! You got what your wish from Vancity! <img src={Logo} /></h2>
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="info">See what you get!</Button>
  </OverlayTrigger>
  </Container>
</Jumbotron>
    <div className="background">
    {/* <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ',lineColor:'255,255,255' , count:"40"}} style = {{ zIndex: 91 }} /> */}
    <div className="cardDeck">
    <CardDeck>
  <Card bg="info">
    <Card.Img variant="top" src={Harry} />
    <Card.Body>
      <Card.Title>Harry Potter book: $20 Due: March 1th 2020!</Card.Title>
      <Card.Text>
      <p>Words from Mom: I am so proud of you! you are saving money to buy book each month!</p>
      </Card.Text>
      <Button variant="primary">Hide from parents</Button>
      <p></p>
      <Button variant="danger">Delete Money will be back to your account.</Button>
    </Card.Body>
    <ProgressBar animated variant="info" now= {20} label={`20%`}/>
    <Card.Footer>
      <small className="text-muted">Started 10 days ago</small>
    </Card.Footer>
  </Card>
  <Card bg="warning">
    <Card.Img variant="top" src={Grandma} />
    <Card.Body>
      <Card.Title>Grandma's Birthday Gift: $30 Due: Janurary 1th 2020</Card.Title>
      <Card.Text>
      Words from Dad: Wow! Your grandma will be really happy! You are so thoughtful!
      </Card.Text>
      <Button variant="primary">Hide from parents</Button>
      <p></p>
      <Button variant="danger">Delete Money will be back to your account.</Button>
    </Card.Body>
    <ProgressBar animated variant="warning" now= {10} label={`10%`}/>
    <Card.Footer>
      <small className="text-muted">Started 10 days ago</small>
    </Card.Footer>
  </Card>
  <Card bg='success'>
    <Card.Img variant="top" src={Bike} />
    <Card.Body>
      <Card.Title>Bike target: $200    Due: June 1th 2020</Card.Title>
      <Card.Text>
        Words from Dad: Do you consider to take your brother's old bike now?
      </Card.Text>
      <Button variant="primary">Hide from parents</Button>
      <p></p>
      <Button variant="danger">Delete Money will be back to your account.</Button>
    </Card.Body>
    <ProgressBar animated variant="success" now= {80} label={`80%`}/>
    <Card.Footer>
      <small className="text-muted">Started 5 month ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
<div className="addNew" >
  <h2>New Saving Plan</h2>

  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Goal</Form.Label>
    <Form.Control type="text" placeholder="Goal" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Target Amount</Form.Label>
    <Form.Control type="number" placeholder="Target Amout" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Due Date</Form.Label>
    <Form.Control type="date" placeholder="Due Date" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Do you want to hide from Parents?" />
  </Form.Group>
</Form>
<div className="canvas">
  <CanvasDraw/>
  </div>
<p></p>
<Button>Add new</Button>
</div>

      </div>
      
    </div>
  )

};

export default WishList;