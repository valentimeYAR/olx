import styles from './shop.module.css'


const Shop = props => {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <img src={props.image} alt="" className={styles.logo} />
                <img src="images/Main/Shops/stars.svg" alt="" className={styles.stars} />
            </div>
            <div className={styles.right}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.ads}>{props.ads}</p>
                <p className={styles.more}>Подробнее</p>
            </div>
        </div>
    )
}

export default Shop