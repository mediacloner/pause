import React from 'react'
import { NavLink } from 'react-router-dom'

function Timeline(props) {
  return (
    <div>
     

      <div className="container topmed">
       
          <h2 className="text-center text-secondary pauseFont ">{props.header}</h2>
          <div className="row">
            {props.list.map((post, index) => {
              return (
                <div className="col-md-4 text-center key ={post._id}">
                  <div className="box">
                    <div className="box-content">
                      <h1 className="tag-title">{post.title}</h1>
                      <hr />
                      <p>{post.shortDescription}</p>
                      <br />
                      <a href="ppc.html" className="btn btn-block btn-info">
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


export default Timeline