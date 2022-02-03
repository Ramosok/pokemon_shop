import {HeaderManagerContainer} from "../Header/containers/HederManagerContainer";

import {Footer} from "../Footer";
import  styles from './layout.module.scss'

export const Layout = ({children}) => {
    return (
        <>
            <HeaderManagerContainer/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </>
    );
};

