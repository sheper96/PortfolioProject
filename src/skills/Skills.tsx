import React from 'react';
import styles from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {faCss3, faJs, faReact} from "@fortawesome/free-brands-svg-icons";




function Skills() {
    return (
        <div className={styles.skillBlock}>

            <div className={` ${styleContainer.container}  ${styles.skillContainer}`}>
                <Title text={'Skills'}/>
            <div className={styles.skills}>
                <Skill skill={"JS"} description={"sdgljdflsf ngkfdhgkldf gldfkhgdskflg"} icon={faJs}/>
                <Skill skill={"CSS"} description={"sdgljdflsfngkfdhgkldfg xcvcxvcxbx cxvcxvgldfkhgdskflg"}  icon={faCss3}/>
                <Skill skill={"REACT"} description={"sdgljdflsfngk fdfsdffdsfasdhgkldfg ldfkhg dskflg"}  icon={faReact}/>
            </div>
        </div>
        </div>
    );
}

export default Skills;
