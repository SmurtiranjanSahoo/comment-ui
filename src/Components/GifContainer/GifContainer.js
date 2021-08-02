import React, { useState } from "react";
import "./GifContainer.css";

const GifContainer = ({ trendGif, innerWidth, setGif, onClick }) => {
  const [searchtext, setSearchtext] = useState("");
  const [searchGif, setSearchGif] = useState([]);

  const ApiKey = "dSmLiTGFZiAdaYK8MncFfgz3jXNTTmvh";

  const handleSumbit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${searchtext}`
    )
      .then((response) => response.json())
      .then((json) => {
        setSearchGif(json.data);
      });
  };

  return (
    <div className="modalwrapper">
      <div
        style={{
          width: innerWidth < 815 ? innerWidth : "815px",
          // marginLeft: innerWidth < 815 ? 0 : (innerWidth - 815) / 2,
        }}
        className="gif-container"
      >
        <form
          onSubmit={handleSumbit}
          style={{
            width: innerWidth < 815 ? innerWidth - 50 : "800px",
          }}
          className="inputsearch"
        >
          <input
            type="text"
            placeholder="Search a gif..."
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />

          <button>Search</button>
        </form>

        {searchtext
          ? searchGif.map((gif, i) => (
              <img
                className="gifimg"
                key={i}
                onClick={() => {
                  setGif(gif.images.fixed_height.url);
                  onClick();
                }}
                src={gif.images.fixed_height.url}
                alt="gif"
              />
            ))
          : trendGif.map((gif, i) => (
              <img
                className="gifimg"
                key={i}
                onClick={() => {
                  setGif(gif.images.fixed_height.url);
                  // console.log(gif.images.fixed_height.url);
                  onClick();
                }}
                src={gif.images.fixed_height.url}
                alt="gif"
              />
            ))}
      </div>
    </div>
  );
};

export default GifContainer;
