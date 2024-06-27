import "../../styles/components/HeroGenres.scss";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function HeroGenres({ genre }) {
  return (
    <button className="genre__container">
      <NavLink to="">
        <p className="genre__container--name">{genre}</p>
      </NavLink>
    </button>
  );
}

export default HeroGenres;
