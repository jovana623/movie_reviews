import MovieCard from "../features/movies/MovieCard";
import { useMovies } from "../features/movies/useMovies";
import { useLocation } from "react-router-dom";
import "../styles/pages/Genre.scss";

function Genre() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const genreId = searchParams.get("genre_id");

  const { movies, isLoading } = useMovies(genreId);
  console.log(movies);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="movie__grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Genre;
