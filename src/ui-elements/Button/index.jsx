import React from "react";
import styles from "./Button.module.css"

const Button = ({ onClick, className, type, label }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles[className]} ${styles.commonButton}`}
            type={type}
            label={label}
        >
            {label}
        </button>
    );
}

export default Button;