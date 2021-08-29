import { Button, makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import formStyle from "../Custom/globalStyle";
import TextFieldCustom from "../Custom/textField";
import SocialNetworkLogin from "../Login/SocialNetwork";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// style with hook api.
// It receive the object/ function to interact with theme
// It return a hook.
const useStyle = makeStyles(formStyle);

const schema = yup.object().shape({
  email: yup.string().trim().required("Input Email").email("Email invalid"),
  name: yup.string().trim().required("Input Name"),
  password: yup
    .string()
    .trim()
    .required("Input Password")
    .min(8, `Password has at least 8 characteristic`),
});

function Register() {
  // useStyle return className list with example syntax {forgotPw: "makeStyles-forgotPw-4",..}.
  const classes = useStyle();
  // useForm return hook.
  // register, handleSubmit are function
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  return (
    <form
      className={`${classes.root} flex-col`}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Create New Account</h1>
        <div className="t-center mt-5">Entionary</div>
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Name"
          size="small"
          placeholder="Input Name"
          inputProps={{
            name: "name",
            ...register("name"),
            required: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Email"
          size="small"
          placeholder="Input email"
          inputProps={{
            ...register("email"),
            name: "email",
            required: true,
            type: "email",
          }}
        />
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Password"
          size="small"
          placeholder="Input Password"
          inputProps={{
            ...register("password"),
            name: "password",
            required: true,
            minLength: 8,
          }}
        />
      </div>
      <Button
        className="_btn _btn-primary"
        type="submit"
        color="primary"
        size="large"
      >
        Sign Up
      </Button>

      <div className="or_option w-100 t-center">
        <SocialNetworkLogin />
      </div>
    </form>
  );
}

export default Register;
