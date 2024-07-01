import { useSearchParams } from "react-router-dom";
import { useGenres } from "../genres/useGenres";

function GenreFilter() {
  const { genres, isLoading } = useGenres();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleGenreChange(e) {
    const selectedGenre = e.target.value;
    setSearchParams({ genre: selectedGenre });
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <select onChange={handleGenreChange}>
      <option>Genre</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}

export default GenreFilter;
