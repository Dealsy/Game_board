import React from 'react';
import './Navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import steam from './steam.png';
import origin from './origin.png';
import ubisoft from './ubisoft.png';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className='nav' expand="md">
          <NavbarBrand>GAMEBOARD</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Support</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle  nav caret>
                  Game Clients
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                   <img alt='steam' src={steam}  />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <img alt='origin' src={origin} />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <img alt='ubisoft' src={ubisoft} height="30"  />
                </DropdownItem>
              </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Something
                </DropdownItem>
                <DropdownItem>
                  Something
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem >  
                  <Link to="/"><div style={{color: 'red'}}> Logout </div></Link>
                </DropdownItem>
              </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}