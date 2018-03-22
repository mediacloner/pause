import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import "../../styles/main.css";
import KudosImg from "./../../img/kudos_ico_red.svg"
import LinkImg from "./../../img/link_ico_red.svg"
import CommentsImg from "./../../img/comments_ico_red.svg"
import ApiClient from "../../models/api-client/src/index.js";
import Moment from 'react-moment';
import 'moment-timezone'; 
const apiClient = new ApiClient("http", "localhost", 5000); 

export default class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title:' ',
            shortDescription:' ',
            fullDescription:' ',
            owner:' ',
            counterVisits: ' ',
            idPostTemplate:' ',
            kudos:' ',
            tag:' ',
            time:'0',
            createAt:' ',
            URLpath:' '
            }}
    
    componentDidMount=()=>{

        apiClient
        .retrievePost(this.props.postId)
        .then(post => {
            return this.handleFillResult(post)

        })   
        //.then (this.props.postResult())
        .catch(console.error)

    }

    youtubeParser = (url) => {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }


 
    handleViewsPost = (e) => {
        e.preventDefault()
        this.setState({ show: e.target.value });
    }
    handleFillResult = (post) => {

            let {title, shortDescription, fullDescription, owner, counterVisits, idPostTemplate, tag, time, createAt, URLpath, kudos} = post.data[0]
           this.setState( { title, shortDescription, fullDescription, owner, counterVisits, idPostTemplate, tag, time, createAt, URLpath, kudos })
    }
    render() {
        return (
            <div>
                {this.state.idPostTemplate == '0'?<Audio post={this.state}/>:undefined}
                {this.state.idPostTemplate == '1'?<Youtube post={this.state} youtubeParser={this.youtubeParser}/>:undefined}
                {this.state.idPostTemplate == '2'?<Quote post={this.state} header = {this.state.timelineName}/>:undefined}
            </div>
        );
    }
}


function Youtube(props) {


    return (
        <div>
            <div>

                <main role="main" className="container topmed">
                    <div className="row">
                        <div className="col-md-8 blog-main">
                            <h3 className="pb-3 mb-4 font-italic border-bottom">
                            {props.post.owner.timelineTitle}
                            </h3>
                            <div className="blog-post">
                                <strong className="d-inline-block mb-2 text-primary">{props.post.tag}</strong>
                                <h2 className="blog-post-title">{props.post.title} </h2>
                                <p className="blog-post-meta">  <Moment format="DD/MM/YYYY HH:MM ">
                                {props.post.createAt}</Moment>
                                <a href="#">{props.post.owner.username}</a></p>
                                <h3>Short Description</h3>
                                <p>{props.post.shortDescription}</p>
                                <h3>Video</h3>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe width={560} height={315} src= { "https://www.youtube.com/embed/" + props.youtubeParser (props.post.URLpath) + "?start=" + props.post.time} frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
                                </div>
                                <blockquote>
                                    <p>{props.post.fullDescription}</p>
                                </blockquote>
                                <div className="btn-group">
                                    <button type="button" className="btn"><img src={KudosImg}  /> {props.post.kudos} Kudos</button>
                                    <button type="button"href="http://www.yahoo.com" target="_blank" className="btn btn-secondary"><img src={LinkImg}  width={30} />Source</button>
                                    <button type="button" className="btn btn-dark"><img src={CommentsImg} width={30} />Discuss</button>
                                </div>
                                <hr />
                                <p className="text-muted">Kudos (from the Ancient Greek: κῦδος) is acclaim or praise for exceptional achievement.</p>
                            </div>{/* /.blog-post */}
                            <nav className="blog-pagination">
                                <a className="btn btn-outline-primary" href="#">Older</a>
                                <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                            </nav>
                        </div>{/* /.blog-main */}
                        <aside className="col-md-4 blog-sidebar">
                            <div className="p-3 mb-3 bg-light rounded">
                                <h4 className="font-italic">About</h4>
                                <p className="mb-0">{props.post.owner.about}</p>
                            </div>
                            <div className="p-3">
                                <h4 className="font-italic">Elsewhere</h4>
                                <ol className="list-unstyled">
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Facebook</a></li>
                                </ol>
                            </div>
                        </aside>{/* /.blog-sidebar */}
                    </div>{/* /.row */}
                </main></div>

        </div>
    )
}

