import "../../styles/components/ActorDetails.scss";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "../../ui/Modal";
import DeleteWindow from "../../ui/DeleteWindow";

/* eslint-disable react/prop-types */
function ActorDetails({ actor }) {
  return (
    <div className="actor">
      <img
        src={actor.image}
        alt={`${actor.name} image`}
        className="actor_image"
      />
      <div className="actor_details">
        <div className="actor_details-header">
          <h2 className="actor_details-name">{actor.name}</h2>
          <Modal>
            <Modal.OpenButton opens="delete-actor">
              <FaRegTrashCan className="actor_details-icon" />
            </Modal.OpenButton>
            <Modal.Window name="delete-actor">
              <DeleteWindow object={actor} />
            </Modal.Window>
          </Modal>
        </div>
        <p className="actor_details-birthday">
          <p className="actor_details-nationality">{actor.nationality}</p>
          Born <span>{actor.birth_date}</span>
        </p>
      </div>
    </div>
  );
}

export default ActorDetails;
