import "../../styles/components/ActorDetails.scss";

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
        <h2 className="actor_details-name">{actor.name}</h2>
        <p className="actor_details-birthday">
          <p className="actor_details-nationality">{actor.nationality}</p>
          Born <span>{actor.birth_date}</span>
        </p>
      </div>
    </div>
  );
}

export default ActorDetails;
