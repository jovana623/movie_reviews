import MovieCard from "../features/movies/MovieCard";
import { useMovies } from "../features/movies/useMovies";
import { useLocation } from "react-router-dom";
import "../styles/pages/Genre.scss";
import { useGenre } from "../features/genres/useGenre";

function Genre() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const genreId = searchParams.get("genre_id");
  const { genre, isLoading: isLoadingGenre } = useGenre(genreId);
  const { movies, isLoading } = useMovies(genreId);

  if (isLoading || isLoadingGenre) return <div>Loading...</div>;
  return (
    <div className="genre__page">
      <h1>{genre.name}</h1>
      <div className="movie__grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Genre;
