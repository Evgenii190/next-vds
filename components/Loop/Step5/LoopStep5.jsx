import classNames from "classnames";
import React from "react";
import styles from "./LoopStep5.module.css";

const LoopStep1 = () => {
    return (
        <>
            <h5 className={styles.loop__subtitle}>
                Квалифицированные мастера <br /> осуществят монтаж с соблюдением
                <br /> всех требований безопасности
            </h5>
            <ul className={styles.loop__list}>
                <li className={styles.loop__list_item}>
                    Реализуем ваш камин в точном соответствии с <br /> проектом
                    и чертежами.
                </li>
                <li className={styles.loop__list_item}>
                    Доставим материалы к вам в дом на <br /> собственном
                    транспорте
                </li>
                <li className={styles.loop__list_item}>
                    После установки камина проводится чательная уборка
                </li>
                <li className={styles.loop__list_item}>
                    После окончания работ предоставим вам <br /> руковосдтсво
                    эксплуатации каминным оборудованием <br /> и инструкцию к
                    каминной топке
                </li>
            </ul>
        </>
    );
};

export default LoopStep1;
