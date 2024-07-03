import { useSearchParams } from "react-router-dom";
import { useGenres } from "../genres/useGenres";
import "../../styles/layout/SelectFilter.scss";

function GenreFilter() {
  const { genres, isLoading } = useGenres();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleGenreChange(e) {
    const selectedGenre = e.target.value;
    setSearchParams({ genre: selectedGenre });
  }
  console.log(searchParams);

  if (isLoading) return <div>Loading...</div>;

  return (
    <select onChange={handleGenreChange} className="select__filter">
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
