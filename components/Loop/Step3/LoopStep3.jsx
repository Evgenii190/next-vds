import classNames from "classnames";
import React from "react";
import styles from "./LoopStep3.module.css";

const LoopStep1 = () => {
    return (
        <>
            <h5 className={styles.loop__subtitle}>
                Инженер с дизайнером <br /> подготовят детальный чертёж <br /> и
                создадут 3D визуализацию <br /> вашего камина
            </h5>
            <div className={styles.loop__info_row}>
                <div className={styles.loop__info}>
                    <p className={styles.loop__info_title}>
                        Создадим объемные 3D <br /> визуализации на выбор
                    </p>
                    <p className={styles.loop__info_subtitle}>
                        РАЗРАБОТКА ВИЗУАЛИЗАЦИИ
                    </p>
                </div>
                <div className={styles.loop__info_img}>
                    <div>
                        <img
                            className={styles.loop__img}
                            src="/images/loop3-img1.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className={styles.loop__img__pos}
                            src="/images/loop3-img2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoopStep1;
