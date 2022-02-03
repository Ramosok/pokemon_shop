import {useDispatch, useSelector} from "react-redux";
import {Form} from "../../../../commonComponents/form/shared/Form";
import {ConfigurationFormRegistration} from "../../continer/ConfigurationFormRegistration";
import {Error} from "../../Error";

import {initialValues, RegistrationSchema} from "../../config";
import {SIGN_UP_REQUEST} from "../../actions";
import {authRegistrationSelector} from "../../selectors";

import styles from './pageForm.module.scss'

export const RegistrationFrom = () => {
    const dispatch = useDispatch();
    const {isReg, errors} = useSelector(authRegistrationSelector);

    const handleSubmit = (values, {resetForm}) => {
        console.log(values.password)
        dispatch(SIGN_UP_REQUEST(values))
        resetForm()
    }

    if (isReg) {
        console.log('SIGN_UP_SUCCESS')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Registration</h1>
                <Form
                    field={ConfigurationFormRegistration}
                    validationSchema={RegistrationSchema}
                    initialValues={initialValues}
                    onSubmitCallback={(values, {resetForm}) => handleSubmit(values, {resetForm})}
                />
                {errors.map(error => <Error key={error} error={error}/>)}
            </div>
        </div>
    );
};

