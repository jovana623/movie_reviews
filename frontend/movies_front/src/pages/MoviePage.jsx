import { useParams } from "react-router-dom";
import { useMovie } from "../features/movies/useMovie";
import "../styles/pages/MoviePage.scss";
import HeroGenres from "../features/homepage/HeroGenres";
import { useActor } from "../features/actors/useActor";

function MoviePage() {
  const { id } = useParams();
  const { movie, isLoading } = useMovie(id);
  const { actor } = useActor(12);
  console.log(actor);

  if (!movie) {
    return <div>Movie not found or data not loaded.</div>;
  }
  const year = new Date(movie.release_date).getFullYear();

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const formattedDuration = `${hours}h ${minutes}m`;
    return formattedDuration;
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="movie__page">
      <div
        className="movie__background"
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      ></div>
      <div className="movie__info">
        <img src={movie.image} className="movie__info-image" />
        <div className="movie__info-details">
          <div className="movie__info-year-duration">
            <p>{year}</p>
            <p>&#x2022;</p>
            <p>{formatDuration(movie.length)}</p>
          </div>
          <h1 className="movie__info-title">{movie.title}</h1>
          <div className="movie__info-genres">
            {movie.genres.map((genre) => (
              <HeroGenres key={genre.id} genre={genre.name} />
            ))}
          </div>
          <p className="movie__info-description">{movie.description}</p>
          <p className="movie__info-director">
            <span> Directed by</span>: {movie.director.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
