import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'
import {Container, Navbar,Nav,NavDropdown} from 'react-bootstrap'

class TopNavbar extends Component {

  render() {
    return (
      <Navbar variant="dark" bg="dark" expand="lg" style={{background: 'linear-gradient(45deg, rgba(0,0,0,1) 17%, rgba(0,0,0,1) 33%, rgba(0,0,0,1) 46%, rgba(5,5,5,1) 56%, rgba(15,14,15,1) 69%, rgba(25,24,25,1) 86%, rgba(41,39,41,1) 100%, rgba(61,59,61,1) 100%)'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{fontSize: '30px', marginLeft: '10px'}}>File system</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Nav>
              <ul className="navbar-nav px-3">
              <li>
                <small id="account">
                  <a target="_blank"
                    alt=""
                    className="text-white"
                    rel="noopener noreferrer"
                    href={"https://etherscan.io/address/" + this.props.account}>
                    {this.props.account ? this.props.account.substring(0,6): '0x0'}...{this.props.account ? this.props.account.substring(38,42):'0x0'}
                  </a>
                </small>
                { this.props.account
                  ? <img
                      alt=""
                      className='ml-2'
                      width='30'
                      height='30'
                      src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                    />
                  : <span></span>
                }
              </li>
            </ul>
              
          </Nav>
      </Container>
    </Navbar>
      // <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
      //   <a
      //     className="navbar-brand col-sm-3 col-md-2 mr-0"
      //     href="http://www.dappuniversity.com/bootcamp"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <img src={box} width="30" height="30" className="align-top" alt="" />
      //     D$t0r@g3
      //   </a>
      // </nav>
    );
  }
}

export default TopNavbar;