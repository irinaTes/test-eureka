import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <img className={styles.logo} src="src/assets/eureka-logo-full.svg" alt="eureka-logo" />
            </div>
            <div className={styles.subHeader}>
                <span>IS OOK UW PARTNER VOOR</span>
            </div>
        </div>
    );
};

export default Header;