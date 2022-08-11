import classNames from "classnames";
import React from "react";
import styles from "./LoopStep2.module.css";

const LoopStep1 = () => {
    return (
        <>
            <h5 className={styles.loop__subtitle}>
                Выезд специалиста на объект. <br />
                Изучение помещения и места <br /> установки камина
            </h5>
            <ul className={styles.loop__list}>
                <li className={styles.loop__list_item}>
                    Специалист снимет замеры для составления эскизного проекта
                </li>
                <li className={styles.loop__list_item}>
                    Предлагает наиболее безопасные варианты <br /> монтажа
                    вашего камина
                </li>
                <li className={styles.loop__list_item}>
                    Составление сметы проекта и обозначение <br /> сроков
                    выполнения работ
                </li>
            </ul>
        </>
    );
};

export default LoopStep1;
