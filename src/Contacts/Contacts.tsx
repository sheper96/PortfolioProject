import React from 'react';
import styleContainer from "../common/styles/Container.module.scss"
import styles from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

function Contacts() {
    return (
        <div id='contacts' className={styles.contactsBlock}>
            <div className={styleContainer.container}>
                <Fade delay={100} duration={1500} direction={'down'} triggerOnce>
                    <div >
                        <Title text={"Contacts"}/>
                    </div>
                </Fade>
                <Fade delay={100} duration={1500} triggerOnce>
                <div className={styles.form}>
                    <form className={styles.contactsField}>
                        <input type="text" className={styles.formArea} placeholder={"Name"}/>
                        <input type="text" className={styles.formArea} placeholder={"e-mail"}/>
                        <textarea name="" id="" className={styles.messageArea} placeholder={"Message"}/>
                        <div className={styles.btnSection}>
                        <button className={styles.formBtn} type="submit">Send</button>
                        </div>
                    </form>
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
