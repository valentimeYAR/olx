import styles from './category.module.css'


const Category = props => {
    return (
        <div className={styles.cat}>
            <img src={props.image} alt="" />
            <p>{props.text}</p>
        </div>
    )
}
export default Category