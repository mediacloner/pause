
  <div>
 
    {/* /container */}
    <div className="container">
      <div className="row">
        <h2 className="text-center pauseFont ">·|timeline|·</h2>
        <div className="row">
  
  
          <div className="col-md-4 text-center">
            <div className="box">
              <div className="box-content">
                <h1 className="tag-title">How "oldschool" graphics worked in Commodore and Nintendo</h1>
                <hr />
                <p>I cover the limitations of color on older 1980's computers and game consoles such as the Nintendo Entertainment System and the Commodore 64.
                </p>
                <br />
                <a href="ppc.html" className="btn btn-block btn-info">Learn more</a>
              </div>
            </div>
          </div>
  
          {props.list.data.map((post, index) => {
              <div className="col-md-4 text-center key ={post._id}">
                <div className="box">
                  <div className="box-content">
                    <h1 className="tag-title">{post.title}</h1>
                    <hr />
                    <p>{post.shortDescription}
                    </p>
                    <br />
                    <a href="ppc.html" className="btn btn-block btn-info">Read</a>
                  </div>
                </div>
              </div>})}
        </div>
        </div>
    </div>;
    
  