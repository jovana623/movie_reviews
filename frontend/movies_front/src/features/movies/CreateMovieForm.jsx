import { useForm } from "react-hook-form";
import { useCreateMovie } from "./useCreateMovie";
import { useGenres } from "../genres/useGenres.js";
import { useActors } from "../actors/useActors.js";
import { useDirectors } from "../directors/useDirectors.js";
import "../../styles/components/CreateMovieForm.scss";
import { useUpdateMovie } from "./useUpdateMovie.js";

/* eslint-disable react/prop-types */
function CreateMovieForm({ movieToUpdate = {} }) {
  const { movie, isLoading } = useCreateMovie();
  const { updateMovie, isLoading: isUpdating } = useUpdateMovie();
  const { genres, isLoading: isLoadingGenres } = useGenres();
  const { actors, isLoading: isLoadingActors } = useActors();
  const { directors, isLoading: isLoadingDirectors } = useDirectors();
  const { id: editId, ...editValues } = movieToUpdate;

  const isUpdateSession = Boolean(editId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isUpdateSession ? editValues : {} });

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("release_date", data.release_date);
    formData.append("length", data.length);
    formData.append("director_id", data.director_id);

    if (data.genres) {
      data.genres.forEach((genre) => {
        formData.append("genre_ids", genre);
      });
    }

    data.actor_ids.forEach((id) => {
      formData.append("actor_ids", id.trim());
    });

    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    if (isUpdateSession) {
      updateMovie({ movieId: editId, updatedData: formData });
    } else {
      movie(formData);
    }
    reset();
  }

  function onError() {
    console.log(errors);
  }

  if (
    isLoading ||
    isLoadingGenres ||
    isLoadingActors ||
    isLoadingDirectors ||
    isUpdating
  )
    return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="movie__form">
      <div className="movie__form-input">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title is required" })}
          className="movie__form-field"
          required
        />
        <p className="movie__form-error">{errors?.title?.message}</p>
      </div>
      <div className="movie__form-input">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          {...register("description", { required: "Description is required" })}
          className="movie__form-field"
          required
        />
        <p className="movie__form-error">{errors?.title?.message}</p>
      </div>
      <div className="movie__form-input">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          {...register("release_date", {
            required: "Release date is required",
          })}
          className="movie__form-field"
          required
        />
        <p className="movie__form-error">{errors?.title?.message}</p>
      </div>
      <div className="movie__form-input">
        <label htmlFor="length">Length(min)</label>
        <input
          type="number"
          id="length"
          {...register("length", { required: "Length is required" })}
          className="movie__form-field"
          required
        />
        <p className="movie__form-error">{errors?.title?.message}</p>
      </div>
      <div className="movie__form-input">
        <label htmlFor="genre_ids">Genres</label>
        <div className="checkbox__layout">
          {genres.map((genre) => (
            <div key={genre.id} className="movie__form-checkbox">
              <input type="checkbox" id="genre" value={genre.id} />
              <label htmlFor="genre">{genre.name}</label>
            </div>
          ))}
        </div>
        <p className="movie__form-error">{errors?.title?.message}</p>
      </div>
      <div className="movie__form-input">
        <label htmlFor="director_id">Director</label>
        <select
          className="movie__form-field"
          {...register("director_id", { required: "Director is required" })}
          required
        >
          <option>Select director</option>
          {directors.map((director) => (
            <option key={director.id} value={director.id}>
              {director.name}
            </option>
          ))}
        </select>
        <p className="movie__form-error">{errors?.title?.message}</p>
      </div>
      <div className="movie__form-input">
        <label htmlFor="actor_ids">Actors</label>
        <select
          className="movie__form-field"
          multiple={true}
          {...register("actor_ids", { required: "Actors are required" })}
          required
        >
          {actors.map((actor) => (
            <option key={actor.id} value={actor.id}>
              {actor.name}
            </option>
          ))}
        </select>
        <p className="movie__form-error">{errors?.title?.message}</p>
        <div className="movie__form-input">
          <label htmlFor="image">Poster</label>
          <input
            type="file"
            id="image"
            {...register("image", { required: "Poster image is required" })}
            required
          />
        </div>
        <p className="movie__form-error">{errors?.title?.message}</p>
      </div>
      <button type="submit" className="movie__form-submit">
        Submit
      </button>
    </form>
  );
}

export default CreateMovieForm;
