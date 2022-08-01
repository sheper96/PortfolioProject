import React from 'react';
import styles from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";




function Skills() {
    return (
        <div className={styles.skillBlock}>

            <div className={` ${styleContainer.container}  ${styles.skillContainer}`}>
        <div className={styles.title}>
            <h1>SKILLS</h1>
        </div>
            <div className={styles.skills}>
                <Skill skill={"JS"} description={"sdgljdflsfngkfdhgkldfgldfkhgdskflg"}/>
                <Skill skill={"CSS"} description={"sdgljdflsfngkfdhgkldfg xcvcxvcxbx cxvcxvgldfkhgdskflg"}/>
                <Skill skill={"REACT"} description={"sdgljdflsfngkfdfsdffdsfasdhgkldfgldfkhgdskflg"}/>
            </div>
        </div>
        </div>
    );
}

export default Skills;
