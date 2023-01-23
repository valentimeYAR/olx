import styles from './main.module.css'
import Category from './SubComponents/Category'

const Main = props =>{
    let catElements = props.state.map(el => <Category image={el.image} text={el.text}/>)
    return(
        <div className={styles.content}>
            <img src="/images/Main/banner.png" alt="" className={styles.banner} />
             <div className={styles.categories}>
                {catElements}
             </div>
        </div>
    )
}
export default Main