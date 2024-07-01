import { NavLink } from "react-router-dom";
import "../../styles/components/Trailer.scss";
import { FaCirclePlay } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function Trailer({ movie }) {
  return (
    <NavLink to={`movies/${movie.id}`}>
      <div className="trailer">
        <img src={movie.image} alt="movie-poster" className="trailer__poster" />
        <div className="trailer__details">
          <button className="trailer__details--button">
            <FaCirclePlay className="trailer__details--icon" />
          </button>
          <p className="trailer__details--name">{movie.name}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default Trailer;
