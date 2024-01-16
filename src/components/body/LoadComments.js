import React from "react";

import dateFormat from 'dateformat';

const LoadComments = ({ comments }) => {
  const previewComments = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <p>{comment.comment}</p>
        <h4>{comment.author}</h4>
        <p>{dateFormat(comment.date,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
        <hr />
      </div>
    );
  });
  return <div>{previewComments}</div>;
};

export default LoadComments;
