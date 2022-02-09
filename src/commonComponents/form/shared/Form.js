import { Form as FormikForm, Formik } from "formik";

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
