import MovieCard from "../features/movies/MovieCard";
import { useMovies } from "../features/movies/useMovies";
import "../styles/pages/Movies.scss";

function Movies() {
  //const location = useLocation();
  //const searchParams = new URLSearchParams(location.search);
  //const genreId = searchParams.get("genre_id");
  //const { genre, isLoading: isLoadingGenre } = useGenre(genreId);
  const { movies, isLoading } = useMovies();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="genre__page">
      <div className="movie__grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
