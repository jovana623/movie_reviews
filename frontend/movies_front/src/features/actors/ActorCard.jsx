import "../../styles/components/ActorCard.scss";

/* eslint-disable react/prop-types */
function ActorCard({ actor }) {
  return (
    <div className="actor__card">
      <img src={actor.image} className="actor__card-image" />
      <h1 className="actor__card-title">{actor.name}</h1>
    </div>
  );
}

export default ActorCard;
