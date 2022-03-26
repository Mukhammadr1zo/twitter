import React from "react";
import "./nav.scss";
import "../Button/Button.scss";
import "../Profile/profile.scss";
import Logo from "../../Assets/images/logo.svg";
import Home from "../../Assets/images/home.svg";
import Explore from "../../Assets/images/hashtag.svg";
import Notifications from "../../Assets/images/notification.svg";
import Message from "../../Assets/images/message.svg";
import Bookmarks from "../../Assets/images/bookmark.svg";
import Lists from "../../Assets/images/lists.svg";
import Profile from "../../Assets/images/profile.svg";
import More from "../../Assets/images/more.svg";
import Boburjon from "../../Assets/images/boburjon.svg";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to={"/"}>
        <img
          className="twitter__logo"
          src={Logo}
          alt="Twitter-Logo"
          width={40}
          height={33}
        />
      </Link>

      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to={"/"}>
            <img
              className="nav__img"
              src={Home}
              alt="home-icon"
              width={26}
              height={24}
            />
            <span className="nav__link__inner">Home</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to={"/explore"}>
            <img
              className="nav__img"
              src={Explore}
              alt="explore-icon"
              width={25}
              height={25}
            />
            <span className="nav__link__inner">Explore</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to={"/notifications"}>
            <img
              className="nav__img"
              src={Notifications}
              alt="home-icon"
              width={25}
              height={25}
            />
            <span className="nav__link__inner">Notifications</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to={"/message"}>
            <img
              className="nav__img"
              src={Message}
              alt="message-icon"
              width={25}
              height={25}
            />
            <span className="nav__link__inner">Messages</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to={"/bookmarks"}>
            <img
              className="nav__img"
              src={Bookmarks}
              alt="bookmarks-icon"
              width={25}
              height={25}
            />
            <span className="nav__link__inner">Bookmarks</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to={"/lists"}>
            <img
              className="nav__img"
              src={Lists}
              alt="lists-icon"
              width={25}
              height={25}
            />
            <span className="nav__link__inner">Lists</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to={"/profile"}>
            <img
              className="nav__img"
              src={Profile}
              alt="profile-icon"
              width={25}
              height={25}
            />
            <span className="nav__link__inner">Profile</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to={"/more"}>
            <img
              className="nav__img"
              src={More}
              alt="more-icon"
              width={25}
              height={25}
            />
            <span className="nav__link__inner">More</span>
          </NavLink>
        </li>
      </ul>

      <Button classList={"twitter__btn"} text={"Tweet"} />

      <div className="profile__box">
        <img
          className="profile__img"
          src={Boburjon}
          alt="Profile-img"
          width={50}
          height={50}
        />

        <div className="profile__info">
          <h2 className="profile__name">Bobur</h2>
          <p className="profile__adress">@bobur_mavlonov</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
