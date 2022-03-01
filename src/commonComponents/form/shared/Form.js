import { Form as FormikForm, Formik } from "formik";

import PropTypes from "prop-types";

export const Form = ({
  field,
  initialValues,
  onSubmitCallback,
  validationSchema,
}) => {
  const FieldComponent = field;

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmitCallback}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <FormikForm noValidate>
          <FieldComponent {...formikProps} />
        </FormikForm>
      )}
    </Formik>
  );
};
Form.propTypes = {
  field: PropTypes.func,
  initialValues: PropTypes.object,
  onSubmitCallback: PropTypes.func,
  validationSchema: PropTypes.object,
};
