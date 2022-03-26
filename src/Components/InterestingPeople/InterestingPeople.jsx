import React from "react";
import "../TrendForYou/TrendForYou.scss";
import "./InterestingPeople.scss";
import "../Nav/nav.scss";
import Boburjon from "../../Assets/images/boburjon.svg";

const InterestingPeople = () => {
  return (
    <div className="trend interesting">
      <h2 className="interesting__header">You might like</h2>
      <div className="profile__box interesting-people">
        <img
          className="profile__img"
          src={Boburjon}
          alt="Profile-img"
          width={50}
          height={50}
        />

        <div className="profile__info ">
          <h2 className="profile__name">Bobur</h2>
          <p className="profile__adress">@bobur_mavlonov</p>
        </div>
      </div>
      <div className="profile__box interesting-people">
        <img
          className="profile__img"
          src={Boburjon}
          alt="Profile-img"
          width={50}
          height={50}
        />

        <div className="profile__info ">
          <h2 className="profile__name">Bobur</h2>
          <p className="profile__adress">@bobur_mavlonov</p>
        </div>
      </div>
    </div>
  );
};

export default InterestingPeople;
