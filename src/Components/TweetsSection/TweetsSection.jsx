import React from "react";
import User from "../../Assets/images/user.svg";
import Comment from "../../Assets/images/comment.svg";
import Like from "../../Assets/images/like.svg";
import Share from "../../Assets/images/share.svg";
import Statistic from "../../Assets/images/statistics.svg";
import ReTweet from "../../Assets/images/retweet.svg";
import Option from "../../Assets/images/option.svg";
import "./TweetsSection.scss";

const TweetsSection = ({}) => {
  return (
    <section>
      <ul className="tweets-list">
        <li className="tweets-list__item">
          <a href="#" className="user-photo">
            <img src={User} alt="user.img" width={60} height={60} />
          </a>
          <div className="users-infos">
            <div className="user-info">
              <h3 className="user-name">Designsta</h3>
              <span className="user-span">@inner</span>
              <span className="user-span">22m</span>
            </div>
            <p className="user-tweet">
              Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
              zerikmadinglarmi?
            </p>
            <div className="user-btn-box">
              <button className="users-button">
                <img src={Comment} alt="comment" /> 1
              </button>
              <button className="users-button">
                <img src={ReTweet} alt="comment" />
              </button>
              <button className="users-button">
                <img src={Like} alt="comment" />
              </button>
              <button className="users-button">
                <img src={Share} alt="comment" />
              </button>
              <button className="users-button">
                <img src={Statistic} alt="comment" />
              </button>
            </div>
          </div>
          <button className="users-button opt-btn">
            <img src={Option} alt="More options" />
          </button>
        </li>
      </ul>
    </section>
  );
};

export default TweetsSection;