function Audio(props) {

    return (
        <div>
            <div>

                <main role="main" className="container topmed">
                    <div className="row">
                        <div className="col-md-8 blog-main">
                            <h3 className="pb-3 mb-4 font-italic border-bottom">
                               {props.post.owner.timelineTitle}
                            </h3>
                            <div className="blog-post">
                                <strong className="d-inline-block mb-2 text-primary">{props.post.tag}</strong>
                                <h2 className="blog-post-title">{props.post.title}</h2>
                                <p className="blog-post-meta"><Moment format="DD/MM/YYYY HH:MM ">
                                {props.post.createAt}</Moment> <a href="#">{props.post.owner.username}</a></p>
                                <h3>Short Description</h3>
                                <p>{props.post.shortDescription}</p>
                                <h3>Audio</h3>
                                <audio controls>
                                    <source src="https://media.blubrry.com/ohhhtv/s/ohhhtv.com/podcast/12/s12e10_bilirrubina.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <blockquote>
                                <p>{props.post.fullDescription}</p>
                                </blockquote>
                                <div className="btn-group">
                                    <button type="button" className="btn"><img src={KudosImg} width={35} /> 124 Kudos</button>
                                    <button type="button" className="btn btn-secondary"><img src={LinkImg} width={35} />Source</button>
                                    <button type="button" className="btn btn-dark"><img src={CommentsImg} width={35} />Comments</button>
                                </div>
                                <hr />
                                <p className="text-muted">Kudos (from the Ancient Greek: κῦδος) is acclaim or praise for exceptional achievement.</p>
                            </div>{/* /.blog-post */}
                            <nav className="blog-pagination">
                                <a className="btn btn-outline-primary" href="#">Older</a>
                                <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                            </nav>
                        </div>{/* /.blog-main */}
                        <aside className="col-md-4 blog-sidebar">
                            <div className="p-3 mb-3 bg-light rounded">
                                <h4 className="font-italic">About</h4>
                                <p className="mb-0">{props.post.owner.about}</p>
                            </div>
                            <div className="p-3">
                                <h4 className="font-italic">Elsewhere</h4>
                                <ol className="list-unstyled">
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Facebook</a></li>
                                </ol>
                            </div>
                        </aside>{/* /.blog-sidebar */}
                    </div>{/* /.row */}
                </main></div>


        </div>
    )
}

function Quote(props) {

    return (

        <div>

            <main role="main" className="container topmed">
                <div className="row">
                    <div className="col-md-8 blog-main">
                        <h3 className="pb-3 mb-4 font-italic border-bottom">
                        {props.post.owner.timelineTitle}
                        </h3>
                        <div className="blog-post">
                            <strong className="d-inline-block mb-2 text-primary">{props.post.tag}</strong>
                            <h2 className="blog-post-title">{props.post.title}</h2>
                            <p className="blog-post-meta"> <Moment format="DD/MM/YYYY HH:MM ">
                                {props.post.createAt}</Moment> <a href="#">{props.post.owner.username}</a></p>
                            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                                <div className="col-md-6 px-0">
                                    <h1 className="display-4 font-italic">{props.post.title}</h1>
                                    <p className="lead my-3">
                                    {props.post.shortDescription}</p>
                                </div>
                            </div>
                            <blockquote>
                                <p>{props.post.fullDescription}</p>
                            </blockquote>
                            <div className="btn-group">
                                <button type="button" className="btn"><img src={KudosImg} width={35} /> 124 Kudos</button>
                                <button type="button" className="btn btn-secondary"><img src={LinkImg} width={35} />Source</button>
                                <button type="button" className="btn btn-dark"><img src={CommentsImg} width={35} />Comments</button> 
                            </div>
                            <hr />
                            <p className="text-muted">Kudos (from the Ancient Greek: κῦδος) is acclaim or praise for exceptional achievement.</p>
                        </div>{/* /.blog-post */}
                        <nav className="blog-pagination">
                            <a className="btn btn-outline-primary" href="#">Older</a>
                            <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                        </nav>
                    </div>{/* /.blog-main */}
                    <aside className="col-md-4 blog-sidebar">
                        <div className="p-3 mb-3 bg-light rounded">
                            <h4 className="font-italic">About</h4>
                            <p className="mb-0">{props.post.owner.about} <span className="pauseFont">·|pause|·</span> Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        </div>
                        <div className="p-3">
                            <h4 className="font-italic">Elsewhere</h4>
                            <ol className="list-unstyled">
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ol>
                        </div>
                    </aside>{/* /.blog-sidebar */}
                </div>{/* /.row */}
            </main></div>
    )
}


