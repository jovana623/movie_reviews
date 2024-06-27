import { NavLink } from "react-router-dom";
import "../../styles/components/CategoriesNav.scss";

function CategoriesNav() {
  return (
    <nav className="categories__nav">
      <NavLink to="#">All</NavLink>
      <NavLink to="#">Latest</NavLink>
      <NavLink to="#">Coming Soon</NavLink>
      <NavLink to="#">Top Rated</NavLink>
    </nav>
  );
}

export default CategoriesNav;
