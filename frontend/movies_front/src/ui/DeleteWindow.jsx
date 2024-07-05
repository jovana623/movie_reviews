import { useContext } from "react";
import "../styles/components/DeleteWindow.scss";
import { ModalContext } from "./Modal";
import { useDeleteMovie } from "../features/movies/useDeleteMovie";

/* eslint-disable react/prop-types */
function DeleteWindow({ movie }) {
  const { close } = useContext(ModalContext);
  const { deleteMovie, isLoading } = useDeleteMovie();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="window">
      <p className="window_text">
        Are you sure you want to delete {movie.title}?
      </p>
      ;
      <div className="window_buttons">
        <button className="window_buttons-cancel" onClick={close}>
          Cancel
        </button>
        <button
          className="window_buttons-delete"
          onClick={() => {
            deleteMovie(movie.id);
            close();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteWindow;
