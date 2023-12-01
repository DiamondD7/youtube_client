import React, { useState } from "react";
import {
  Basketball,
  Code,
  Gavel,
  Newspaper,
  PawPrint,
  GlobeHemisphereEast,
  List,
  MagnifyingGlass,
  Microphone,
  MusicNotes,
  Atom,
  MicrophoneStage,
  GameController,
  VideoCamera,
  Bicycle,
  HandHeart,
  FilmSlate,
  TrendUp,
  Exam,
} from "@phosphor-icons/react";
import YoutubeLogo from "../../assets/img/youtubelogo.png";
import { BASE_URL } from "../../assets/js/ApiAuth";

import "../../styles/navstyles.css";
const Nav = ({ setCategory, setSearchLists }) => {
  const [navActive, setNavActive] = useState(""); //do this later
  const [search, setSearch] = useState("");
  const [searchedLists, setSearchedLists] = useState([]);

  const onClickCategory = (e, cat) => {
    e.preventDefault();
    setCategory(cat);
  };

  const onClickSearch = () => {
    fetch(`${BASE_URL}search?q=${search}&part=snippet&maxResults=50`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchLists(data.items);
      });
  };

  return (
    <>
      <div className="nav-wrapper__container">
        <div className="menu-logo__wrapper">
          <div>
            <List size={24} color="rgba(244,244,244,0.7)" />
          </div>
          <button className="btn-logo">
            <img
              className="youtube-logo__img"
              src={YoutubeLogo}
              alt="youtubeLogo"
            />
          </button>
          <div className="searchbar-wrapper">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="searchbar-icon__btn" onClick={onClickSearch}>
              <MagnifyingGlass size={20} color="#f3f3f3" />
            </button>
            <button className="searchbar-mic__btn">
              <Microphone size={20} color="#f3f3f3" />
            </button>
          </div>
        </div>

        <ul>
          <button onClick={(e) => onClickCategory(e, "Trending")}>
            <li>
              <TrendUp size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Trending
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Sports")}>
            <li>
              <Basketball size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; Sports
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Coding")}>
            <li>
              <Code size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Coding
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Learning")}>
            <li>
              <Exam size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Learning
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Biking")}>
            <li>
              <Bicycle size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Biking
            </li>
          </button>

          <button onClick={(e) => onClickCategory(e, "Politics")}>
            <li>
              <Gavel size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Politics
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "News")}>
            <li>
              <Newspaper size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; News
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Movies")}>
            <li>
              <FilmSlate size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; Movies
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Animals")}>
            <li>
              <PawPrint size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Animals
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Planet")}>
            <li>
              <GlobeHemisphereEast size={20} color="rgba(244,244,244,0.7)" />{" "}
              &nbsp; &nbsp; Planet
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Music")}>
            <li>
              <MusicNotes size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; Music
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Podcast")}>
            <li>
              <MicrophoneStage size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; Podcasts
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Science")}>
            <li>
              <Atom size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Science
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Gaming")}>
            <li>
              <GameController size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; Gaming
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Live")}>
            <li>
              <VideoCamera size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; Live
            </li>
          </button>
          <button onClick={(e) => onClickCategory(e, "Social Experiment")}>
            <li>
              <HandHeart size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; Social Experiment
            </li>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Nav;
