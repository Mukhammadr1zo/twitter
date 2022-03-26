import React from "react";
import Profile from "../../Assets/images/boburjon.svg";
import WhatImg from "../../Assets/images/what-new-img.svg";
import Gif from "../../Assets/images/gif.svg";
import Stat from "../../Assets/images/stat.svg";
import Smile from "../../Assets/images/smile.svg";
import Calendar from "../../Assets/images/calendar.svg";
import Button from "../Button/Button";
import "../Button/Button.scss";
import "./New-Tweet.scss";

const NewTweet = () => {
  return (
    <section className="new-tweet">
      <div className="new-tweet__top">
        <img
          className="new-tweet__avatar"
          src={Profile}
          alt=""
          width={60}
          height={60}
        />

        <textarea
          className="new-tweet__text"
          cols="30"
          rows="1"
          placeholder="What's happening"
        ></textarea>
      </div>

      <div className="new-tweet__bottom">
        <ul className="new-tweet__list">
          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Media">
              <img src={WhatImg} alt="img" />
            </button>
          </li>

          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Gif">
              <img src={Gif} alt="gif" />
            </button>
          </li>

          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Stats">
              <img src={Stat} alt="stat" />
            </button>
          </li>

          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Emoji">
              <img src={Smile} alt="smile" />
            </button>
          </li>

          <li className="new-tweet__item">
            <button className="new-tweet__item__button" title="Schedule">
              <img src={Calendar} alt="calendar" />
            </button>
          </li>
        </ul>

        <Button classList={".twitter__btn new-tweet__button"} text={"Tweet"} />
      </div>
    </section>
  );
};

export default NewTweet;
