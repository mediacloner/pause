import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import "../../styles/main.css";
import ApiClient from "../../models/api-client/src/index.js";

const apiClient = new ApiClient("http", "localhost", 5000);  

export default class Newpost extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        title:'',
        shortDescription:'',
        fullDescription:'',
        owner:'5aafaa281ca9687a2d6bb1b4',
        idPostTemplate:'0',
        URLpath:'',
        tag:'',
        time:''
        }}
  

      addNewPost = (id) => {
       apiClient
          .createPost(  this.state.title, this.state.shortDescription, this.state.fullDescription, this.state.owner,this.state.idPostTemplate,this.state.namePostTemplate,this.state.tag, this.state.URLpath, this.state.time)
          .then(posts => this.setState({ posts: posts.data }))
          .then (this.props.postResult())
          .catch(console.error)

          this.props.postResult()
      }

        updatePost = (e) => {
          e.preventDefault()
          switch(e.target.id) {
            case 'title':
                this.setState({title:e.target.value});
                break;
            case 'shortDescription':
            this.setState({shortDescription:e.target.value});
                break;
            case 'fullDescription':
            this.setState({fullDescription:e.target.value});
            break;
          
            case 'owner':
            this.setState({owner:e.target.value});
            break;
          
            case 'idPostTemplate':
            this.setState({idPostTemplate:e.target.selectedIndex});
            break;
          
            case 'tag':
            this.setState({tag:e.target.value});
            break;

            case 'URLpath':
            console.log('yep')
            this.setState({URLpath:e.target.value});
            break;

            case 'time':
            this.setState({time:e.target.value});
            break;
    
        }
    
    }

render() {
    return (

        <div className="container topmed">
        <h2 className="text-right text-center text-secondary pauseFont ">·|new post|·</h2>
        <br/>

      <Form>

        <FormGroup id="idPostTemplate">
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="idPostTemplate" onChange={this.updatePost} >
            <option>Audio</option>
            <option>Youtube</option>
            <option>Quote</option>
          </Input>
        </FormGroup>
        <FormGroup row  id="title">
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="title" onChange={ this.updatePost } name="title" id="title" placeholder="write a cool and concise title" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="shortDescription" sm={2}>Short Description</Label>
          <Col sm={10} >
            <Input type="shortDescription" onChange={ this.updatePost } name="shortDescription" id="shortDescription" placeholder="write a short description for timeline" />
          </Col>
        </FormGroup>
         <FormGroup row>
          <Label for="fullDescription" sm={2}>Full Description</Label>
          <Col sm={10}>
            <Input type="textarea" onChange={ this.updatePost } name="fullDescription" id="fullDescription" placeholder="write the description that could you see from the post "/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="tag" sm={2}>Tag</Label>
          <Col sm={10}>
            <Input type="textarea" onChange={ this.updatePost } name="tag" id="tag" placeholder="write a short description for timeline" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Url" sm={2}>Url</Label>
          <Col sm={10}>
          <Input type="textarea" onChange={ this.updatePost } name="URLpath" id="URLpath" placeholder="url" />
          </Col>
        </FormGroup>



            {this.state.idPostTemplate != '2'? (<FormGroup row>
             <Label for="exampleTime" sm={2}>Time</Label> 
             <Col sm={10}><Input type="text" onChange={ this.updatePost } name="time" id="time" placeholder="00:00" /> 
             </Col>  </FormGroup>):undefined}

            <Button onClick={this.addNewPost}className ='float-right'>Submit</Button>

      </Form>
      </div>
    );
  }
}
