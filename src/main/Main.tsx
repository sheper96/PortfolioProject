import React from 'react';
import styles from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"



function Main() {

    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span className={styles.greeting}>Hi there</span>
                    <h1 className={styles.nameTitle}>I'm Valery Lyzhyn</h1>
                    <h3 className={styles.devTitle}>Front-end Developer</h3>
                </div>
                <div className={styles.photo}></div>
                
            </div>
        </div>
    );
}

export default Main;
