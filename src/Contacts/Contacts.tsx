import React, {useRef} from 'react';
import styleContainer from "../common/styles/Container.module.scss"
import styles from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';




function Contacts() {
    const sendEmail = (e:any) => {
        e.preventDefault();
        emailjs.sendForm('service_r38ybb7', 'template_ck28d7a', e.target, 'wzuxphr-hLOkzvpAM')
            .then((result:any) => {
                console.log(result.text);
            }, (error:any) => {
                console.log(error.text);
            });
        e.target.reset();
    };


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
                    <form className={styles.contactsField}  onSubmit={sendEmail}>
                        <input type="text" className={styles.formArea} name={'user_name'} placeholder={'name'}/>
                        <input type="text" className={styles.formArea} name={'user_email'} placeholder={'e-mail'}/>
                        <textarea  id="" className={styles.messageArea} name={'message'} placeholder={'message'}/>
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

/*
export const ContactUs = () => {



    return (
        <form  onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};
*/
