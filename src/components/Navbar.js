
import React, { useState } from 'react';
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
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Button onClick={() => setShowLoginModal(true)}>Login</Button>
                  <Button onClick={() => setShowSignupModal(true)}>Signup</Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        // style={{ zIndex: 6 }}
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
        // style={{ zIndex: 6 }}
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

  );
};

export default AppNavbar;














