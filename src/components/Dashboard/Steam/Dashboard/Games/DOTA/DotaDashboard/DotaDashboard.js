import React from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Search from '../Search/Search.js'
import './dota.css'

export default class DotaDashboard extends React.Component {

  render() {
    return (
    	<Container className='dota-text'>
    	<Search />
			<Row>
				<Col sm={{ size: 12}}>
					<article className='Heros'> 
						things
					</article>
				</Col>
				<Col  className='mainContainer' sm={{ size: 12}}>


				</Col>
			</Row>
			<Row>
				<Col>.col</Col>
				<Col>.col</Col>
			</Row>
    	</Container>
   
    );
  }
}