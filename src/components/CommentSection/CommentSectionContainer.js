// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({comments}) => {
  const [comment] = useState(comments)
  // Add state for the comments
  return (
    <div>
      {comment.map((item, index) => (<Comment key={index} username={item.username} text={item.text}/> ))}
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
