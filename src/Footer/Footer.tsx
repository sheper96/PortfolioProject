import React from 'react';
import styleContainer from "../common/styles/Container.module.css"
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styleContainer.container}>
                <div className={styles.footer}>
                    <h1>Lyzhyn Valery</h1>
                    <div className={styles.socialNetworkPanel}>
                        <div className={styles.socialNetwork}>1</div>
                        <div className={styles.socialNetwork}>2</div>
                        <div className={styles.socialNetwork}>3</div>
                        <div className={styles.socialNetwork}>4</div>

                    </div>
                    <span>All rights reserved</span>
                </div>


            </div>
        </div>
    );
}

export default Footer;
