import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { useShowAndHidePassword } from "../../../hooks";

import { FormControl } from "../../form/shared/FormControl";

import { ROUTE_NAMES } from "../../../routes/routeNames";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import styles from "./../login.module.scss";

export const ConfigurationFormLogin = () => {
  const { typePassword, handleShowPassword, handleHidePassword } =
    useShowAndHidePassword();

  return (
    <>
      <FormControl
        id={uuid()}
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
      />
      <div className={styles.input_password_btn}>
        <FormControl
          id={uuid()}
          type={typePassword}
          name="password"
          label="Password"
          placeholder="Password"
        />
        <RemoveRedEyeIcon
          className={styles.eye_btn}
          onMouseDown={handleShowPassword}
          onMouseUp={handleHidePassword}
        />
      </div>
      <button className={styles.login_btn} type="submit">
        Login
      </button>
      <p>
        <span className={styles.span_registration}>
          if you are not registered?
        </span>
        <Link
          className={styles.link_registration_btn}
          to={ROUTE_NAMES.REGISTRATION}
        >
          Registration
        </Link>
      </p>
    </>
  );
};
