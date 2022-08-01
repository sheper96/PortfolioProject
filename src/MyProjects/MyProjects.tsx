import React from 'react';
import styles from "./MyProjects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import ProjectItem from "./ProjectItem/ProjectItem";




function MyProjects() {
    return (
        <div className={styles.myProjectBlock}>

            <div className={` ${styleContainer.container}  ${styles.myProjectContainer}`}>
        <div className={styles.title}>
            <h1>MY PROJECTS</h1>
        </div>
            <div className={styles.projects}>
                <ProjectItem projectName={'TodoList'} projectDescription={'dfjkgdsb  kdfbg     kdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfj                         kdfjkdfbgkdfj                                           kdfb    kdfbgkdfjkdfbgkdfjkdfbgkdfjg   kdfbgkdfjkdfbgkdfjkdfbgkdfjk kdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdf jkdfbgkd fjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjkdfbgkdfjdfjkdfbgkdfjkdfbgkdfj kdfbgkdfj kdfjkdfbgkdfjkdfbgkkdfbgkdfjdkdfbgkdfjfkdfbgkdfjjkdfbkdkdfbgkdfjfbgkdfbgkdfjkdfjgkdfbgkdkdfbgkdfjfjkdfjkdfbgkdfjkdfbgkdfjg bdfkjgh sgrgkjsdfngjdn gdfkjgn dsf'}/>
                <ProjectItem projectName={'Social Network'} projectDescription={'dfjkgdsbgk dfsadfffbg kdfbgkdfj sfsdf sa dfngjdngdfk jgndsf'}/>
            </div>
        </div>
        </div>
    );
}

export default MyProjects;
