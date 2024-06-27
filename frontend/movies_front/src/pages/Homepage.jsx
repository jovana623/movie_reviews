import Hero from "../features/homepage/Hero";
import TrailerSection from "../features/homepage/TrailersSection";
import NavMenu from "../features/navigation/NavMenu";
import "../styles/pages/Homepage.scss";

function Homepage() {
  return (
    <div className="home__layout">
      <div className="nav__container">
        <NavMenu />
      </div>
      <Hero />
      <TrailerSection />
    </div>
  );
}

export default Homepage;
