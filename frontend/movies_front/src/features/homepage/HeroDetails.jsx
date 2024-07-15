import { NavLink } from "react-router-dom";
import "../../styles/components/HeroDetails.scss";
import { useMovie } from "../movies/useMovie";
import HeroButton from "./HeroButton";
import HeroGenres from "./HeroGenres";

function HeroDetails() {
  const { movie, isLoading } = useMovie(16);
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="hero__details">
      <NavLink to={`movies/${movie.id}`} className="hero__details--title">
        {movie.title}
      </NavLink>
      <div className="hero__details--genre">
        {movie.genres.map((genre) => {
          return <HeroGenres key={genre.id} genre={genre.name} />;
        })}
      </div>
      <HeroButton />
    </div>
  );
}

export default HeroDetails;
