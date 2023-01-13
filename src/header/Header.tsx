import React from 'react';
import Nav from "./Nav/Nav";
import styles from "./Header.module.scss"
import BurgerNav from "./BurgerNav/BurgerNav";



function Header() {
    return (
        <header className={styles.header}>
            <Nav/>
            <BurgerNav/>
        </header>
    );
}

export default Header;
