import "../../styles/components/HeroGenres.scss";

/* eslint-disable react/prop-types */
function HeroGenres({ genre }) {
  return (
    <div className="genre__container">
      <p className="genre__container--name">{genre}</p>
    </div>
  );
}

export default HeroGenres;
