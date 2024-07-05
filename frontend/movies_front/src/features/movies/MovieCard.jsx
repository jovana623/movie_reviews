import { NavLink } from "react-router-dom";
import "../../styles/components/MovieCard.scss";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteMovie } from "./useDeleteMovie";

/* eslint-disable react/prop-types */
function MovieCard({ movie }) {
  const { deleteMovie, isLoading } = useDeleteMovie();

  function shortDescription(description, limit) {
    const words = description.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return description;
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="movie__card">
      <NavLink to={`/movies/${movie.id}`}>
        <img
          src={movie.image}
          alt={`${movie.title} poster`}
          className="movie__card--poster"
        />
      </NavLink>
      <div className="movie__card--details">
        <div className="movie__card--nav">
          <NavLink to={`/movies/${movie.id}`} className="movie__card--title">
            {movie.title}
          </NavLink>
          <FaRegTrashCan
            className="movie__card--delete"
            onClick={() => deleteMovie(movie.id)}
          />
        </div>
        <div className="movie__card--genres">
          {movie.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
        <p className="movie__card--description">
          {shortDescription(movie.description, 12)}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
