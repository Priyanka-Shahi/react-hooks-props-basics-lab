import React from "react";
import user from "../data/user";

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
