import React from 'react';
import styled from 'styled-components';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

const Hemlo =styled.div`
margin-top: 1em;
margin-left: 6em;
margin-right: 6em;

`;

export const Profile = () => (
  <>
  <Container>
        <Row>
        <Col>
            <h1>User Profile</h1>
            <Form className="form">    
  <Form.Group controlId="formCategory1">
    <Form.Label>Username</Form.Label>
    
  
  </Form.Group>
  <Form.Group controlId="formCategory2">
    <Form.Label>Email</Form.Label>
    
  
  </Form.Group>
 
  <Form.Group controlId="formCategory4">
    <Form.Label>Profile Image</Form.Label>
    
    </Form.Group>
  
  </Form>
   </Col>

       </Row>
        </Container>
</>
)