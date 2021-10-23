import React, { useState } from 'react';
<<<<<<< HEAD
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
        {/* <Navbar.Brand as={Link} to='/'>Login/Signup
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls='navbar' />
=======
import { Navbar, Nav, Button, Container, Modal, } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import "../App.css"


const AppNavbar = () => {
  // set modal display state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <Navbar bg='light' variant='light' expand='lg'>
        <Container fluid>
          <Navbar.Toggle aria-controls='navbar' />
>>>>>>> main
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
<<<<<<< HEAD
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
=======
                <>
                <br />
                  <Button onClick={() => setShowLoginModal(true)}>Login</Button><br />
                  <Button onClick={() => setShowSignupModal(true)}>Sign Up</Button>
                </>
>>>>>>> main
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
<<<<<<< HEAD
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
=======
      
      <Modal
        size='lg'
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        aria-labelledby='signup-modal'>

        <Modal.Header closeButton>
          <Modal.Title id='signup-modal'>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm handleModalClose={() => setShowLoginModal(false)} />
        </Modal.Body>
      </Modal>

      <Modal
        size='lg'
        show={showSignupModal}
        onHide={() => setShowSignupModal(false)}
        aria-labelledby='signup-modal'>

        <Modal.Header closeButton>
          <Modal.Title id='signup-modal'>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm handleModalClose={() => setShowSignupModal(false)} />
        </Modal.Body>
      </Modal>
    </>

>>>>>>> main
  );
};

export default AppNavbar;