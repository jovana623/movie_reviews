import "../../styles/components/RegistrationForm.scss";
import { useCreateUser } from "./useCreateUser";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const { createUser, isLoading } = useCreateUser();
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    const formData = {
      _token: "{{ csrf_token() }}",
      email: data.email,
      username: data.username,
      password: data.password,
    };

    console.log(formData);
    createUser(formData);
    reset();
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration_form">
      <input
        type="email"
        id="email"
        className="registration_form-input"
        placeholder="Email address"
        {...register("email")}
      />
      <input
        type="text"
        id="username"
        className="registration_form-input"
        placeholder="Username"
        {...register("username")}
      />
      <input
        type="password"
        id="password"
        className="registration_form-input"
        placeholder="Password"
        {...register("password")}
      />
      <input
        type="password"
        id="confirm_password"
        className="registration_form-input"
        placeholder="Confirm password"
        {...register("confirm_password")}
      />
      <button className="registration_form-submit">Sign Up</button>
    </form>
  );
}

export default RegisterForm;
