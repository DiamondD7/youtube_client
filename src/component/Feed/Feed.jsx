import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../assets/js/ApiAuth";

import "../../styles/feedstyles.css";

const Feed = () => {
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [category, setCategory] = useState("Sports");
  useEffect(() => {
    fetch(
      `${BASE_URL}search?part=snippet&q=${category}&type=video&maxResults=50`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setSuggestedVideos(data.items);
      });
  }, [category]);
  // console.log(suggestedVideos);
  return (
    <div className="feed__wrapper">
      <div className="grid-videos__wrapper">
        {/* {suggestedVideos.map((items) => {
          <div className="videos__wrapper">
            <h1>{items.snippet.channelTitle}</h1>
            <img
              className="videos-image"
              src={items.snippet.thumbnails.high.url}
            />
          </div>;
        })} */}
      </div>
    </div>
  );
};

export default Feed;
