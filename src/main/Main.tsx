import React from 'react';
import styles from "./Main.module.scss"
import {Particle} from "./Particles/Particles";
import { Fade } from "react-awesome-reveal";
import Typed from 'react-typed';

function Main() {
    return (
        <div id='main' className={styles.mainBlock}>
            <Particle/>
            <div className={styles.container}>
                <Fade delay={100} duration={1500} triggerOnce>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <span>I am Valery <span>Lyzhyn</span></span>
                   <Typed
                   strings={["Front-end Developer."]}
                   typeSpeed={150}
                    backSpeed={30}
                   loop
                   />
                </div>
                <div className={styles.image}>
                    <div className={styles.photo}></div>
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;


