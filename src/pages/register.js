import Register from "../components/Register";
import './styles/login-signup.scss';

function RegisterPage() {
  return (
    // transform-center is style in /utils/index.scss'.
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
        <div className="has-account">Do you have an account?&nbsp;</div>
      </div>
    </div>
  );
}

export default RegisterPage;
