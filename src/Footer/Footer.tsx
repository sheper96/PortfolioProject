import React from 'react';
import styleContainer from "../common/styles/Container.module.css"
import styles from './Footer.module.scss'
import Icon from "./Icon/Icon";
import {faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styleContainer.container}>
                <div className={styles.footer}>
                    <h1>Valery Lyzhyn</h1>
                    <div className={styles.socialNetworkPanel}>
                        <Icon icon={faFacebook}/>
                        <Icon icon={faLinkedin}/>
                        <Icon icon={faInstagram}/>
                    </div>
                    <span className={styles.copyright}>All rights reserved ©</span>
                </div>


            </div>
        </div>
    );
}

export default Footer;
