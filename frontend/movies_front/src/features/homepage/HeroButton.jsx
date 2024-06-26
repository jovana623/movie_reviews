import { IoPlayCircleOutline } from "react-icons/io5";
import "../../styles/components/HeroButton.scss";

function HeroButton() {
  return (
    <button className="button__container">
      <p>Watch Me</p>
      <IoPlayCircleOutline className="button__container--icon" />
    </button>
  );
}

export default HeroButton;
