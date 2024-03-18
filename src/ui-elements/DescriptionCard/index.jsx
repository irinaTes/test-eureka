import React from 'react';
import styles from "./DescriptionCard.module.css"

const DescriptionCard = ({ text, imageSrc }) => {
    return (
        <div className={styles.descriptionCardWrapper}>
            <img src={imageSrc} alt={imageSrc} />
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default DescriptionCard;