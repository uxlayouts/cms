import React from 'react';

const PostDisplay = ({ id, title, body }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="item margin-top-3">
          <h2>Post {id}</h2>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  </div>
);

export default PostDisplay;
