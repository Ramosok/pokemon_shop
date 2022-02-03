import * as Yup from 'yup';

export const initialValuesLogin = {
    email: "",
    password: "",
};

const maxLengthPassword = 2;

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
        .min(maxLengthPassword, 'Too Short!')
        .matches(/[a-zA-Z0-9]/, 'Password can upper and lower case!'),

});
