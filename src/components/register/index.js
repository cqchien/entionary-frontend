import { makeStyles } from "@material-ui/core";
import { formStyle } from "../custom/globalStyle";
import TextFieldCustom from "../custom/textField";

const useStyle = makeStyles(formStyle);

function Register() {
  const classes = useStyle();
  return (
    <form className={`${classes.root} flex-col`} autoComplete="off">
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Create New Account</h1>
        <div className="t-center mt-5">Entionary</div>
      </div>

      <div className="flex-col">
        <TextFieldCustom
          label="Name"
          size="small"
          placeholder="Input Name"
        />
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
    </form>
  );
}

export default Register;
