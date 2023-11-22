import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Feed from "./Feed/Feed";

const Home = () => {
  const [category, setCategory] = useState("Sports");

  return (
    <>
      <Nav setCategory={setCategory} />
      <Feed category={category} />
    </>
  );
};

export default Home;
