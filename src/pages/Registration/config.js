import * as Yup from 'yup';

export const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    address: {
        country: "",
        city: "",
        addressLine1: "",
        addressLine2: ""
    },
    gender: "",
    password: "",
    phone: ""
};

export const selectData = [
    '',
    'male',
    'female',
];
const minLength = 2;
const maxLength = 70;

const maxLengthPassword = 1;
const minLengthPhone = 7;
const maxLengthPhone = 14;


export const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(minLength, 'Too Short!')
        .max(maxLength, 'Too Long!')
        .required('Required')
        .matches(/[a-zA-Z ]/, 'Only  latin letters!'),
    lastName: Yup.string()
        .min(minLength, 'Too Short!')
        .max(maxLength, 'Too Long!')
        .required('Required')
        .matches(/[a-zA-Z ]/, 'Only  latin letters!'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
        .min(maxLengthPassword, 'Too Short!')
        .matches(/[a-zA-Z0-9]/, 'Password can upper and lower case!'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    phone: Yup.string()
        .matches(/^[0-9]+$/, 'only numbers')
        .min(minLengthPhone, 'at least 7 digits')
        .max(maxLengthPhone, 'at least 14 digits'),
    gender: Yup.string()
        .required('Required'),
    country: Yup.string(),
    city: Yup.string(),
    addressLine1: Yup.string(),
    addressLine2: Yup.string(),
});
