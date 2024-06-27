import { useMovies } from "../features/movies/useMovies";
import { useLocation } from "react-router-dom";

function Genre() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const genreId = searchParams.get("genre_id");

  const { movies, isLoading } = useMovies(genreId);
  if (isLoading) return <div>Loading...</div>;
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default Genre;
