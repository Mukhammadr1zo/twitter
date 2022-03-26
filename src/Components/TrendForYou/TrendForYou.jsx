import React from "react";
import "./TrendForYou.scss";
import "../TweetsSection/TweetsSection.scss";
import Settings from "../../Assets/images/settings.svg";
import Option from "../../Assets/images/option.svg";

const TrendforYou = () => {
  return (
    <div className="trend">
      <div className="trends">
        <h3 className="trends__header">Trends for you</h3>
        <button className="users-button settings">
          <img src={Settings} alt="setting svg" />
        </button>
      </div>
      <ul className="trends-list">
        <li className="trends-item">
          <div className="trends-item-top">
            <h4 className="trends-header headercha">Trending in Germany</h4>
            <button className="users-button uchta-nuqta">
              <img src={Option} alt="opt" />
            </button>
          </div>
          <h3 className="trends-item-info">Revolution</h3>
          <h4 className="trends-header">50.4K Tweets</h4>
        </li>
        <li className="trends-item">
          <div className="trends-item-top">
            <h4 className="trends-header headercha">Trending in Germany</h4>
            <button className="users-button uchta-nuqta">
              <img src={Option} alt="opt" />
            </button>
          </div>
          <h3 className="trends-item-info">Revolution</h3>
          <h4 className="trends-header">50.4K Tweets</h4>
        </li>
        <li className="trends-item">
          <div className="trends-item-top">
            <h4 className="trends-header headercha">Trending in Germany</h4>
            <button className="users-button uchta-nuqta">
              <img src={Option} alt="opt" />
            </button>
          </div>
          <h3 className="trends-item-info">Revolution</h3>
          <h4 className="trends-header">50.4K Tweets</h4>
        </li>
      </ul>
    </div>
  );
};

export default TrendforYou;
