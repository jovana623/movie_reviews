import "../../styles/components/SearchBar.scss";
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search..."
      ></input>
      <IoMdSearch className="search__icon" />
    </div>
  );
}

export default SearchBar;
