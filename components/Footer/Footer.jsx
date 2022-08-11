import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__links_columns}>
                    <div className={styles.footer__links_column}>
                        <h6 className={styles.footer__links_title}>Сайт</h6>
                        <p>Проекты</p>
                        <p>Наши работы</p>
                        <p>Услуги</p>
                        <p>Блог</p>
                        <p>Контакты</p>
                    </div>
                    <div className={styles.footer__links_column}>
                        <h6 className={styles.footer__links_title}>
                            Наши услуги
                        </h6>
                        <p>Монтаж каминов</p>
                        <p>Производство облицовок</p>
                        <p>Установка дымходов</p>
                        <p>Проектирование</p>
                        <p>Визуализация</p>
                    </div>
                    <div className={styles.footer__links_column}>
                        <h6 className={styles.footer__links_title}>Магазин </h6>
                        <p>Камины</p>
                        <p>Барбекю</p>
                        <p>Биокамины</p>
                        <p>Печи для бани</p>
                        <p>Котлы</p>
                        <p>Дымоходы</p>
                    </div>
                    <div className={styles.footer__links_column}>
                        <h6 className={styles.footer__links_title}>Камины</h6>
                        <p>Монтаж каминов</p>
                        <p>Производство облицовок</p>
                        <p>Установка дымходов</p>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <div className={styles.footer__left}>
                        <img src="/images/footer-logo.png" alt="" />
                        <p className={styles.footer__left_text}>
                            Производство и монтаж индивидуальных <br /> каминов
                            в свердловской области
                        </p>
                    </div>
                    <div className={styles.footer__right}>
                        <p className={styles.footer__right_tel}>
                            8 800 635 35 35
                        </p>
                        <p className={styles.footer__right_call}>
                            Заказать звонок
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
