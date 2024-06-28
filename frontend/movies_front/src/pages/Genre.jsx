import MovieCard from "../features/movies/MovieCard";
import { useMovies } from "../features/movies/useMovies";
import { useLocation } from "react-router-dom";

function Genre() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const genreId = searchParams.get("genre_id");
  const genres = ["action", "drama", "comedy"];

  const { movies, isLoading } = useMovies(genreId);
  if (isLoading) return <div>Loading...</div>;
  console.log(movies);
  return (
    <div>
      <MovieCard
        poster="../bohemian.jpg"
        name="Bohemian Rapsody"
        genres={genres}
      />
    </div>
  );
}

export default Genre;
