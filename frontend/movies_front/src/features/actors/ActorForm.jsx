import "../../styles/components/ActorForm.scss";
import { useForm } from "react-hook-form";
import { useCreateActor } from "./useCreateActor";

function ActorForm() {
  const { createActor, isLoading } = useCreateActor();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("nationality", data.nationality);
    formData.append("birth_date", data.birth_date);

    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createActor(formData);
    reset();
  }

  function onError() {
    console.log(errors);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="actor_form">
      <div className="actor_form-input">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="actor_form-field"
          {...register("name")}
        />
      </div>
      <div className="actor_form-input">
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          id="nationality"
          className="actor_form-field"
          {...register("nationality")}
        />
      </div>
      <div className="actor_form-input">
        <label htmlFor="birth_date">Birth date</label>
        <input
          type="date"
          id="birth_date"
          className="actor_form-field"
          {...register("birth_date")}
        />
      </div>
      <div className="actor_form-input">
        <label htmlFor="image">Actor image</label>
        <input type="file" id="image" {...register("image")} />
      </div>
      <button type="submit" className="actor_form-submit">
        Add actor
      </button>
    </form>
  );
}

export default ActorForm;
