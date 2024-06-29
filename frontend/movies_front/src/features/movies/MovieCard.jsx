import { NavLink } from "react-router-dom";
import "../../styles/components/MovieCard.scss";

/* eslint-disable react/prop-types */
function MovieCard({ movie }) {
  const year = new Date(movie.release_date).getFullYear();

  function shortDescription(description, limit) {
    const words = description.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return description;
  }
  return (
    <div className="movie__card">
      <img
        src={movie.image}
        alt={`${movie.title} poster`}
        className="movie__card--poster"
      />
      <div className="movie__card--details">
        <NavLink to={`/movies/${movie.id}`} className="movie__card--title">
          {movie.title}
        </NavLink>
        <div className="movie__card--genres">
          {movie.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
        <p className="movie__card--year">{year}</p>
        <p className="movie__card--description">
          {shortDescription(movie.description, 12)}
        </p>
      </div>
      <div className="movie__card--rating">
        <div className="rating__box">9.8</div>
      </div>
    </div>
  );
}

export default MovieCard;
