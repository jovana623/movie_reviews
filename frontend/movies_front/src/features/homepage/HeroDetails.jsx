import "../../styles/components/HeroDetails.scss";
import { useMovie } from "../movies/useMovie";
import HeroButton from "./HeroButton";
import HeroGenres from "./HeroGenres";

function HeroDetails() {
  const { movie, isLoading } = useMovie(16);
  if (isLoading) return <div>Loading</div>;
  return (
    <div className="hero__details">
      <h1 className="hero__details--title">{movie.title}</h1>

      <div className="hero__details--genre">
        {movie.genres.map((genre) => {
          <HeroGenres genre={genre.name} />;
        })}
        <HeroGenres genre="Action" />
        <HeroGenres genre="Sci-fi" />
        <HeroGenres genre="Adventure" />
      </div>
      <HeroButton />
    </div>
  );
}

export default HeroDetails;
