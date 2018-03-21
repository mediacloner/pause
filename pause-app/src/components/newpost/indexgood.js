import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import "../../styles/main.css";

export default class Newpost extends React.Component {


  

    constructor(props) {
      super(props);

      this.state = {
        show : 'audio', 
      };
    }
  

    handleViewsPost=(e)=>{
      e.preventDefault()
      this.setState({show:e.target.value});
    }

  render() {
    return (

        <div className="container topmed">
        <h2 className="text-right text-center text-secondary pauseFont ">·|new post|·</h2>
        <br/>

      <Form>

        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" value={this.state.show} onChange={this.handleViewsPost} >
            <option id='audio'   >Audio</option>
            <option id='youtube' >Youtube</option>
            <option id='quote'   >Quote</option>
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
          <Input type="url" name="url" id="exampleUrl" placeholder="url" />
          </Col>
        </FormGroup>



            {this.state.show != 'Quote'? (<FormGroup row>
             <Label for="exampleTime" sm={2}>Time</Label> 
             <Col sm={10}><Input type="text" name="time" id="exampleTime" placeholder="00:00" /> 
             </Col>  </FormGroup>):undefined}

            <Button className ='float-right'>Submit</Button>

      </Form>
      </div>
    );
  }
}
