import "../../styles/components/Trailer.scss";
import { FaCirclePlay } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function Trailer({ image, name }) {
  return (
    <div className="trailer">
      <img src={image} alt="movie-poster" className="trailer__poster" />
      <div className="trailer__details">
        <button className="trailer__details--button">
          <FaCirclePlay className="trailer__details--icon" />
        </button>
        <p className="trailer__details--name">{name}</p>
      </div>
    </div>
  );
}

export default Trailer;
