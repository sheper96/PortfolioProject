import React from 'react';
import Nav from "./nav/Nav";
import styles from "./Header.module.css"



function Header() {
    return (
        <div className={styles.header}>
            <Nav/>
        </div>
    );
}

export default Header;
