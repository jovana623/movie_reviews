import Hero from "../features/homepage/Hero";
import NavMenu from "../features/navigation/NavMenu";
import "../styles/pages/Homepage.scss";

function Homepage() {
  return (
    <div className="home__layout">
      <div className="nav__container">
        <NavMenu />
      </div>

      <Hero />
    </div>
  );
}

export default Homepage;
