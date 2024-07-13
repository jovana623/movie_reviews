import { useForm } from "react-hook-form";
import "../../styles/components/DirectorForm.scss";
import useCreateDirector from "./useCreateDirector";

function DirectorForm() {
  const { createDirector, isLoading } = useCreateDirector();
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("nationality", data.nationality);
    formData.append("birth_date", data.birth_date);
    createDirector(formData);
    reset();
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="actor_form">
      <div className="director_form-input">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="director_form-field"
          {...register("name")}
        />
      </div>
      <div className="director_form-input">
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          id="nationality"
          className="director_form-field"
          {...register("nationality")}
        />
      </div>
      <div className="director_form-input">
        <label htmlFor="birth_date">Birth date</label>
        <input
          type="date"
          id="birth_date"
          className="director_form-field"
          {...register("birth_date")}
        />
      </div>
      <button type="submit" className="actor_form-submit">
        Add director
      </button>
    </form>
  );
}

export default DirectorForm;
