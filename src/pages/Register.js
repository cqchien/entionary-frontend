import { Link } from "react-router-dom";
import { ROUTES } from "../constant/routePath";
import Register from "../containers/Register";
import { useCloseNav } from "../Hook/useCloseNav";
import { useTitle } from "../Hook/useTitle";
import "./styles/login-signup.scss";

function RegisterPage() {
  useTitle("Register");
  useCloseNav();

  return (
    // transform-center is style in /style/index.scss'.
    // TODO: center the component 'Register'
    // .transform-center {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // }
    <div className="w-100vw h-100vh">
      <div className="transform-center">
        <Register />
        <div className="has-account">
          You Have Account?&nbsp;
          <Link to={ROUTES.LOGIN} className="account-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
