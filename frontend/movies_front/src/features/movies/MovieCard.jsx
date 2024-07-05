import { NavLink } from "react-router-dom";
import "../../styles/components/MovieCard.scss";
import { FaRegTrashCan } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import Modal from "../../ui/Modal";
import DeleteWindow from "../../ui/DeleteWindow";
import CreateMovieForm from "./CreateMovieForm";

/* eslint-disable react/prop-types */
function MovieCard({ movie }) {
  function shortDescription(description, limit) {
    const words = description.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return description;
  }

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
          <Modal>
            <Modal.OpenButton opens="update_form">
              <LuPencilLine className="movie__card--delete" />
            </Modal.OpenButton>
            <Modal.Window name="update_form">
              <div className="update_form">
                <CreateMovieForm movieToUpdate={movie} />
              </div>
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.OpenButton opens="delete_movie">
              <FaRegTrashCan className="movie__card--delete" />
            </Modal.OpenButton>
            <Modal.Window name="delete_movie">
              <DeleteWindow movie={movie} />
            </Modal.Window>
          </Modal>
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
