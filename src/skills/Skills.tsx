import React from 'react';
import styles from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {faCss3, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {Fade} from "react-awesome-reveal";


function Skills() {
    return (
        <div id='skills' className={styles.skillBlock}>
            <div className={styleContainer.container}>
                <Fade delay={100} duration={1500} direction={'down'} triggerOnce>
                <Title text={'Skills'}/>
                </Fade>
                <div className={styles.skills}>
                    <Fade delay={100} duration={1500} triggerOnce>
                    <Skill skill={"JS"} description={"JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at"} icon={faJs}/>
                    <Skill skill={"CSS"} description={"CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language."}
                           icon={faCss3}/>
                    <Skill skill={"REACT"} description={"The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript."}
                           icon={faReact}/>
                    </Fade>

                </div>
            </div>
        </div>
    );
}

export default Skills;


