import React from 'react';
import styleContainer from "../common/styles/Container.module.scss"
import styles from './Freelance.module.scss'
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {Link} from "react-scroll";

function Freelance() {
    return (
        <div id='freelance' className={styles.freelanceBlock}>
            <div className={styleContainer.container}>
            <Fade delay={100} duration={1500}  direction={'down'} triggerOnce>
                    <Title text={"I Am Available For Freelance"} />
                <Link className={styles.hireBtn} to="contacts" spy={true} smooth={true} offset={-100} duration={500} >
                   Hire Me
                </Link>
            </Fade>
            </div>
        </div>
    );
}

export default Freelance;
