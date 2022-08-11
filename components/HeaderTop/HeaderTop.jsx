import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./HeaderTop.module.css";
import HeaderTabs from "../HeaderTabs/HeaderTabs";
import PopupCall from "../PopupCall/PopupCall";
import { useContext } from "react";
import { Context } from "../../pages/_app";

const HeaderTop = ({ marginMobile }) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const context = useContext(Context);

    if (typeof window !== "undefined") {
        const body = document.body;
        if (isOpenPopup) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "visible";
        }
    }

    return (
        <div className="header__inner">
            {isOpenPopup && (
                <PopupCall
                    isOpenPopup={isOpenPopup}
                    setIsOpenPopup={setIsOpenPopup}
                />
            )}
            {
                <div className={styles.header__top}>
                    <Link href="/">
                        <a>
                            <img
                                className={styles.header__top_logo}
                                src="/images/logo.png"
                                alt="Логотип"
                            />
                        </a>
                    </Link>
                    <nav className={styles.header__top_nav}>
                        <ul className={styles.header__nav_list}>
                            <li className={styles.header__nav_item}>
                                <Link href="/services">
                                    <a>Услуги</a>
                                </Link>
                            </li>
                            <li className={styles.header__nav_item}>
                                <Link href="/portfolio">
                                    <a>Авторские работы</a>
                                </Link>
                            </li>
                            <li className={styles.header__nav_item}>
                                <Link href="/about">
                                    <a>О компании</a>
                                </Link>
                            </li>
                            <li className={styles.header__nav_item}>
                                <Link href="/blog">
                                    <a>Блог</a>
                                </Link>
                            </li>
                            <li className={styles.header__nav_item}>
                                <Link href="/contacts">
                                    <a>Контакты</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.header__top_tel}>
                        <a href="tel:+88006353535">8 800 635 35 35</a>
                        <p onClick={() => setIsOpenPopup(true)}>
                            Заказать звонок
                        </p>
                    </div>
                    <div
                        className={classNames({
                            [styles.header__top_mobile]: true,
                            [styles.header__top_mobile__margin]: marginMobile,
                        })}
                    >
                        <div
                            className={classNames(
                                styles.header__top_cirlce,
                                styles.header__top_tel__mobile
                            )}
                        >
                            <img src="/images/call.png" alt="Телефон" />
                        </div>
                        <div
                            className={classNames(
                                styles.header__top_cirlce,
                                styles.header__top_menu__mobile
                            )}
                        >
                            <img src="/images/menu-mobile.png" alt="Меню" />
                        </div>
                        <Link href="/basket">
                            <a>
                                <div className={styles.header__top_cirlce}>
                                    <img
                                        src="/images/basket.png"
                                        alt="Корзина"
                                    />
                                    <p className={styles.header__basket_count}>
                                        {context[0].length}
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            }
            <div className={styles.header__bottom}>
                <HeaderTabs />
            </div>
        </div>
    );
};

export default HeaderTop;
