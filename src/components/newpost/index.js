import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../../styles/main.css";
import apiClient from "../../services/api-config"


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
          .createPost(  this.state.title, this.state.shortDescription, this.state.fullDescription, this.state.owner,this.state.idPostTemplate,this.state.namePostTemplate,this.state.tag, this.state.URLpath, this.convertToSeconds(this.state.time))
          .then(posts => this.setState({ posts: posts.data }))
          .then (this.props.postResult())
          .catch(console.error)

          this.props.postResult()
      }

      convertToSeconds = (time) => {
        if (this.IsValidTime (time)){
        var a = time.split(':')
        return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); }


       }

      IsValidTime = (timeString) =>{
          var pattern = /^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/;
          if (!timeString.match(pattern))
              return false;
          return true;
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
            this.setState({URLpath:e.target.value});
            break;

            case 'time':
            this.setState({time:e.target.value});
            break;

            default:
            console.error ('Switch error on New Post')
            break;
    
        }
    
    }

render() {
    return (

        <div className="container topmed">
        <h2 className="text-right text-center text-secondary pauseFont ">·|new post|·</h2>
        <br/>

      <Form>

        <FormGroup row id="idPostTemplate">
          <Label sm={2} for="select"><h5 class="text-info">Select</h5></Label>
          <Col sm={10}>
          <Input type="select" name="select" id="idPostTemplate" onChange={this.updatePost} >
            <option>Audio</option>
            <option>Youtube</option>
            <option>Quote</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row  id="title">
          <Label for="title" sm={2}><h5 class="text-info">Title</h5></Label>
          <Col sm={10}>
            <Input type="title" onChange={ this.updatePost } name="title" id="title" placeholder="write a cool and concise title" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="shortDescription"  sm={2}><h5 class="text-info">Short Description</h5></Label>
          <Col sm={10} >
            <Input type="shortDescription" maxLength="140" onChange={ this.updatePost } name="shortDescription" id="shortDescription" placeholder="Write a short description for timeline in 140 characters" />
          </Col>
        </FormGroup>
         <FormGroup row>
          <Label for="fullDescription" sm={2}><h5 class="text-info">Full Description</h5></Label>
          <Col sm={10}>
            <Input type="textarea" onChange={ this.updatePost } name="fullDescription" id="fullDescription" placeholder="write the description that could you see from the post "/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="tag" sm={2}><h5 class="text-info">Tag</h5></Label>
          <Col sm={10}>
            <Input type="search" onChange={ this.updatePost } name="tag" id="tag" placeholder="write a short description for timeline" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Url" sm={2}><h5 class="text-info">Url</h5></Label>
          <Col sm={10}>
          <Input type="url" onChange={ this.updatePost } name="URLpath" id="URLpath" placeholder="url" />
          </Col>
        </FormGroup>



            {this.state.idPostTemplate !== 2 ? (<FormGroup row>
             <Label for="exampleTime" sm={2}><h5 class="text-info">Time</h5></Label> 
             <Col sm={10}><Input type="text" onChange={ this.updatePost } name="time" id="time" placeholder="HH:MM:SS" /> 
             </Col>  </FormGroup>):undefined}

            <Button onClick={this.addNewPost}className ='float-right btn-info'>Submit</Button>

      </Form>
      </div>

    );
  }
}
