import React from 'react';
import styleContainer from "../common/styles/Container.module.scss"
import styles from './Footer.module.scss'
import Icon from "./Icon/Icon";
import {faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styleContainer.container}>
                <div className={styles.footer}>
                   <h1>Valery Lyzhyn</h1>
                </div>
                <div className={styles.socialNetworkPanel}>
                    <a href="#"> <Icon icon={faFacebook}/></a>
                    <a href="#"> <Icon icon={faLinkedin}/></a>
                    <a href="#">  <Icon icon={faInstagram}/></a>
                </div>
                <span className={styles.copyright}>All rights reserved ©</span>
            </div>
        </div>
    );
}

export default Footer;
