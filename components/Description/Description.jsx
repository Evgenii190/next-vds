import React from "react";
import styles from "./Description.module.css";

const Description = () => {
    return (
        <section className={styles.description}>
            <div className="container">
                <div className={styles.description__inner}>
                    <img
                        className={styles.descr__img}
                        src="/images/descr-person.png"
                        alt=""
                    />
                    <div className={styles.descr__info}>
                        <h5 className={styles.descr__title}>Владимир Гунько</h5>
                        <p className={styles.descr__subtitle}>
                            Директор компании ”Богатырь камин”
                        </p>
                        <p className={styles.descr__text}>
                            Lorem Ipsum - это текст-{"рыба"}, часто используемый в
                            печати и вэб-дизайне. Lorem Ipsum является
                            стандартной {"рыбой"} для текстов на латинице с начала
                            XVI века. <br /> <br /> В то время некий безымянный
                            печатник создал большую коллекцию размеров и форм
                            шрифтов, используя Lorem Ipsum для распечатки
                            образцов. Lorem Ipsum не только успешно пережил без
                            заметных изменений пять веков, но и перешагнул в
                            электронный дизайн.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
