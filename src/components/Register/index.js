import {
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { formStyle } from "../globalStyle";
import TextFieldCustom from "../Custom/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loop, Visibility, VisibilityOff } from "@material-ui/icons";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// style with hook api.
// It receive the object/ function to interact with theme
// It return a hook.
const useStyle = makeStyles(formStyle);

function RegisterForm({ validationSchema, handleRegister, loading, children }) {
  // useStyle return className list with example syntax {forgotPw: "makeStyles-forgotPw-4",..}.
  const classes = useStyle();
  // useForm return hook.
  // register, handleSubmit are function
  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through the Proxy
    // errors: 	An  object with field errors to retrieve error message easily.
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  // Reset field after submit successfully
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        password: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  // Change state to view password
  const [isVisiblePass, changeVisiblePass] = useState(false);

  return (
    <form
      className={`${classes.root} flex-col`}
      autoComplete="off"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Create New Account</h1>
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Name"
          size="small"
          error={Boolean(errors.name)}
          placeholder="Input Name"
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
          inputProps={{
            ...register("password"),
            type: isVisiblePass ? "text" : "password",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => changeVisiblePass(!isVisiblePass)}>
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
      <Button
        className="_btn _btn-primary"
        type="submit"
        size="large"
        disabled={loading}
        //Element placed after the children.
        endIcon={loading && <Loop className="ani-spin" />}
      >
        Sign Up
      </Button>

      <div className="or-option w-100 t-center">OR</div>
      {children}
    </form>
  );
}

RegisterForm.propType = {
  handleRegister: PropTypes.func,
  loading: PropTypes.bool,
};

RegisterForm.defaultProps = {
  loading: false,
  handleRegister: function () {},
};
export default RegisterForm;
