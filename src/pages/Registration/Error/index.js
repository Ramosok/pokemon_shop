import styles from './error.module.scss';

export const Error = ({error}) => {
    return (
        <p className={styles.error}>
            {error}
        </p>
    );
};

