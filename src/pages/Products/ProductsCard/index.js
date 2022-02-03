import styles from './productCard.module.scss'

export const ProductsCard = ({id,name,image,price}) => {
    return (
        <div className={styles.card_container} id={id}>
            <div className={styles.card_img}><img src={image} alt=""/></div>
            <div className={styles.card_name}><p>Name - {name}</p></div>
            <div className={styles.card_price}><p>Price - {price}$</p></div>
            <button>Add Cart</button>
        </div>
    );
};

