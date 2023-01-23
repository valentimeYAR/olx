import styles from './main.module.css'
import Category from './SubComponents/Category/Category'
import About from './SubComponents/About/About'
import Shop from './SubComponents/Shop/Shop'
import Button from './button'
const Main = props =>{
    let catElements = props.state.map(el => <Category image={el.image} text={el.text}/>)
    let shopElements = props.shops.map(el => <Shop image={el.image} title={el.title} ads={el.ads}/>)
    return(
        <div className={styles.content}>
            <img src="/images/Main/banner.png" alt="" className={styles.banner} />
             <div className={styles.categories}>
                {catElements}
             </div>
            <About />
            <img src="images/Main/banner2.jpg" alt="" className={styles.banner2} />
            <h2 className={styles.title__main}>Магазины</h2>
            <Button text='Все Магазины' />
            <div className={styles.shops}>
                {shopElements}
            </div>
        </div>
    )
}
export default Main