import {Link} from "react-router-dom";

import {Slider} from "../Slider";

import {ROUTE_NAMES} from "../../../routes/routeNames";

import {LoginForm} from "../../Login/component/LoginForm";

import styles from '../header.module.scss'

export const HeaderLayout = ({display, userName, onLogin, onLogOut}) => {

    return (
        <header className={styles.header}>
            <Link className={styles.logo} to={ROUTE_NAMES.HOME}/>
            <h3 className={styles.text_effect}>Choose your pokemon</h3>
            <Slider/>
            <h3 className={styles.text_effect}>And start the battle</h3>
            <div className={styles.user_action_container}>
                {!userName && <Link
                    className={styles.closing_button}
                    to={ROUTE_NAMES.REGISTRATION}
                ><span>Registration</span></Link>}
                {
                    !userName && <button
                        className={styles.closing_button}
                        onClick={onLogin}>
                        <span>{display ? 'Exit' : 'Login'}</span>
                    </button>
                }
                {
                    display && <LoginForm/>
                }
                {
                    userName && <button
                        className={styles.closing_button}
                        onClick={onLogOut}>
                        <span>LogOut</span>
                    </button>
                }
                {userName && <h3 className={styles.user_name}>Hi {userName}</h3>}
            </div>
            <div>Cart</div>
        </header>
    );
};

