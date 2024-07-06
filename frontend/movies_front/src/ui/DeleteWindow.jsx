import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/components/DeleteWindow.scss";
import { ModalContext } from "./Modal";
import { useDeleteMovie } from "../features/movies/useDeleteMovie";
import { useDeleteActor } from "../features/actors/useDeleteActor";

/* eslint-disable react/prop-types */
function DeleteWindow({ object }) {
  const { close } = useContext(ModalContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { deleteMovie, isLoading: isDeletingMovie } = useDeleteMovie();
  const { deleteActor, isLoading: isDeletingActor } = useDeleteActor();

  const isMoviePath = location.pathname.includes("/movies");
  const isActorPath = location.pathname.includes("/actors/");

  function handleDelete() {
    if (isMoviePath) {
      deleteMovie(object.id);
    } else if (isActorPath) {
      deleteActor(object.id);
      navigate(-1);
    }
    close();
  }

  if (isDeletingMovie || isDeletingActor) return <div>Loading...</div>;

  return (
    <div className="window">
      <p className="window_text">
        Are you sure you want to delete {object.title || object.name}?
      </p>
      ;
      <div className="window_buttons">
        <button className="window_buttons-cancel" onClick={close}>
          Cancel
        </button>
        <button className="window_buttons-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteWindow;
