import React from 'react';
import { Form, FormGroup, Label, Input, Container, Col, Row   } from 'reactstrap';
import './DotaSearch.css';

export default class Search extends React.Component {

  render() {
    return (

     <Form className='DotaSearch'>
     <Row>
     <Col sm={{ size: 10}}>
 		<FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input className='searchInput' type="search" name="search" id="exampleSearch" placeholder="Search for heroes, items, players, leagues or teams." />
        </FormGroup>
    </Col>
    <Col sm={{ size: 2}}>
      <Label for="exampleSearch">Total players in Dota 2</Label>
        <div className='TotalPlayers'>

        	146,124
        </div>
    </Col>
    </Row>
  	</Form>
    );
  }
}