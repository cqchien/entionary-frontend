import Register from "../components/register";
import './styles/login-signup.scss';

function RegisterPage() {
  return (
    <div className="pos-rel w-100vw h-100vh">
      <div className="transform-center">
        <Register />
        <div className="has-account">Do you have an account?&nbsp;</div>
      </div>
    </div>
  );
}

export default RegisterPage;
