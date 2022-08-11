import classNames from "classnames";
import React from "react";
import styles from "./LoopStep1.module.css";

const LoopStep1 = () => {
    return (
        <>
            <h5 className={styles.loop__subtitle}>
                Менеджер уточнит <br /> первичную информацию
            </h5>
            <ul className={styles.loop__list}>
                <li className={styles.loop__list_item}>
                    Тип и площадь помещения
                </li>
                <li className={styles.loop__list_item}>
                    Тип камина, его размер и конфигурация
                </li>
                <li className={styles.loop__list_item}>
                    Размер и конфигурацию камина
                </li>
                <li className={styles.loop__list_item}>
                    Место установки камина
                </li>
                <li className={styles.loop__list_item}>
                    Материал отделки помещения
                </li>
                <li className={styles.loop__list_item}>
                    Дизайн-проект помещения (при наличии)
                </li>
                <li className={styles.loop__list_item}>Ваши пожелания</li>
            </ul>
        </>
    );
};

export default LoopStep1;
