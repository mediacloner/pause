import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import "../../styles/main.css";

export default class Newpost extends React.Component {
  render() {
    return (

        <div className="container topmed">
        <h2 className="text-right text-center pauseFont ">·|new post|·</h2>
        <br/>

      <Form>

        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Audio</option>
            <option>Youtube</option>
            <option>Quote</option>
          </Input>
        </FormGroup>
        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="title" name="title" id="title" placeholder="write a cool and concise title" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="shortDescription" sm={2}>Short Description</Label>
          <Col sm={10}>
            <Input type="shortDescription" name="shortDescription" id="shortDescription" placeholder="write a short description for timeline" />
          </Col>
        </FormGroup>
         <FormGroup row>
          <Label for="fullDescription" sm={2}>Full Description</Label>
          <Col sm={10}>
            <Input type="textarea" name="fullDescription" id="fullDescription" placeholder="write the description that could you see from the post "/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleUrl" sm={2}>Url</Label>
          <Col sm={10}>
          <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleTime" sm={2}>Time</Label>
          <Col sm={10}>
          <Input type="text" name="time" id="exampleTime" placeholder="00:00" />
          </Col>
        </FormGroup>

        <Button className ='float-right'>Submit</Button>
      </Form>
      </div>
    );
  }
}
