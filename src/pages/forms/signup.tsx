import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


export default function SignUp(){

return <>
<form>
<h1>Sign Up!</h1>
<br />
<Row>
<Col>
<Form.Control placeholder="First name" />
</Col>
<Col>
<Form.Control placeholder="Last name" />
</Col>
</Row>
<Form.Group>
<br />
<Form.Label>Email address</Form.Label>
<br />
  <Form.Control type="email" placeholder="name@example.com" />
  <br />
      <Form.Text className="text-muted">
         We'll never share your email with anyone else.
      </Form.Text>

</Form.Group>
<Form.Group controlId="formGroupPassword">
<Form.Label>Password</Form.Label>
<br/>
<Form.Control type="password" placeholder="Password" />
</Form.Group>

</form>
</>
}