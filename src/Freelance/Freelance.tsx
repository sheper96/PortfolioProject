import React from 'react';
import styleContainer from "../common/styles/Container.module.css"
import styles from './Freelance.module.css'

function Freelance() {
    return (
        <div className={styles.freelanceBlock}>
            <div className={`${styleContainer.container} ${styles.freelanceContainer}`}>

                    <h1>I'm ready for freelance</h1>
                    <button>Hire Me</button>



            </div>
        </div>
    );
}

export default Freelance;
