import styles from './about.module.css'
import Button from '../button'

const About = props => {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <h2 className={styles.title}>Площадка для интернет магазинов и доска приватных объялений</h2>
                <p className={styles.text}>
                    Он экономит время поиска необходимых специалистов, товаров, услуг. А еще это место, где проверенные магазины могут найти новых благодарных клиентов.
                </p>
                <Button text='Все объявления'/>
            </div>
            <img src='images/boxes.png' alt="" className={styles.boxes}/>
            <div className={styles.right}>
                <p className={styles.right__element}>Безопасные сделки</p>
                <p className={styles.right__element}>Онлайн-Магазины</p>
                <p className={styles.right__element}>Турбо продажи</p>
                <p className={styles.right__element}>Объявления на карте</p>
                <img src="images/like.svg" alt="" className={styles.like}/>
            </div>
            
        </div>
    )
}

export default About