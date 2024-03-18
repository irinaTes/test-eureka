import React from 'react';
import Card from '../../Elements/Card';
import Layout from '../Layout';
import styles from './ContactWrapper.module.css'
import ContactForm from '../ContactForm';
import DescriptionCard from '../../Elements/DescriptionCard';
// this oane should be a page
const ContactWrapper = () => {
    const descriptionCardText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.contactWrapper}>
                    <div className={styles.actionSide}>
                        <div className={styles.cardWrapper}>
                            <Card title="RESEARCH & DEVELOPMENT" iconSrc='src/assets/bulb.svg' />
                            <Card title="COMMERCIAL CONFIGURATORS" iconSrc='src/assets/desktop-cogs.svg' />
                        </div>
                        <ContactForm />
                    </div>
                    <div className={styles.descriptionSide}>
                        <DescriptionCard text={descriptionCardText} imageSrc='src/assets/layout-girl.png' />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactWrapper;