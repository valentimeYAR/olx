import styles from './header.module.css'
import HeaderTop from './SubComponents/HeaderTop'
import HeaderBottom from './SubComponents/HeaderBottom'

const Header = props =>{
    return(
        <div className={styles.content}>
            <HeaderTop />
            <HeaderBottom />
        </div>
    )
}


export default Header