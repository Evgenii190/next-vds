import React from "react";
import styles from "./Contacts.module.css";
import classNames from "classnames";

const Contacts = ({ margin }) => {
    return (
        <section
            className={classNames({
                [styles.contacts]: true,
                [styles.contacts__blog]: margin,
            })}
        >
            <div className="container">
                <div className={styles.contacts__info}>
                    <h4 className={styles.contacts__title}>Контакты</h4>
                    <div className={styles.contacts__marks}>
                        <div className={styles.contacts__marks_circle}>
                            <img src="/images/mark.png" alt="" />
                        </div>
                        <div className={styles.contacts__marks_info}>
                            <p className={styles.contacts__marks_title}>
                                Адрес
                            </p>
                            <p className={styles.contacts__marks_text}>
                                г. Каменск-Уральский Свердл. обл. <br /> ул.
                                Попова 3
                            </p>
                        </div>
                    </div>
                    <div className={styles.contacts__marks}>
                        <div className={styles.contacts__marks_circle}>
                            <img src="/images/call.png" alt="" />
                        </div>
                        <div className={styles.contacts__marks_info}>
                            <p className={styles.contacts__marks_title}>
                                Телефон
                            </p>
                            <p className={styles.contacts__marks_text}>
                                8 800 2000 6000
                            </p>
                        </div>
                    </div>
                    <div className={styles.contacts__marks}>
                        <div className={styles.contacts__marks_circle}>
                            <img src="/images/email.png" alt="" />
                        </div>
                        <div className={styles.contacts__marks_info}>
                            <p className={styles.contacts__marks_title}>
                                Email
                            </p>
                            <p className={styles.contacts__marks_text}>
                                Kamin-bogatyr@mail.ru
                            </p>
                        </div>
                    </div>
                    <div className={styles.contacts__social}>
                        <div className={styles.contacts__social_circle}>
                            <img src="/images/vk.png" alt="vk" />
                        </div>
                        <div className={styles.contacts__social_circle}>
                            <img src="/images/inst.png" alt="inst" />
                        </div>
                        <div className={styles.contacts__social_circle}>
                            <img src="/images/inst.png" alt="inst" />
                        </div>
                        <p className={styles.contacts__soical_text}>
                            мы в соц.сетях
                        </p>
                    </div>
                </div>
            </div>
            <iframe
                className={styles.contacts__map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2206.5130570421516!2d61.89953001610785!3d56.42445624745633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c6d9dd9903e2c5%3A0x72a103c2111ddd68!2z0JrQsNC80LXQvdGB0Log0KHQuNGC0Lgg0JzQvtC70Ls!5e0!3m2!1sru!2sru!4v1655916197727!5m2!1sru!2sru"
            ></iframe>
        </section>
    );
};

export default Contacts;
