import React, { useEffect } from "react";
import styles from "./Popup.module.css";
import classNames from "classnames";

const ProjectPopup = ({ setIsOpen, params, characteristics }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    return (
        <div
            onClick={(e) => {
                if (e.target.classList.contains(styles.popup)) setIsOpen(false);
            }}
            className={styles.popup}
        >
            <div className={styles.popup__inner}>
                <div
                    className={styles.popup__cancel}
                    onClick={() => setIsOpen(false)}
                >
                    <img src="../images/cancel.png" alt="" />
                </div>
                <div className={styles.popup__inner_flex}>
                    <div>
                        <h4 className={styles.popup__title}>{params.title}</h4>
                        <div className={styles.characteristics}>
                            {characteristics.map(({ option, params }) => {
                                return (
                                    <div
                                        key={option + params}
                                        className={
                                            styles.characteristics__items
                                        }
                                    >
                                        <p
                                            className={classNames(
                                                styles.characteristics__item,
                                                styles.characteristics__item__gray
                                            )}
                                        >
                                            {params}
                                        </p>
                                        <p
                                            className={
                                                styles.characteristics__item
                                            }
                                        >
                                            {option}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.description}>
                            <h4 className={styles.popup__title}>Описание</h4>
                            <p className={styles.description__text}>
                                {params.content}
                            </p>
                        </div>
                    </div>
                    <div className={styles.popup__images}>
                        <img
                            className={styles.popup__img}
                            src={`${process.env.BASE_URL}${params.photo}`}
                            alt=""
                        />
                        <img
                            className={styles.popup__img}
                            src={`${process.env.BASE_URL}${params.modelPhoto}`}
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <h5 className={styles.popup__title}>
                        Хотите такой же проект ? Оставьте заявку
                    </h5>
                    <form className={styles.popup__form}>
                        <input type="text" placeholder="Введите ваше имя" />
                        <input type="text" placeholder="Введите ваш телефон" />
                        <button>
                            <p>Заказать звонок</p>
                            <div className={styles.popup__button_arrow}>
                                <img src="/images/button-arrow.png" alt="" />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProjectPopup;
