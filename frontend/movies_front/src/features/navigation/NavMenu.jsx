import { NavLink } from "react-router-dom";
import "../../styles/components/NavMenu.scss";

function NavMenu() {
  return (
    <nav className="nav">
      <NavLink to="" className="nav__item">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav__item">
        Movies
      </NavLink>
      <NavLink className="nav__item">Recommended</NavLink>
      <NavLink className="nav__item">News</NavLink>
      <NavLink className="nav__item">Newsletter</NavLink>
    </nav>
  );
}

export default NavMenu;
