import "../../styles/components/TrailerSection.scss";
import CategoriesNav from "../navigation/CategoriesNav";
import SearchBar from "../navigation/SearchBar";
import Trailer from "../trailers/Trailer";
import { useMovies } from "../movies/useMovies";

function TrailerSection() {
  const { movies, isLoading } = useMovies();
  if (isLoading) return <div>Loading...</div>;
  const featured_movies = movies.slice(0, 3);
  console.log(featured_movies);
  return (
    <div className="trailer__section">
      <div className="trailer__section--trailers">
        {featured_movies.map((movie) => (
          <Trailer key={movie.id} name={movie.title} image={movie.image} />
        ))}
      </div>
      <div className="trailer__section--categories">
        <CategoriesNav />
        <div className="trailer__section--search">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default TrailerSection;
