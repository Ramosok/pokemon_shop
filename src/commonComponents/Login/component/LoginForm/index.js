import {useDispatch} from "react-redux";

import {Form} from "../../../form/shared/Form";
import {initialValuesLogin, LoginSchema} from "../../config";

import {ConfigurationFormLogin} from "../../container/ConfigurationFormLogin";

import {SIGN_IN_REQUEST} from "../../actions";

import styles from './../../login.module.scss'

export const LoginForm = () => {
    const dispatch = useDispatch();

    const onLogin = (values,{ resetForm }) => {
        dispatch(SIGN_IN_REQUEST(values))
        resetForm()
    }

    return (
        <div className={styles.login_form}>
            <Form
                field={ConfigurationFormLogin}
                validationSchema={LoginSchema}
                initialValues={initialValuesLogin}
                onSubmitCallback={(values, { resetForm }) => onLogin(values,{ resetForm })}

            />
        </div>
    );
};

