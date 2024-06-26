import "../../styles/components/HeroDetails.scss";
import HeroButton from "./HeroButton";
import HeroGenres from "./HeroGenres";

function HeroDetails() {
  return (
    <div className="hero__details">
      <h1 className="hero__details--title">Avengers:Infinity War</h1>
      <div className="hero__details--genre">
        <HeroGenres genre="Action" />
        <HeroGenres genre="Sci-fi" />
        <HeroGenres genre="Adventure" />
      </div>
      <HeroButton />
    </div>
  );
}

export default HeroDetails;
