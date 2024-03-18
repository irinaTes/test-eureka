import React from 'react';
import styles from "./Card.module.css"

const Card = ({title, iconSrc}) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.title}>
                <span>{ title }</span>
            </div>
            <div className={styles.iconWrapper}>
                <img src={iconSrc} alt={iconSrc} />
            </div>
        </div>
    );
};

export default Card;