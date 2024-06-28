import "../../styles/components/MovieCard.scss";

/* eslint-disable react/prop-types */
function MovieCard({ poster, name, genres }) {
  return (
    <div className="movie__card">
      <img
        src={poster}
        alt={`${name} poster`}
        className="movie__card--poster"
      />
      <h3>{name}</h3>
      <p>
        {genres.map((genre) => (
          <p key={genre.id}>{genre}</p>
        ))}
      </p>
    </div>
  );
}

export default MovieCard;
