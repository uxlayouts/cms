import React from 'react';
import { NavLink } from 'react-router-dom';

const PostDisplay = (props) => {
  return (
    <div>
      <h2>Posts</h2>
      {props.postList.map(({ id, title, body }) => (
        <div className="col-md-4 col-sm-6" key={id}>
          <div className="item">
            <h2>{title}</h2>
            <p>{body}</p>
            <NavLink to={`/posts/${id}`}>View {id}</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
