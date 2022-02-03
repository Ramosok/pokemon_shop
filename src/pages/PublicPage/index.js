import {dataPage} from "./dataPage";

import styles from './PublicPage.module.scss'

export const PublicPage = () => {
    return (
        <div className={styles.container}>
            {dataPage}
        </div>
    );
};
