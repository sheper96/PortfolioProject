import React from 'react';
import styleContainer from "../common/styles/Container.module.scss"
import styles from './Footer.module.scss'
import Icon from "./Icon/Icon";
import {faFacebook, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styleContainer.container}>
                <div className={styles.footer}>
                   <h1>Valery Lyzhyn</h1>
                </div>
                <div className={styles.socialNetworkPanel}>
                    <a href="https://www.facebook.com/profile.php?id=100004942955376"> <Icon icon={faFacebook}/></a>
                    <a href="https://www.linkedin.com/in/valery-lyzhyn-16739714b/"> <Icon icon={faLinkedin}/></a>
                    <a href="https://t.me/vskopsky">  <Icon icon={faTelegram}/></a>
                </div>
                <span className={styles.copyright}>All rights reserved ©</span>
            </div>
        </div>
    );
}

export default Footer;
