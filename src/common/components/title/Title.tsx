import React from 'react';
import styles from "./Title.module.scss"

type TitlePropsType = {
    text:string
}


function Title(props:TitlePropsType) {
    return (
        <div className={styles.title}>
            <h2>{props.text}</h2>
       </div>
    );
}

export default Title;
