import { useParams } from "react-router-dom";
import { useMovie } from "../features/movies/useMovie";
import "../styles/pages/MoviePage.scss";
import SingleMovieDetails from "../features/movies/SingleMovieDetails";
import ActorCard from "../features/actors/ActorCard";
import ActorSlider from "../features/actors/ActorsSlider";

function MoviePage() {
  const { id } = useParams();
  const { movie, isLoading } = useMovie(id);

  if (!movie) {
    return <div>Movie not found or data not loaded.</div>;
  }

  if (isLoading) return <div>Loading...</div>;

  console.log(movie);
  return (
    <div className="movie__page">
      <div
        className="movie__background"
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      ></div>
      <SingleMovieDetails movie={movie} />
      <div className="movie__actors">
        <h2 className="movie__actors-title">Actors</h2>
        {movie.actors.map((actor) => (
          <ActorCard key={movie.id} actor={actor} />
        ))}
      </div>
    </div>
  );
}

export default MoviePage;
