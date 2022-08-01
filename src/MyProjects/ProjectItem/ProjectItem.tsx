import React from 'react';
import styles from "./ProjectItem.module.css"


type ProjectItemPropsType = {
    projectName: string
    projectDescription: string
}

function ProjectItem(props: ProjectItemPropsType) {


    return (
        <div className={styles.projects}>



            <div className={styles.projectItemBlock} >
                <button>Watch</button>
            </div>
            <div className={styles.description}>
            <div>{props.projectName}</div>
            <div>{props.projectDescription}</div>
            </div>

        </div>
    );
}

export default ProjectItem;
