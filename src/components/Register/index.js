import {
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import formStyle from "../Custom/globalStyle";
import TextFieldCustom from "../Custom/textField";
import SocialNetworkLogin from "../Login/SocialNetwork";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";

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
    .min(8, "Password has at least 8 characteristic"),
});

function Register() {
  // useStyle return className list with example syntax {forgotPw: "makeStyles-forgotPw-4",..}.
  const classes = useStyle();

  // useForm return hook.
  // register, handleSubmit are function
  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through the Proxy
    // errors: 	An object with field errors to retrieve error message easily.
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Change state to view password
  const [isVisiblePass, changeVisiblePass] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className={`${classes.root} flex-col`}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Create New Account</h1>
        <div className="t-center mt-5">Entionary</div>
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Name"
          size="small"
          error={Boolean(errors.name)}
          placeholder="Input Name"
          inputProps={{
            ...register("name"),
            autoFocus: true,
          }}
          helperText={errors.name?.message}
        />
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Email"
          size="small"
          placeholder="Input email"
          error={Boolean(errors.email)}
          inputProps={{
            ...register("email"),
          }}
          helperText={errors.email?.message}
        />
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Password"
          size="small"
          placeholder="Input Password"
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          inputProps={{
            ...register("password"),
            type: isVisiblePass ? "text" : "password",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                // change visible password state based on previous state
                onClick={() => changeVisiblePass((prevState) => !prevState)}
              >
                {isVisiblePass ? (
                  <Visibility className={`${classes.icon}`} />
                ) : (
                  <VisibilityOff className={`${classes.icon}`} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <Button className="_btn _btn-primary" type="submit" size="large">
        Sign Up
      </Button>

      <div className="or_option w-100 t-center">
        <SocialNetworkLogin />
      </div>
    </form>
  );
}

export default Register;
