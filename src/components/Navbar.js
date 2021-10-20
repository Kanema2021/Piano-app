
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
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
          {/* <Navbar.Brand as={Link} to='/'>Login/Signup
        </Navbar.Brand> */}
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
        style={{ zIndex: 3 }}
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
        style={{ zIndex: 3 }}
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






// import React from 'react';  
// import './App.css';  
// import { Button,Modal} from 'react-bootstrap';  
// class App extends React.Component {  
//   constructor(){  
//     super();  
//     this.state={  
//       show:false  
//     }  
//   }  
//   handleModal(){  
//     this.setState({show:!this.state.show})  
//   }  
//   render(){  
//     return (  
//       <div>  
//         <h2 align='center'>Example of Modal in Reactjs</h2>  
//         <div className="modalClass">  
//           <Button onClick={()=>this.handleModal()}>Click To Open Modal</Button>  
//         </div>  
          
//         <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
//           <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
//           <Modal.Body>This is a Modal Body</Modal.Body>  
//           <Modal.Footer>  
//             <Button onClick={()=>this.handleModal()}>Close</Button>  
//             <Button onClick={()=>this.handleModal()}>Save</Button>  
//           </Modal.Footer>  
//         </Modal>  
//       </div>  
//     )  
//   }  
// }  
// export default App;  









