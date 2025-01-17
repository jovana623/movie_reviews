import { useSearchParams } from "react-router-dom";
import Filters from "../features/movies/Filters";
import MovieCard from "../features/movies/MovieCard";
import { useMovies } from "../features/movies/useMovies";
import "../styles/pages/Movies.scss";

function Movies() {
  const [searchParams] = useSearchParams();
  const selectedGenreId = searchParams.get("genre");
  const selectedYear = searchParams.get("year");
  console.log(selectedYear);

  const { movies, isLoading } = useMovies(selectedGenreId, selectedYear);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="genre__page">
      <Filters />
      <div className="movie__grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
