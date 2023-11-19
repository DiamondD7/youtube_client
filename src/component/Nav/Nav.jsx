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
} from "@phosphor-icons/react";
import YoutubeLogo from "../../assets/img/youtubelogo.png";

import "../../styles/navstyles.css";
const Nav = () => {
  const [navActive, setNavActive] = useState("");
  return (
    <>
      <div className="nav-wrapper__container">
        <div className="menu-logo__wrapper">
          <div>
            <List size={24} color="rgba(244,244,244,0.7)" />
          </div>
          <img
            className="youtube-logo__img"
            src={YoutubeLogo}
            alt="youtubeLogo"
          />
          <div className="searchbar-wrapper">
            <input type="text" placeholder="Search" />
            <button className="searchbar-icon__btn">
              <MagnifyingGlass size={20} color="#f3f3f3" />
            </button>
            <button className="searchbar-mic__btn">
              <Microphone size={20} color="#f3f3f3" />
            </button>
          </div>
        </div>

        <ul>
          <button>
            <li>
              <Basketball size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; Sports
            </li>
          </button>
          <button>
            <li>
              <Code size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Coding
            </li>
          </button>

          <button>
            <li>
              <Gavel size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Politics
            </li>
          </button>
          <button>
            <li>
              <Newspaper size={20} color="rgba(244,244,244,0.7)" /> &nbsp;
              &nbsp; News
            </li>
          </button>
          <button>
            <li>
              <PawPrint size={20} color="rgba(244,244,244,0.7)" /> &nbsp; &nbsp;
              Animals
            </li>
          </button>
          <button>
            <li>
              <GlobeHemisphereEast size={20} color="rgba(244,244,244,0.7)" />{" "}
              &nbsp; &nbsp; Planet
            </li>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Nav;
