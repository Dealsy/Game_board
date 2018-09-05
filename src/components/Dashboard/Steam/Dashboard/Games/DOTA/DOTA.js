import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Col, Row } from 'reactstrap';
import NavBar from './Nav/Nav.js'
import DotaDashboard from './DotaDashboard/DotaDashboard.js'



class DOTA extends React.Component {

  render() {
  return (
    <div>
     <NavBar />
     <DotaDashboard />



    </div>
  )};
};

export default DOTA;