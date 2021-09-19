import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextFieldCustom from "../Custom/textField";
import formStyle from "../globalStyle";
import LoopIcon from "@material-ui/icons/Loop";

const useStyle = makeStyles(formStyle);

const Login = ({ handleLogin, validationSchema, loading, children }) => {
  const {
    handleSubmit,
    register,
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

  const classes = useStyle();
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Log In</h1>
      </div>
      <div>
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
          error={Boolean(errors.me.password)}
          helperText={errors.password?.message}
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
        endIcon={loading && <LoopIcon className="ani-spin" />}
      >
        Sign In
      </Button>

      <div className="or_option w-100 t-center">{children}</div>
    </form>
  );
};

export default Login;
