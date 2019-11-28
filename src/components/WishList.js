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
import Jumbotron from "react-bootstrap/jumbotron"
import Container from "react-bootstrap/Container"
import "./WishList.css"
import Button from "react-bootstrap/Button"
import Popover from "react-bootstrap/Popover"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"


const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3"> Gift from your best friend! <img src={Logo} /></Popover.Title>
    <Popover.Content>
    <img src={Key} />
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
      <Card.Title>Harry Potter</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <ProgressBar animated variant="info" now= {20} label={`20%`}/>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="warning">
    <Card.Img variant="top" src={Grandma} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <ProgressBar animated variant="warning" now= {10} label={`10%`}/>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='success'>
    <Card.Img variant="top" src={Bike} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <ProgressBar animated variant="success" now= {80} label={`80%`}/>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>


      </div>
    </div>
  )

};

export default WishList;