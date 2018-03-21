import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import "../../styles/main.css";
import KudosImg from "./../../img/kudos_ico_red.svg"
import LinkImg from "./../../img/link_ico_red.svg"
import CommentsImg from "./../../img/comments_ico_red.svg"
import ApiClient from "../../models/api-client/src/index.js";
const apiClient = new ApiClient("http", "localhost", 5000);  


export default class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title:'',
            shortDescription:'',
            fullDescription:'',
            owner:'',
            counterVisits: '',
            idPostTemplate:'',
            tag:'',
            time:'',
            createAt:'',
            URL:''
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

    handleViewsPost = (e) => {
        e.preventDefault()
        this.setState({ show: e.target.value });
    }
    handleFillResult = (post) => {
           let {title, shortDescription, fullDescription, owner, counterVisits, idPostTemplate, tag, time, createAt, URL} = post.data[0]
           this.setState( { title, shortDescription, fullDescription, owner, counterVisits, idPostTemplate, tag, time, createAt, URL })
    }
    render() {
        return (
            <div>
                {this.state.idPostTemplate == '0'?<Audio/>:undefined}
                {this.state.idPostTemplate == '1'?<Youtube/>:undefined}
                {this.state.idPostTemplate == '2'?<Quote list={this.state.posts} header = {this.state.timelineName}/>:undefined}
            </div>
        );
    }
}


function Youtube() {

    return (
        <div>
            <div>

                <main role="main" className="container topmed">
                    <div className="row">
                        <div className="col-md-8 blog-main">
                            <h3 className="pb-3 mb-4 font-italic border-bottom">
                                Title of your page of post
                            </h3>
                            <div className="blog-post">
                                <strong className="d-inline-block mb-2 text-primary">Developers</strong>
                                <h2 className="blog-post-title">How "oldschool" graphics worked in Commodore and Nintendo</h2>
                                <p className="blog-post-meta">January 1, 2018 by <a href="#">Mediacloner</a></p>
                                <h3>Presentation</h3>
                                <p>I cover the limitations of color on older 1980's computers and game consoles such as the Nintendo Entertainment System and the Commodore 64.
                                </p>
                                <h3>Video</h3>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/Tfh0ytz8S0k" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
                                </div>
                                <blockquote>
                                    <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                </blockquote>
                                <div className="btn-group">
                                    <button type="button" className="btn"><img src={KudosImg}  /> 14 Kudos</button>
                                    <button type="button" className="btn btn-secondary"><img src={LinkImg}  width={30} />Source</button>
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
                                <p className="mb-0">Talk about you. Your concerns or why you publish in <span className="pauseFont">·|pause|·</span> Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
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

function Audio() {

    return (
        <div>
            <div>

                <main role="main" className="container topmed">
                    <div className="row">
                        <div className="col-md-8 blog-main">
                            <h3 className="pb-3 mb-4 font-italic border-bottom">
                                Title of your page of post
                            </h3>
                            <div className="blog-post">
                                <strong className="d-inline-block mb-2 text-primary">Developers</strong>
                                <h2 className="blog-post-title">Title of your post</h2>
                                <p className="blog-post-meta">January 1, 2018 by <a href="#">Mediacloner</a></p>
                                <h3>Presentation</h3>
                                <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                                <h3>Audio</h3>
                                <audio controls>
                                    <source src="https://media.blubrry.com/ohhhtv/s/ohhhtv.com/podcast/12/s12e10_bilirrubina.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <blockquote>
                                    <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
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
                                <p className="mb-0">Talk about you. Your concerns or why you publish in <span className="pauseFont">·|pause|·</span> Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
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

function Quote() {

    return (

        <div>

            <main role="main" className="container topmed">
                <div className="row">
                    <div className="col-md-8 blog-main">
                        <h3 className="pb-3 mb-4 font-italic border-bottom">
                            Title of your page of post
                        </h3>
                        <div className="blog-post">
                            <strong className="d-inline-block mb-2 text-primary">Developers</strong>
                            <h2 className="blog-post-title">Title of your post</h2>
                            <p className="blog-post-meta">January 1, 2018 by <a href="#">Mediacloner</a></p>
                            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                                <div className="col-md-6 px-0">
                                    <h1 className="display-4 font-italic">“A room without books is like a body without a soul.”</h1>
                                    <p className="lead my-3">
                                        Marcus Tullius Cicero (3 January 106 BC – 7 December 43 BC) was a Roman politician and lawyer, who served as consul in the year 63 BC. He came from a wealthy municipal family of the Roman equestrian order, and is considered one of Rome's greatest orators and prose stylists.</p>
                                </div>
                            </div>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
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
                            <p className="mb-0">Talk about you. Your concerns or why you publish in <span className="pauseFont">·|pause|·</span> Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
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


