import React from 'react';
import styles from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"


function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I'm Valery Lyzhyn</h1>
                    <h3>Front-end Developer</h3>
                </div>
                <div className={styles.photo}>1</div>
                
            </div>
        </div>
    );
}

export default Main;
