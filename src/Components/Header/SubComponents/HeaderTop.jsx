import styles from './subComponent.module.css'


const HeaderTop = props => {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" alt="" className={styles.flag} />
                <p className={styles.language}>UA|RU</p>
            </div>
            <div className={styles.center}>
                <p className={`${styles.center__links} ${styles.center__point}`}>Россия</p>
                <p className={styles.center__links}>Магазины</p>
                <p className={styles.center__links}>Поиск на карте</p>
                <p className={styles.center__links}>Вход|Регистрация</p>
            </div>
            <div className={styles.right}>
                <img src="images/Header/profile.svg" alt="" className={styles.right__img} />
                <img src="images/Header/delivery.svg" alt="" className={styles.right__img} />
                <img src="images/Header/backet.svg" alt="" className={styles.right__img} />
                <img src="images/Header/favorite.svg" alt="" className={styles.right__img} />
            </div>
        </div>
    )
}
// https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg
// https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg
export default HeaderTop