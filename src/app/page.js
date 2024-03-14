import React from "react";

const API_KEY = process.env.API_KEY;

const Home = () => {
  return (
    <div>
      <h1>JUICE WRLD</h1>
      <h1>{API_KEY}</h1>
    </div>
  );
};

export default Home;
