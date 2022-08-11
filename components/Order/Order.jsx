import React from "react";
import styles from "./Order.module.css";
import classNames from "classnames";

const Order = () => {
    return (
        <div className={styles.order}>
            <img
                className={styles.order__decor}
                src="/images/panel-wood.png"
                alt=""
            />
            <div className={classNames("container", styles.order__container)}>
                <img
                    className={styles.order__decor_pen}
                    src="/images/pen.png"
                    alt=""
                />
                <img
                    className={styles.order__decor_laptop}
                    src="/images/laptop.png"
                    alt=""
                />
                <h4 className={styles.order__title}>
                    Хотите заказать камин <br /> по индивидуальному <br />
                    заказу ?
                </h4>
                <p className={styles.order__text}>
                    <span>Оставьте заявку и получите</span> бесплатный <br />
                    проект и точный расчет стоимости <br /> вашего камина.
                </p>
                <form className={styles.order__form}>
                    <h4 className={styles.order__form_title}>
                        Закажите расчет <br />
                        <span> и бесплатный проект </span> <br /> вашего камина
                    </h4>
                    <p className={styles.order__form_text}>
                        В течение 10 минут с вами свяжется наш <br />
                        специалист для уточнения деталей
                    </p>
                    <input
                        type="text"
                        placeholder="Введите ваше имя"
                        className="order__form-name"
                    />
                    <input
                        type="text"
                        placeholder="Введите ваш телефон"
                        className="order__form-tel"
                    />
                    <button className={styles.order__form_btn}>
                        Подобрать камин
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Order;
