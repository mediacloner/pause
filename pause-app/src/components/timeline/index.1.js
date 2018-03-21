import React from 'react'
import { NavLink } from 'react-router-dom'


  export default class Timeline extends React.Component {

  

    constructor(props) {
      super(props);
  
    }
  
  

    handleViews=(e)=>{
      e.preventDefault()
      this.setState( {show: 'post'})
     }
  
     render() {
      return (
    <div>
     

      <div className="container topmed">
       
          <h2 className="text-center text-secondary pauseFont ">{this.props.header}</h2>
          <div className="row">
            {this.props.list.map((post, index) => {
              return (
                <div className="col-md-4 text-center key ={post._id}">
                  <div className="box">
                    <div className="box-content">
                      <h1 className="tag-title">{this.post.title}</h1>
                      <hr />
                      <p>{post.shortDescription}</p>
                      <br />
                      <a href="" onClick={this.handleViews} className="btn btn-block btn-info">
                        Read
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
       
      </div>
    </div>
  );
}
  }
