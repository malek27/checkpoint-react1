import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Form, Nav, Navbar, FormControl,Row,Container,Col } from 'react-bootstrap';
function App() {
  return (
    
    <div className="App">
      <>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Info</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
</>
<br></br>
      <h1>Welcome</h1>
<br></br>     
      <Form className="form">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br></br>
<Container fluid>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
    </div>
  
  );
}

export default App;
