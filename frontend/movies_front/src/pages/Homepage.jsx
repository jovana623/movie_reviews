import { useMovies } from "../features/movies/useMovies";

function Homepage() {
  const { movies, isLoading } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Release Date: {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
