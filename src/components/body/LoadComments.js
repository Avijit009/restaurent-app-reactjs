import React from "react";

import dateFormat from "dateformat";

const LoadComments = ({ comments }) => {
  const previewComments = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <p>{comment.comment}</p>
        <p>Rating: {comment.rating}</p>
        <h4>{comment.author}</h4>
        <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy")}</p>
        <hr />
      </div>
    );
  });
  return (
    <div>
      <h4 style={{
        textAlign:"center",
      }}>All Comments </h4>
      <hr />
      {previewComments}
    </div>
  );
};

export default LoadComments;
