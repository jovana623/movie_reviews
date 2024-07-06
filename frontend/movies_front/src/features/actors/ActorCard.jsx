import { NavLink } from "react-router-dom";
import "../../styles/components/ActorCard.scss";

/* eslint-disable react/prop-types */
function ActorCard({ actor }) {
  return (
    <NavLink to={`/actors/${actor.id}`} className="actor__card">
      <img src={actor.image} className="actor__card-image" />
      <h1 className="actor__card-title">{actor.name}</h1>
    </NavLink>
  );
}

export default ActorCard;
