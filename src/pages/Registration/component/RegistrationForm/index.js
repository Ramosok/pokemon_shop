import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

import { Form } from "../../../../commonComponents/form/shared/Form";

import { ConfigurationFormRegistration } from "../../continer/ConfigurationFormRegistration";

import { Error } from "../../Error";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import { initialValues, RegistrationSchema } from "../../config";

import { SIGN_UP_REQUEST } from "../../actions";

import { authLoginSelector, authRegistrationSelector } from "../../selectors";

import styles from "./pageForm.module.scss";

export const RegistrationFrom = memo(() => {
  const dispatch = useDispatch();
  const { errors } = useSelector(authRegistrationSelector);
  const { isAuth } = useSelector(authLoginSelector);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(SIGN_UP_REQUEST(values));
    resetForm();
  };

  return (
    <div className={styles.wrapper}>
      {isAuth && <Navigate to={ROUTE_NAMES.PRODUCTS} replace={true} />}
      <div className={styles.container}>
        <h1>Registration</h1>
        <Form
          field={ConfigurationFormRegistration}
          validationSchema={RegistrationSchema}
          initialValues={initialValues}
          onSubmitCallback={(values, { resetForm }) =>
            handleSubmit(values, { resetForm })
          }
        />
        {errors.map((error) => (
          <Error key={error} error={error} />
        ))}
      </div>
    </div>
  );
});
