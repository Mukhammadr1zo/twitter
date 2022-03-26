import React from "react";
import Mode from "../../Assets/images/mode.svg";
import "./Header.scss";
import useToken from "../../Hooks/useToken";

const Header = () => {
  const [setIsLoggedIn] = useToken(true);
  return (
    <div className="header">
      <h2 className="Header__title">Home</h2>
      <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
        Log out
      </button>
      <button className="header__mode-btn">
        <img src={Mode} alt="mode" />
      </button>
    </div>
  );
};

export default Header;
