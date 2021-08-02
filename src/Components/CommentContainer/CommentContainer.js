import React from "react";
import Comment from "../Comment/Comment";
import "./CommentContainer.css";

const CommentContainer = ({ innerWidth, comments, time }) => {
  var urlRegex = /(https?:\/\/[^\s]+)/g;

  return (
    <div className="comment-container">
      {comments.map((comment, i) =>
        comment.search(urlRegex) ? (
          <Comment
            key={i}
            innerWidth={innerWidth}
            comment={comment}
            time={time}
          />
        ) : (
          <Comment key={i} innerWidth={innerWidth} gif={comment} time={time} />
        )
      )}
    </div>
  );
};

export default CommentContainer;
