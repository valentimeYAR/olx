import styles from './subComponent2.module.css'


const HeaderBottom = props => {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <h1 className={styles.logo}>VamBeri</h1>
            </div>
            <div className={styles.center}>
                <textarea name="Find" className={styles.find} placeholder="Поиск по названиям" />
                <p className={`${styles.find__button} ${styles.find__button__categories}`}>Категории</p>
                <p className={`${styles.find__button} ${styles.find__button__find}`}>Поиск</p>
            </div>
            <div className={styles.right}>
                <p className={styles.create__ad}>Создать объявление</p>
            </div>
        </div>
    )
}


export default HeaderBottom