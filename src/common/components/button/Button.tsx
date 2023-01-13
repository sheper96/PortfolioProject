import styles from './Button.module.scss'

type ButtonPropsType = {
    text:string
}

export function Button(props:ButtonPropsType){
    return(
        <a href={""} className={styles.btn}>{props.text}</a>
    );
}