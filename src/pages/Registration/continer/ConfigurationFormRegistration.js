import {v4 as uuid} from 'uuid';
import {FormControl} from "../../../commonComponents/form/shared/FormControl";

import styles from './form.module.scss'
import {useState} from "react";

export const ConfigurationFormRegistration = () => {

    const [typePassword, setTypePassword] = useState('password');

    const handleShowPassword = () => {
        setTypePassword('text');
    }
    const handleHidePassword = () => {
        setTypePassword('password');
    }

    return (
        <>
            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="text"
                name="firstName"
                label="*First Name"
                placeholder="First Name"
            />

            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="text"
                name="lastName"
                label="*Last Name"
                placeholder="Last Name"
            />
            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="email"
                name="email"
                label="*Email"
                placeholder="Email"
            />
            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type={typePassword}
                name="password"
                label="*Password"
                placeholder="Password"
            />
            <button
                type='button'
                onMouseDown={handleShowPassword}
                onMouseUp={handleHidePassword}
            >
                show password</button>
            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="password"
                name="passwordConfirmation"
                label="*Confirm password"
                placeholder="Confirm password"
            />

            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="text"
                name="phone"
                label="*Phone"
                placeholder="phone"
            />

            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="text"
                name="address.country"
                label="Country"
                placeholder="country"
            />
            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="text"
                name="address.city"
                label="City"
                placeholder="city"
            />
            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="text"
                name="address.addressLine1"
                label="Address Line 1"
                placeholder="address line 1"
            />
            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                type="text"
                name="address.addressLine2"
                label="Address Line 2"
                placeholder="address line 2"
            />
            <FormControl
                className={styles.styles_form_registration}
                id={uuid()}
                select="select"
                name="gender"
                label="*Gender"
            />

            <button className={styles.btn} type="submit">Submit</button>
            <p className={styles.styles_form_registration}>* - Required fields to fill in</p>
        </>
    );
};

