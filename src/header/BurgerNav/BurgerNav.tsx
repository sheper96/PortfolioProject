import React, {useState} from 'react';
import styles from './BurgerNav.module.scss'
import {Link} from "react-scroll";

function BurgerNav() {

    const [isOpen,setIsOpen] = useState(false)

   const btnHandler = ()=>{
        setIsOpen(!isOpen)
    }

    return (
            <div className={styles.burgerNav}>
                <div className={isOpen ? ` ${styles.burgerNavItems} ${styles.show}` : `${styles.burgerNavItems}`}  >
                <Link activeClass={styles.active} to="main" spy={true} smooth={true} offset={50} duration={500} >
                    Main
                </Link>
                <Link activeClass={styles.active} to="skills" spy={true} smooth={true} offset={-100} duration={500} >
                    Skills
                </Link>
                <Link activeClass={styles.active} to="projects" spy={true} smooth={true} offset={-100} duration={500} >
                    Projects
                </Link>
                <Link activeClass={styles.active} to="contacts" spy={true} smooth={true} offset={50} duration={500} >
                    Contacts
                </Link>
                </div>
                <div className={isOpen ? ` ${styles.brgBtn} ${styles.isActive}` : `${styles.brgBtn}`} onClick={btnHandler}>
                    <div className={styles.bar}></div>
                </div>
            </div>
    );
}

export default BurgerNav;
