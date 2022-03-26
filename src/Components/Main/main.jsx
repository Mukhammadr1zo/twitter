import React from "react";
import NewTweet from "../New-Tweet/New-Tweet";
import "./Main.scss";
import Header from "../Header/Header";
import TweetsSection from "../TweetsSection/TweetsSection";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <NewTweet />
      <TweetsSection />
    </div>
  );
};

export default Main;
