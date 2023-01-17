import styles from './Button.module.scss'

type ButtonPropsType = {
    text:string
    link:string
}

export function Button(props:ButtonPropsType){
    return(
        <a href={props.link} className={styles.btn}>{props.text}</a>
    );
}