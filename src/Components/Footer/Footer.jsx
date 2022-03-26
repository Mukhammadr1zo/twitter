import React from "react";
import SearchTweets from "../SearchTweets/SearchTweets";
import "./Footer.scss";
import TrendForYou from "../TrendForYou/TrendForYou";
import InterestingPeople from "../InterestingPeople/InterestingPeople";

const Footer = () => {
  return (
    <div className="footer">
      <SearchTweets />
      <TrendForYou />
      <InterestingPeople />
    </div>
  );
};

export default Footer;
