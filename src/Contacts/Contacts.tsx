import React from 'react';
import styleContainer from "../common/styles/Container.module.css"
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <div className={styles.title}><h1>CONTACTS</h1></div>
                <div className={styles.contactsInfo}>
                        <form className={styles.inputValue}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" ></textarea>
                            <button type="submit" className={styles.submitBtn}>Send</button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
