import GenreFilter from "./GenreFilter";
import YearFilter from "./YearFilter";
import "../../styles/components/Filters.scss";

function Filters() {
  return (
    <div className="filters">
      <GenreFilter />
      <YearFilter />
    </div>
  );
}

export default Filters;
