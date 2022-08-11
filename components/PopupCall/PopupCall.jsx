import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./PopupCall.module.css";

const PopupCall = ({ isOpenPopup, setIsOpenPopup }) => {
    return (
        <>
            <div
                className={styles.layout}
                onClick={() => setIsOpenPopup(false)}
            ></div>
            <div className={styles.form__position}>
                <form className={styles.order__form}>
                    <div
                        className={styles.form__cancel}
                        onClick={() => setIsOpenPopup(false)}
                    >
                        <img src="/images/cancel.png" alt="" />
                    </div>
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
        </>
    );
};

export default PopupCall;
