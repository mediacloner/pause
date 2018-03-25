//import { NavLink } from 'react-router-dom'
import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "../../styles/main.css";

export default class Newcomment extends React.Component {
  render() {
    return (

        <div className="container topmed">
        <h2 className="text-right text-center pauseFont ">·|new comment|·</h2>
        <br/>

      <Form>

        <FormGroup>

          <FormGroup row>
          <Label for="comment" sm={2}>Comment</Label>
          <Col sm={10}>
            <Input type="textarea" name="comment" id="comment" placeholder="Please think one minute before writte. Thanks. "/>
          </Col>
        </FormGroup>
        <Button className ='float-right'>Submit</Button>
        </FormGroup>
      </Form>
      </div>
    );
  }
}
