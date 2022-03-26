import "./Button.scss";
import "../New-Tweet/New-Tweet.scss";

const Button = ({ text, classList }) => {
  return <button className={`${classList} twitter__btn`}>{text}</button>;
};

export default Button;
