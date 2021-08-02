import React, { Fragment, useState, useEffect, useRef } from "react";
import "./AddComment.css";
import profileImg from "../../Assets/profileimg.jpg";
import gifIcon from "../../Assets/gif.png";
import CommentContainer from "../CommentContainer/CommentContainer";
import GifContainer from "../GifContainer/GifContainer";

const AddComment = ({ innerWidth }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [time, setTime] = useState("");
  const [gif, setGif] = useState("");
  const [isGifOpen, setIsGifOpen] = useState(false);
  const [trendGif, setTrendGif] = useState([]);

  const inputRef = useRef("");

  const ApiKey = "dSmLiTGFZiAdaYK8MncFfgz3jXNTTmvh";
  var commentTime = new Date().toTimeString().split(" ")[0];

  const handleSumbit = (e) => {
    e.preventDefault();
    if (comment !== "") {
      setComments([...comments, comment]);
      setComment("");
      setTime("");
    }
  };

  // inputRef.current.addEventListener("keyup", (e) => {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();

  //     handleSumbit();
  //   }
  // });

  // console.log(gif);
  console.log(comments);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}`)
      .then((response) => response.json())
      .then((json) => {
        setTrendGif(json.data);
      });
  }, []);

  return (
    <Fragment>
      <div className="addcomment-wrapper">
        <div className="img">
          <img src={profileImg} alt="profile image" />
        </div>
        <div
          style={{
            width: innerWidth < 735 ? innerWidth - 64 : "735px",
          }}
          className="input"
        >
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setTime(commentTime);
            }}
            ref={inputRef}
          />
          <button
            onClick={() => {
              setIsGifOpen(!isGifOpen);
            }}
          >
            <img style={{ width: "24px" }} src={gifIcon} alt="gif icon" />
          </button>
          <button onClick={handleSumbit}>Post</button>
        </div>
      </div>
      <CommentContainer
        innerWidth={innerWidth}
        comments={comments}
        time={time}
      />

      {isGifOpen ? (
        <GifContainer
          onClick={() => {
            if (gif !== "") {
              setComments([...comments, gif]);
              // setGif("");
              setIsGifOpen(false);
            }
          }}
          setGif={setGif}
          trendGif={trendGif}
          innerWidth={innerWidth}
        />
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default AddComment;
