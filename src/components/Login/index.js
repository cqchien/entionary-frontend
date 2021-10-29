import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { Visibility, VisibilityOff, Loop } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routePath";
import TextFieldCustom from "../Custom/TextField";
import { formStyle } from "../globalStyle";

const useStyle = makeStyles(formStyle);

const LoginForm = ({ handleLogin, validationSchema, loading, children }) => {
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
    <form
      className={`${classes.root} flex-col`}
      autoComplete="off"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Log In</h1>
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
            autoFocus: true,
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

      <Link className={classes.forgetPassword} to={ROUTES.FORGET_PASSWORD}>
        Forget Password ?
      </Link>

      <Button
        className="_btn _btn-primary"
        type="submit"
        size="large"
        disabled={loading}
        //Element placed after the children.
        endIcon={loading && <Loop className="ani-spin" />}
      >
        Sign In
      </Button>

      <div className="or-option w-100 t-center">OR</div>
      {children}
    </form>
  );
};

export default LoginForm;
