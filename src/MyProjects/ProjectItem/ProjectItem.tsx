import React from 'react';
import styles from "./ProjectItem.module.scss"


type ProjectItemPropsType = {
    projectTitle: string
    projectDescription: string
    style:any
}

function ProjectItem(props: ProjectItemPropsType) {
    return (
        <div className={styles.projects}>
            <div style={props.style} className={styles.image} >
                <a href='#' className={styles.viewBtn}>Watch</a>
            </div>
            <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{props.projectTitle}</h3>
            <div className={styles.description}>{props.projectDescription}</div>
            </div>

        </div>
    );
}

export default ProjectItem;
