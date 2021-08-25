import { Button, makeStyles } from "@material-ui/core";
import { formStyle } from "../custom/globalStyle";
import TextFieldCustom from "../custom/textField";

// style with hook api.
// It receive the object/ function to interact with theme
// It return a hook.
const useStyle = makeStyles(formStyle);

function Register() {
  // useStyle return className list with example syntax {forgotPw: "makeStyles-forgotPw-4",..}.
  const classes = useStyle();
  return (
    <form className={`${classes.root} flex-col`} autoComplete="off">
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Create New Account</h1>
        <div className="t-center mt-5">Entionary</div>
      </div>

      <div className="flex-col">
        <TextFieldCustom label="Name" size="small" placeholder="Input Name" />
      </div>
      <div className="flex-col">
        <TextFieldCustom label="Email" size="small" placeholder="Input email" />
      </div>
      <div className="flex-col">
        <TextFieldCustom
          label="Password"
          size="small"
          placeholder="Input Password"
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
    </form>
  );
}

export default Register;
