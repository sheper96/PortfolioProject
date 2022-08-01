import React from 'react';
import styles from "./Skill.module.css"


type SkillsPropsType = {
    skill: string
    description: string
}


function Skills(props: SkillsPropsType) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>1</div>
            <div>
                <h1>{props.skill}</h1>
            </div>
            <div>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

export default Skills;
