import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../assets/js/ApiAuth";

import "../../styles/feedstyles.css";

const Feed = ({ category, searchLists }) => {
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  useEffect(() => {
    setSuggestedVideos([]);
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

  useEffect(() => {
    setSuggestedVideos([]);
    setTimeout(() => {
      setSuggestedVideos(searchLists);
    }, 1000);
  }, [searchLists]);

  return (
    <div className="feed__wrapper">
      {suggestedVideos.length === 0 ? (
        <div className="loading"></div>
      ) : (
        <div className="grid-videos__wrapper">
          {suggestedVideos.map((items, index) => (
            <div className="videos__wrapper" key={index}>
              <button>
                <a
                  href={`https://www.youtube.com/watch?v=${items.id.videoId}`}
                  target="_blank"
                  className="anchor-video"
                >
                  <img
                    className="videos-image"
                    src={items.snippet.thumbnails.medium.url}
                  />
                  <p className="snippet-title__text">{items.snippet.title}</p>
                  <p className="snippet-channelName__text">
                    {items.snippet.channelTitle}
                  </p>
                </a>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
