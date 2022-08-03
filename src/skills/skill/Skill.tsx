import React from 'react';
import styles from "./Skill.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";


type SkillsPropsType = {
    skill: string
    description: string
    icon:IconProp
}


function Skills(props: SkillsPropsType) {
    return (
        <div className={styles.skill}>
            <div className={styles.iconBlock}>
                <FontAwesomeIcon className={styles.icon} icon={props.icon}/>
            </div>
            <div className={styles.skillTitle}>
                <h2>{props.skill}</h2>
            </div>
            <div className={styles.skillDescription}>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

export default Skills;
