import React from 'react';
import styleContainer from "../common/styles/Container.module.css"
import styles from './Freelance.module.scss'
import Title from "../common/components/title/Title";

function Freelance() {
    return (
        <div className={styles.freelanceBlock}>
            <div className={`${styleContainer.container} ${styles.freelanceContainer}`}>

                    <Title text={"I Am Available For Freelancer"} />
                    <a className={styles.hireBtn}>Hire Me</a>



            </div>
        </div>
    );
}

export default Freelance;
