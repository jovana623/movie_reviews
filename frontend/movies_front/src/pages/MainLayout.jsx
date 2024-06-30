import { Outlet } from "react-router-dom";
import "../styles/pages/MainLayout.scss";
import NavMenu from "../features/navigation/NavMenu";
import "../styles/layout/MainLayout.scss";

function MainLayout() {
  return (
    <div className="home__layout">
      <div className="nav__container">
        <NavMenu />
      </div>
      <Outlet />
    </div>
  );
}
export default MainLayout;
