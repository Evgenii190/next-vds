import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import classNames from "classnames";
import styles from "../../styles/services.module.css";

const Services = () => {
    return (
        <>
            <header className={styles.services__header}>
                <div className="container">
                    <div className={styles.services_header__top}>
                        <nav className={styles.services_header__top_nav}>
                            <Link href="/">
                                <a>
                                    <div className={styles.header__nav_link}>
                                        Главная
                                    </div>
                                </a>
                            </Link>
                            <Link href="/services">
                                <a>
                                    <div className={styles.header__nav_link}>
                                        Услуги
                                    </div>
                                </a>
                            </Link>
                            <Link href="/portfolio">
                                <a>
                                    <div className={styles.header__nav_link}>
                                        Наши работы
                                    </div>
                                </a>
                            </Link>
                            <a>
                                <div className={styles.header__nav_link}>
                                    Магазин
                                </div>
                            </a>
                            <Link href="/about">
                                <a>
                                    <div className={styles.header__nav_link}>
                                        О компании
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.header__nav_link}>
                                Отзывы
                            </div>
                            <Link href="/blog">
                                <a>
                                    <div className={styles.header__nav_link}>
                                        Блог
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.header__nav_link}>
                                Справка
                            </div>
                            <Link href="/contacts">
                                <a>
                                    <div className={styles.header__nav_link}>
                                        Контакты
                                    </div>
                                </a>
                            </Link>
                        </nav>
                        <div className={styles.header__top_nav__mobile}>
                            <img src="/images/menu-mobile.png" alt="" />
                        </div>

                        <div className={styles.header__top_mail}>
                            bogatyr@mail.ru
                        </div>
                    </div>
                </div>
                <div className={styles.header__wrapper}>
                    <div className={styles.services_header__bottom}>
                        <div className="container">
                            <div className={styles.header__bottom_inner}>
                                <div className={styles.header__bottom_left}>
                                    <Link href="/">
                                        <a>
                                            <div
                                                className={
                                                    styles.header__bottom_logo
                                                }
                                            >
                                                <img
                                                    src="/images/footer-logo.png"
                                                    alt=""
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <p className={styles.services_header__text}>
                                        Производство и монтаж индивидуальных{" "}
                                        <br />
                                        каминов в свердловской области
                                    </p>
                                </div>
                                <div className={styles.header__bottom_right}>
                                    <p className="header__bottom-tel">
                                        8 800 635 35 35
                                    </p>
                                    <p className={styles.header__bottom_call}>
                                        Заказать звонок
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className={styles.services_header__line} />
                    <h1 className={styles.services_header__title}>
                        <span>
                            {" "}
                            Все заботы мы возьмем на себя. <br />
                        </span>{" "}
                        От проектирования камина до <br /> монтажа у вас дома
                    </h1>
                    <div className={styles.services__items}>
                        <div className={styles.services__item}>
                            <div
                                className={classNames(
                                    styles.services__item_img,
                                    styles.services__item_img__margin
                                )}
                            >
                                <img src="/images/services1.png" alt="" />
                            </div>
                            <div className={styles.services__item_info}>
                                <h3 className={styles.services__item_title}>
                                    Разработка чертежа + 3D <br />
                                    проектирование
                                </h3>
                                <p className={styles.services__item_text}>
                                    Бесплатно разработаем чертёж вашего камина и
                                    создадим 3D визуализацию с учетом всех
                                    характеристик вашего камина,
                                    проконсультируем и подберём лучшее решение
                                </p>
                                <div className={styles.services__item_btn}>
                                    <p>Заказать услугу</p>
                                    <div className={styles.services__btn_arrow}>
                                        <img
                                            src="/images/button-arrow.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src="/images/services2.png" alt="" />
                            </div>
                            <div className={styles.services__item_info}>
                                <h3 className={styles.services__item_title}>
                                    Монтаж каминов под ключ
                                </h3>
                                <p className={styles.services__item_text}>
                                    Lorem Ipsum - это текст-{"рыба"}, часто
                                    используемый в печати и вэб-дизайне. Lorem
                                    Ipsum является стандартной {"рыбой"} для
                                    текстов на латинице с нмачала XVI века. В то
                                    время некий безымянный печатник создал
                                    большую коллекцию размеров и форм шрифтов
                                </p>
                                <div className={styles.services__item_btn}>
                                    <p>Заказать услугу</p>
                                    <div className={styles.services__btn_arrow}>
                                        <img
                                            src="/images/button-arrow.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div
                                className={classNames(
                                    styles.services__item_img,
                                    styles.services__item_img__margin2
                                )}
                            >
                                <img src="/images/services3.png" alt="" />
                            </div>
                            <div className={styles.services__item_info}>
                                <h3 className={styles.services__item_title}>
                                    Доставка
                                </h3>
                                <p className={styles.services__item_text}>
                                    Lorem Ipsum - это текст-{"рыба"}, часто
                                    используемый в печати и вэб-дизайне. Lorem
                                    Ipsum является стандартной {"рыбой"} для
                                    текстов на латинице с начала XVI века. В то
                                    время некий безымянный печатник создал
                                    большую коллекцию размеров и форм шрифтов
                                </p>
                                <div className={styles.services__item_btn}>
                                    <p>Заказать услугу</p>
                                    <div className={styles.services__btn_arrow}>
                                        <img
                                            src="/images/button-arrow.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Contacts margin={true} />
            <Footer />
        </>
    );
};

export default Services;
