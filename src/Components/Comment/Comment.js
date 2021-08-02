import React from "react";
import "./Comment.css";
import profileImg from "../../Assets/profileimg.jpg";

const Comment = ({ comment, gif, time, innerWidth }) => {
  var commentTime = new Date().toTimeString().split(" ")[0];
  return (
    <div
      style={{
        width: innerWidth < 799 ? innerWidth : "799px",
      }}
      className="comment-wrap"
    >
      <div className="userimg">
        <img src={profileImg} alt="profile image" />
      </div>
      <div className="comment">
        <p className="username">smurtiranjan</p>
        <p className="comment-text">{comment}</p>
        {gif ? <img className="comment-gif" src={gif} alt="gif" /> : ""}
      </div>
      <p className="time">{commentTime}</p>
    </div>
  );
};

export default Comment;
