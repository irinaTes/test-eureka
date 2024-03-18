import React  from "react";
import styles from "./InputField.module.css"

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className={styles.inputWraper}>
    {label && <label htmlFor="input-field" className={styles.inputLabel}>{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className={styles.inputField}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;