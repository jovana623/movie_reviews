import "../../styles/components/TrailerSection.scss";
import CategoriesNav from "../navigation/CategoriesNav";
import SearchBar from "../navigation/SearchBar";
import Trailer from "../trailers/Trailer";

function TrailerSection() {
  return (
    <div className="trailer__section">
      <div className="trailer__section--trailers">
        <Trailer name="Departed" image="../departed.jpg" />
        <Trailer name="X-men" image="../x-men.jpg" />
        <Trailer name="Shawshank" image="../shawshank.jpg" />
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
