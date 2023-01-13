import React from 'react';
import styles from "./MyProjects.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import ProjectItem from "./ProjectItem/ProjectItem";
import Title from "../common/components/title/Title";
import socialImage from "../common/assets/image/social.png"
import todolistImage from "../common/assets/image/todolist.png"
import {Fade} from "react-awesome-reveal";


function MyProjects() {

    const social = {
        backgroundImage: `url(${socialImage})`
    }
    return (
        <div id='projects' className={styles.myProjectBlock}>
            <div className={styleContainer.container}>
                <Fade delay={100} duration={1500} direction={'down'} triggerOnce>
                    <Title text={'My Projects'}/>
                </Fade>
                <div className={styles.projects}>
                    <Fade delay={100} duration={1500} triggerOnce>
                        <ProjectItem style={social} projectTitle={'Todo List'}
                                     projectDescription={'The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
