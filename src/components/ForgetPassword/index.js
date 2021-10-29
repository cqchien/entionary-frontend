import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { Loop, Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextFieldCustom from "../Custom/TextField";
import { formStyle } from "../globalStyle";

const useStyle = makeStyles(formStyle);

const ForgetPasswordForm = ({
  validationSchema,
  loading,
  handleForgetPassword,
  loadingSendCode,
  handleSendCode,
}) => {
  const classes = useStyle();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isVisiblePass, changeVisiblePass] = useState(false);

  return (
    <form
      className={`${classes.root} flex-col`}
      onSubmit={handleSubmit(handleForgetPassword)}
    >
      <h1 className={`${classes.title} t-center`}>Forget Password</h1>

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
        <div className="d-flex">
          <TextFieldCustom
            label="Verify Code"
            size="small"
            placeholder="Input Verify Code"
            error={Boolean(errors.codeToVerify)}
            disabled={loading}
            inputProps={{
              ...register("codeToVerify"),
            }}
            helperText={errors.codeToVerify?.message}
          />
          <Button
            className="_btn _btn-stand ml-10"
            disabled={loadingSendCode}
            endIcon={loadingSendCode && <Loop className="ani-spin" />}
            onClick={() => {
              const email = getValues("email");
              handleSendCode({ email });
            }}
          >
            Send Code
          </Button>
        </div>
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

      <div className="flex-col">
        <TextFieldCustom
          label="Confirm Password"
          size="small"
          placeholder="Input Password To Confirm"
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword?.message}
          disabled={loading}
          inputProps={{
            ...register("confirmPassword"),
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
        Change Password
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
