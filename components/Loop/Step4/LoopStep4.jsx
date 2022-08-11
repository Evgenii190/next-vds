import classNames from "classnames";
import React from "react";
import styles from "./LoopStep4.module.css";

const LoopStep1 = () => {
    return (
        <>
            <h5 className={styles.loop__subtitle}>
                Изготовление облицовок <br /> камина на собственном <br />
                производстве
            </h5>
            <ul className={styles.loop__list}>
                <li className={styles.loop__list_item}>
                    Технологическая линия с итальянскими станками
                </li>
                <li className={styles.loop__list_item}>
                    Собственные производственные площади
                </li>
                <li className={styles.loop__list_item}>
                    Мастера с опытом работы от 10 лет
                </li>
                <li className={styles.loop__list_item}>
                    Изготовление в срок от 2 рабочих дней
                </li>
            </ul>
            <p className={styles.loop__more}>
                    Смотреть Материалы облицовок камина
                </p>
        </>
    );
};

export default LoopStep1;
