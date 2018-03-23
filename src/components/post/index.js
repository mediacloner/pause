import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Media
} from "reactstrap";
import "../../styles/main.css";
import KudosImg from "./../../img/kudos_ico_red.svg";
import LinkImg from "./../../img/link_ico_red.svg";
import CommentsImg from "./../../img/comments_ico_red.svg";
import WaveImg from "./../../img/wave.svg";
import Moment from "react-moment";
import "moment-timezone";
import apiClient from "./../../api-config"


export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: " ",
      shortDescription: " ",
      fullDescription: " ",
      owner: " ",
      counterVisits: " ",
      idPostTemplate: " ",
      kudos: " ",
      tag: " ",
      time: "0",
      createAt: " ",
      URLpath: " ",
      showComments: false,
      comments: [],
      newComment:"",
      counterKudos:""
    };
  }

  componentDidMount = () => {
    apiClient
      .retrievePost(this.props.postId)
      .then(post => {
        return this.handleFillResult(post);
      })
      //.then (this.props.postResult())
      .catch(console.error);
  };


  enableComments = (e) => {
    e.preventDefault()
    this.state.showComments?this.setState({showComments: false}):this.setState({showComments: true})
   
 }
  addNewComment = () => {

        //TODO: Working



  }


  addKudo = (id)=> {

    console.log(this.state.counterKudos, this.state.id, id);
      if (this.state.counterKudos < 5){
        apiClient.addKudo(this.state.id)
        .then(kudos => {
          console.log(this.state.counterKudos, this.state.id);
        })
        .catch(console.error);

      }  

}
  youtubeParser = url => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  handleViewsPost = e => {
    e.preventDefault();
    this.setState({ show: e.target.value });
  };
  handleFillResult = post => {
    let {
      _id, // test
      title,
      shortDescription,
      fullDescription,
      owner,
      counterVisits,
      idPostTemplate,
      tag,
      time,
      createAt,
      URLpath,
      kudos
    } = post.data[0];
    this.setState({
      id:_id, //test
      title,
      shortDescription,
      fullDescription,
      owner,
      counterVisits,
      idPostTemplate,
      tag,
      time,
      createAt,
      URLpath,
      kudos
    });
  };
  render() {
    return (
      <div>
        {this.state.idPostTemplate == "0" ? (
          <Audio
            id={this.state.id}
            title={this.state.title}
            shortDescription={this.state.shortDescription}
            fullDescription={this.state.fullDescription}
            owner={this.state.owner}
            counterVisits={this.state.counterVisits}
            idPostTemplate={this.state.idPostTemplate}
            tag={this.state.tag}
            time={this.state.time}
            createAt={this.state.createAt}
            URLpath={this.state.URLpath}
            kudos={this.state.kudos}
            comments={this.state.comments}
            newComment={this.state.newComment}
            showComments={this.state.showComments}
            addNewComment={this.addNewComment}
            addKudo={this.addKudo}
            enableComments={this.enableComments}

          />
        ) : (
          undefined
        )}
        {this.state.idPostTemplate == "1" ? (
          <Youtube
            id={this.state.id}
            title={this.state.title}
            shortDescription={this.state.shortDescription}
            fullDescription={this.state.fullDescription}
            owner={this.state.owner}
            counterVisits={this.state.counterVisits}
            showComments={this.state.showComments}
            idPostTemplate={this.state.idPostTemplate}
            tag={this.state.tag}
            time={this.state.time}
            createAt={this.state.createAt}
            URLpath={this.state.URLpath}
            kudos={this.state.kudos}
            comments={this.state.comments}
            newComment={this.state.newComment}
            youtubeParser={this.youtubeParser}
            addNewComment={this.addNewComment}
            enableComments={this.enableComments}
          />
        ) : (
          undefined
        )}
        {this.state.idPostTemplate == "2" ? (
          <Quote
            id={this.state.id}
            title={this.state.title}
            shortDescription={this.state.shortDescription}
            fullDescription={this.state.fullDescription}
            owner={this.state.owner}
            counterVisits={this.state.counterVisits}
            showComments={this.state.showComments}
            idPostTemplate={this.state.idPostTemplate}
            tag={this.state.tag}
            time={this.state.time}
            createAt={this.state.createAt}
            URLpath={this.state.URLpath}
            kudos={this.state.kudos}
            comments={this.state.comments}
            newComment={this.state.newComment}
            header={this.state.timelineName}
            addNewComment={this.addNewComment}
            enableComments={this.enableComments}
          />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

function Youtube(props) {
  return <div>
      <div>
        <main role="main" className="container topmed">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h3 className="pb-3 mb-4 font-italic border-bottom">
                {props.owner.timelineTitle}
              </h3>
              <div className="blog-post">
                <strong className="d-inline-block mb-2 text-primary">
                  {props.tag}
                </strong>
                <h2 className="blog-post-title">{props.title} </h2>
                <p className="blog-post-meta">
                  {" "}
                  <Moment format="DD/MM/YYYY HH:MM ">{props.createAt}</Moment>
                  <a href="#">{props.owner.username}</a>
                </p>
                <h3>Short Description</h3>
                <p>{props.shortDescription}</p>
                <h3>Video</h3>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={560} height={315} src={"https://www.youtube.com/embed/" + props.youtubeParser(props.URLpath) + "?start=" + props.time} frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
                </div>
                <blockquote>
                  <p>{props.fullDescription}</p>
                </blockquote>
                <div className="btn-group">
                  <button type="button" className="btn" onClick={props.addKudo(props.id)}>
                    <img src={KudosImg} /> {props.kudos} Kudos
                  </button>
                  <button type="button"  className="btn btn-secondary">
                  <a className="urlButton" href={props.URLpath} target={'_blank'} >
                    <img src={LinkImg}  width={30} />Source
                  </a>
                  </button>
                  <button type="button"  className="btn btn-dark" onClick={props.enableComments}>
                    <img src={CommentsImg} width={30} />Discuss
                  </button>
                </div>
                <hr />
                <p className="text-muted">
                  Kudos (from the Ancient Greek: κῦδος) is acclaim or praise
                  for exceptional achievement.
                </p>
              </div>

              {props.showComments === true ? <div>
                  <div>
                    <h2 className="text-right pauseFont text-muted">
                      ·|comments|·
                    </h2>
                    <div className="row">
                      <div className="col blog-main text-center">
                        <div className="box">
                          <div className="box-content">
                            <h2 className="tag-title">mediacloner</h2>
                            <hr />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Curabitur arcu erat, accumsan
                              id imperdiet et, porttitor at sem. Proin eget
                              tortor risus.Cras ultricies ligula sed magna
                              dictum porta. Vivamus magna justo, lacinia eget
                              consectetur sed, convallis at tellus. Curabitur
                              non nulla sit amet nisl tempus convallis quis ac
                              lectus.
                            </p>
                            <br />
                            <a href="ppc.html" className="btn btn-info">
                              User Timeline
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Form>
                    <FormGroup row>
                      <Label for="fullDescription" sm={2}>
                        Comment:
                      </Label>
                      <Col sm={10}>
                        <Input type="textarea" onChange={props.newComment} name="fullDescription" id="fullDescription" placeholder="write the description that could you see from the post " />
                      </Col>
                    </FormGroup>
                    <Button onClick={props.addNewComment} className="float-right btn-info">
                      Submit
                    </Button>
                  </Form>
                </div> : undefined}
            </div>
            {/* /.blog-main */}
            <aside className="col-md-4 blog-sidebar">
              <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">{props.owner.about}</p>
              </div>
              <div className="p-3">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </aside>
            {/* /.blog-sidebar */}
          </div>
          {/* /.row */}
        </main>
      </div>
    </div>;
}

function Audio(props) {
  return (
    <div>
      <div>
        <main role="main" className="container topmed">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h3 className="pb-3 mb-4 font-italic border-bottom">
                {props.owner.timelineTitle}
              </h3>
              <div className="blog-post">
                <strong className="d-inline-block mb-2 text-primary">
                  {props.tag}
                </strong>
                <h2 className="blog-post-title">{props.title}</h2>
                <p className="blog-post-meta">
                  <Moment format="DD/MM/YYYY HH:MM ">{props.createAt}</Moment>{" "}
                  <a href="#">{props.owner.username}</a>
                </p>
                <h3>Short Description</h3>
                <p>{props.shortDescription}</p>
                <h3>Audio</h3>
                <Media left href="#">
                  <img src={WaveImg} />
                </Media>
                <div>
                  <audio id="myAudio" controls>
                    <source
                      src={props.URLpath + "#t=" + props.time}
                      type="audio/mp3"
                    />
                  </audio>
                </div>
                <blockquote>
                  <p>{props.fullDescription}</p>
                </blockquote>
                <div className="btn-group">
                    <button type="button" className="btn" onClick={props.addKudo(props.id)}>
                    <img src={KudosImg} /> {props.kudos} Kudos
                  </button>
                  <button type="button"  className="btn btn-secondary">
                  <a className="urlButton" href={props.URLpath} target={'_blank'} >
                    <img src={LinkImg}  width={30} />Source
                  </a>
                  </button>
                  <button type="button"  className="btn btn-dark" onClick={props.enableComments}>
                    <img src={CommentsImg} width={30} />Discuss
                  </button>
                </div>
                <hr />
                <p className="text-muted">
                  Kudos (from the Ancient Greek: κῦδος) is acclaim or praise for
                  exceptional achievement.
                </p>
              </div>
          


              {props.showComments === true ? (
                <div>
                  <div>
                    <h2 className="text-right pauseFont text-muted">
                      ·|comments|·
                    </h2>
                    <div className="row">
                      <div className="col blog-main text-center">
                        <div className="box">
                          <div className="box-content">
                            <h2 className="tag-title">mediacloner</h2>
                            <hr />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur arcu erat, accumsan id imperdiet
                              et, porttitor at sem. Proin eget tortor risus.Cras
                              ultricies ligula sed magna dictum porta. Vivamus
                              magna justo, lacinia eget consectetur sed,
                              convallis at tellus. Curabitur non nulla sit amet
                              nisl tempus convallis quis ac lectus.
                            </p>
                            <br />
                            <a href="ppc.html" className="btn btn-info">
                              User Timeline
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Form>
                    <FormGroup row>
                      <Label for="fullDescription" sm={2}>
                        Comment:
                      </Label>
                      <Col sm={10}>
                        <Input type="textarea" onChange={props.newComment} name="fullDescription" id="fullDescription" placeholder="write the description that could you see from the post " />
                      </Col>
                    </FormGroup>
                    <Button onClick={props.addNewComment} className="float-right btn-info">
                      Submit
                    </Button>
                  </Form>
                </div>
              ) : (
                undefined
              )}



            </div>
            {/* /.blog-main */}

            <aside className="col-md-4 blog-sidebar">
              <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">{props.owner.about}</p>
              </div>
              <div className="p-3">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </aside>
            {/* /.blog-sidebar */}
          </div>
          {/* /.row */}
        </main>
      </div>
    </div>
  );
}

function Quote(props) {
  return (
    <div>
      <main role="main" className="container topmed">
        <div className="row">
          <div className="col-md-8 blog-main">
            <h3 className="pb-3 mb-4 font-italic border-bottom">
              {props.owner.timelineTitle}
            </h3>
            <div className="blog-post">
              <strong className="d-inline-block mb-2 text-primary">
                {props.tag}
              </strong>
              <h2 className="blog-post-title">{props.title}</h2>
              <p className="blog-post-meta">
                {" "}
                <Moment format="DD/MM/YYYY HH:MM ">
                  {props.createAt}
                </Moment>{" "}
                <a href="#">{props.owner.username}</a>
              </p>
              <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                  <h1 className="display-4 font-italic">{props.title}</h1>
                  <p className="lead my-3">{props.shortDescription}</p>
                </div>
              </div>
              <blockquote>
                <p>{props.fullDescription}</p>
              </blockquote>
              <div className="btn-group">
                  <button type="button" className="btn" onClick={props.addKudo(props.id)}>
                    <img src={KudosImg} /> {props.kudos} Kudos
                  </button>
                  <button type="button"  className="btn btn-secondary">
                  <a className="urlButton" href={props.URLpath} target={'_blank'} >
                    <img src={LinkImg}  width={30} />Source
                  </a>
                  </button>
                  <button type="button"  className="btn btn-dark" onClick={props.enableComments}>
                    <img src={CommentsImg} width={30} />Discuss
                  </button>
                </div>
              <hr />
              <p className="text-muted">
                Kudos (from the Ancient Greek: κῦδος) is acclaim or praise for
                exceptional achievement.
              </p>
            </div>



            {props.showComments === true ? (
              <div>
                <div>
                  <h2 className="text-right pauseFont text-muted">
                    ·|comments|·
                  </h2>
                  <div className="row">
                    <div className="col blog-main text-center">
                      <div className="box">
                        <div className="box-content">
                          <h2 className="tag-title">mediacloner</h2>
                          <hr />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Proin eget tortor risus.Cras
                            ultricies ligula sed magna dictum porta. Vivamus
                            magna justo, lacinia eget consectetur sed, convallis
                            at tellus. Curabitur non nulla sit amet nisl tempus
                            convallis quis ac lectus.
                          </p>
                          <br />
                          <a href="ppc.html" className="btn btn-info">
                            User Timeline
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Form>
                    <FormGroup row>
                      <Label for="fullDescription" sm={2}>
                        Comment:
                      </Label>
                      <Col sm={10}>
                        <Input type="textarea" onChange={props.newComment} name="fullDescription" id="fullDescription" placeholder="write the description that could you see from the post " />
                      </Col>
                    </FormGroup>
                    <Button onClick={props.addNewComment} className="float-right btn-info">
                      Submit
                    </Button>
                  </Form>
              </div>
            ) : (
              undefined
            )}



          </div>
          {/* /.blog-main */}
          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">
                {props.owner.about} <span className="pauseFont">·|pause|·</span>{" "}
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
            </div>
            <div className="p-3">
              <h4 className="font-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside>
          {/* /.blog-sidebar */}
        </div>
        {/* /.row */}
      </main>
    </div>
  );
}
