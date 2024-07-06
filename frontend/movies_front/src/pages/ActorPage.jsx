import { useParams } from "react-router-dom";
import { useActor } from "../features/actors/useActor";
import ActorDetails from "../features/actors/ActorDetails";
import "../styles/pages/ActorPage.scss";

function ActorPage() {
  const { id } = useParams();
  const { actor, isLoading } = useActor(id);

  if (!actor) return <div>Actor data is not found</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="actor_page">
      <ActorDetails actor={actor} />
    </div>
  );
}

export default ActorPage;
