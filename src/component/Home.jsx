import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Feed from "./Feed/Feed";

const Home = () => {
  const [category, setCategory] = useState("Random");

  const [searchLists, setSearchLists] = useState([]);

  return (
    <>
      <Nav setCategory={setCategory} setSearchLists={setSearchLists} />
      <Feed category={category} searchLists={searchLists} />
    </>
  );
};

export default Home;
