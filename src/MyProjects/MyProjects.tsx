import React from 'react';
import styles from "./MyProjects.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import ProjectItem from "./ProjectItem/ProjectItem";
import Title from "../common/components/title/Title";
import socialImage from "../common/assets/image/social.png"
import todolistImage from "../common/assets/image/todolist.png"




function MyProjects() {

    const social={
        backgroundImage : `url(${socialImage})`
    }
    const todolist={
        backgroundImage : `url(${todolistImage})`
    }

    return (
        <div className={styles.myProjectBlock}>

            <div className={` ${styleContainer.container}  ${styles.myProjectContainer}`}>
                <Title text={'My Projects'}/>
            <div className={styles.projects}>
                <ProjectItem style={social} projectTitle={'Todo List'} projectDescription={'dfjkgdsbgk dfsadfffbg kdfbgkdfj sfsdf sa dfngjdngdfk jgndsf'}/>
                <ProjectItem style={todolist} projectTitle={'Social Network'} projectDescription={'dfjkgdsbgk dfsadfffbg kdfbg  sdf sdfsdffsdddddddd     ffffffffsdfsdf sdf sdfdsf sdfsdfdsfsdfsdsdfsdfsd fsdfsdf sdfsd fsdf sdfsdfsdfds        dsfs kdfj sfsdf                   dsdadsfd sa dfngjdngdfk jgndsf'}/>
            </div>
        </div>
        </div>
    );
}

export default MyProjects;
