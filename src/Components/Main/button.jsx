import styles from "./button.module.css"


const Button = props => {
    return (
        <div className={styles.content}>
            {props.text}
        </div>
    )
}

export default Button