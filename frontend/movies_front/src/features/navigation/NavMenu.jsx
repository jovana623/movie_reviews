import { NavLink } from "react-router-dom";
import "../../styles/components/NavMenu.scss";

function NavMenu() {
  return (
    <nav className="nav">
      <NavLink className="nav__item">Home</NavLink>
      <NavLink className="nav__item">Categories</NavLink>
      <NavLink className="nav__item">Recommended</NavLink>
      <NavLink className="nav__item">News</NavLink>
      <NavLink className="nav__item">Newsletter</NavLink>
    </nav>
  );
}

export default NavMenu;
