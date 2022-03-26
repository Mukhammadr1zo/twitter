import React from "react";
import "./SearchTweets.scss";

const SearchTweets = () => {
  return (
    <input
      className="search-input"
      type={"text"}
      placeholder={"Search Twitter"}
    />
  );
};

export default SearchTweets;
