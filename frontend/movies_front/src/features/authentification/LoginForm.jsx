import "../../styles/components/RegistrationForm.scss";
import { useLoginUser } from "./useLoginUser";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { loginUser, isLoading } = useLoginUser();
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    const formData = {
      email: data.email,
      password: data.password,
    };
    loginUser(formData);
    reset();
  }

  if (isLoading) return <div>Loading...</div>;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration_form">
      <input
        type="text"
        id="username"
        className="registration_form-input"
        placeholder="Email address"
        {...register("email")}
      />
      <input
        type="password"
        id="password"
        className="registration_form-input"
        placeholder="Password"
        {...register("password")}
      />
      <button className="registration_form-submit">Login</button>
    </form>
  );
}

export default LoginForm;
