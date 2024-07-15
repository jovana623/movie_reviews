import { NavLink, Outlet } from "react-router-dom";
import "../styles/pages/LoginRegisterPage.scss";

function LoginRegisterPage() {
  return (
    <div className="page">
      <div className="page_form">
        <div className="page_form-buttons">
          <NavLink to="/registration/login" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/registration/register" activeClassName="active">
            SignUp
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default LoginRegisterPage;
