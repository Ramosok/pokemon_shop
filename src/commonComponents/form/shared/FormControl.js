import { ErrorMessage, Field } from "formik";

import { selectData } from "../../../pages/Registration/config";

import styles from "../../../pages/Registration/continer/form.module.scss";

export const FormControl = ({
  name,
  label,
  placeholder,
  type,
  disabled,
  select,
  id,
  className,
}) => {
  return (
    <>
      {!select ? (
        <div className={className}>
          <label htmlFor={name}>{label}</label>
          <h4>
            <ErrorMessage name={name} />
          </h4>
          <Field
            disabled={disabled}
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
          />
        </div>
      ) : (
        <div className={className}>
          <label htmlFor={name}>{label}</label>
          <h4 style={{ color: "red", height: "10px", margin: "-5px 0" }}>
            <ErrorMessage name={name} />
          </h4>
          <Field id={id} disabled={disabled} as={select} name={name}>
            {selectData.map((selectData) => (
              <option key={selectData}>{selectData}</option>
            ))}
          </Field>
        </div>
      )}
    </>
  );
};
