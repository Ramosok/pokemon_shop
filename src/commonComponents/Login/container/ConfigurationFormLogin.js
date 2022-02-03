import {FormControl} from "../../form/shared/FormControl";

import {v4 as uuid} from "uuid";


export const ConfigurationFormLogin = () => {
    return (
        <>
            <FormControl
                //className={styles.flex}
                id={uuid()}
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
            />

            <FormControl
                //className={styles.flex}
                id={uuid()}
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
            />
            <button type='submit'>Enter</button>
        </>
    )
}