import React, { useState } from 'react';
import styles from './ContactForm.module.css'
import InputField from '../../Elements/Input';
import Button from '../../Elements/Button';

const ContactForm = () => {
    const [inputValue, setInputValue] = useState({ email: "", phoneNumber: "", name: "" });
    const { email, phoneNumber, name } = inputValue;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(inputValue);
    };
    return (
        <form className={styles.contactForm}>
            <InputField
                type="text"
                value={email}
                label="Email"
                name="email"
                onChange={handleChange}
            />
            <InputField
                type="text"
                value={phoneNumber}
                label="Phone number"
                name="phoneNumber"
                onChange={handleChange}
            />
            <InputField
                type="text"
                value={name}
                label="Your name"
                name="name"
                onChange={handleChange}
            />
            <Button type='submit' className="primary" label="SEND"/>
        </form>
    );
};

export default ContactForm;