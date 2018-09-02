import React from 'react';
import { Button, Form, FormGroup, Label, Input, Card, Container  } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import test from './test.png';

class Login extends React.Component {
  constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log('email ',this.state.email);
        console.log('Password', this.state.password);
    }

  render() {
    return (
        <div style={{backgroundImage: `url(${test})`, height: '922px'  } } > 
           <Container className='Login_container '>    
            <div>
               <Card className='Login_Card'>
                  <Form onSubmit={ this.handleSubmit } className='Login_Form'>
                    <FormGroup>
                      <Label for="Username">Email</Label>
                      <Input 
                      type="email" 
                      name="email" 
                      id="exampleEmail" 
                      placeholder="Enter email address"
                      onChange={this.handleInputChange}
                      value={this.state.email} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Password">Password</Label>
                      <Input 
                      type="password" 
                      autoComplete="password"  
                      name="password" 
                      id="examplePassword"  
                      placeholder="Enter password"
                      onChange={this.handleInputChange}
                      value={this.state.password} />
                    </FormGroup>
                    <Link to="/Dashboard"><Button outline color="primary">Login</Button></Link>
                  </Form>
                </Card>
              </div>
             </Container>
         </div>    
            );
          }
        }


export  default Login;


