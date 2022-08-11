import React, { useState } from "react";
import Header from "../components/HeaderTop/HeaderTop";
import styles from "../styles/home.module.css";
import classNames from "classnames";
import Projects from "../components/Projects/Projects";
import Order from "../components/Order/Order";
import Loop from "../components/Loop/Loop";
import Description from "../components/Description/Description";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import ProjectsService from "../services/ProjectsService";
import BlogService from "../services/BlogService";
import PopupCall from "../components/PopupCall/PopupCall";
import Link from "next/link";

const Home = ({ categories, initialProjects, posts }) => {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <Header marginMobile={true} />
                    <h1 className={styles.header__title}>
                        Производство и <br /> продажа <span>каминов</span>
                        <br /> в Свердловской Области
                    </h1>
                    <div className={styles.header__subtitle}>
                        <div className={styles.header__subtitle_dots}>
                            <img
                                className={classNames(
                                    styles.header__subtitle_dot,
                                    styles.header__subtitle_dots__light
                                )}
                                src="/images/dot.png"
                            />
                            <img
                                className={classNames(
                                    styles.header__subtitle_dot,
                                    styles.header__subtitle_dots__middle
                                )}
                                src="/images/dot.png"
                            />
                            <img
                                className={styles.header__subtitle_dot}
                                src="/images/dot.png"
                            />
                        </div>
                        <div className={styles.header__subtitle_inner}>
                            <div className={styles.header__subtitle_text}>
                                Осуществляем полный комплекса работ,
                                производство, монтаж и обслуживание.
                            </div>
                            <button className={styles.header__subtitle_btn}>
                                <p>Подобрать камин</p>
                                <div className={styles.header__btn_bg}>
                                    <div className={styles.header__btn_arrow}>
                                        <img
                                            src="/images/button-arrow.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={styles.header__info}>
                        <div className={styles.header__info_item}>
                            <p>
                                <span>
                                    Собственное <br />
                                </span>
                                производство
                            </p>
                            <img
                                className={styles.header__item_img}
                                src="/images/header-fireplace.png"
                                alt=""
                            />
                        </div>
                        <div className={styles.header__info_item}>
                            <p>
                                Работаем
                                <br />
                                <span> более 20 лет</span>
                            </p>
                            <img src="/images/header-people.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.header__arrow_bottom}>
                        <img src="/images/arrow-bottom.png" alt="" />
                    </div>
                </div>
            </header>
            <section className={styles.types}>
                <div className="container">
                    <h3 className={styles.types__title}>
                        Какие проекты мы делаем ?
                    </h3>
                    <div className={styles.types__items}>
                        <div className={styles.types__item}>
                            <h5 className={styles.types__item_title}>Камины</h5>
                            <p className={styles.types__item_text}>
                                Осщуествляем производство и продажу каминов,
                                топок, облицовок, порталов, различных видов и
                                сложности
                            </p>
                            <Link href="/portfolio">
                                <a>
                                    <div className={styles.types__item_more}>
                                        Смотреть проекты
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.types__item_img}>
                                <img
                                    src="/images/types-fireplace.png"
                                    alt="Камин"
                                />
                            </div>
                        </div>
                        <div className={styles.types__item}>
                            <h5 className={styles.types__item_title}>
                                Барбекю
                            </h5>
                            <p className={styles.types__item_text}>
                                Изготавливаем барбекю комплексы и летних кухонь
                                из различных видов камня под ключ
                            </p>
                            <Link href="/portfolio">
                                <a>
                                    <div className={styles.types__item_more}>
                                        Смотреть проекты
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.types__item_img}>
                                <img
                                    src="/images/types-barbecy.png"
                                    alt="Барбекю"
                                />
                            </div>
                        </div>
                        <div className={styles.types__item}>
                            <h5 className={styles.types__item_title}>
                                Каминопечь
                            </h5>
                            <p className={styles.types__item_text}>
                                Реализуем каминопечи от проекта до готового
                                изделия у вас дома
                            </p>
                            <Link href="/portfolio">
                                <a>
                                    <div className={styles.types__item_more}>
                                        Смотреть проекты
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.types__item_img}>
                                <img src="/images/types-fire.png" alt="Камин" />
                            </div>
                        </div>
                        <div className={styles.types__item}>
                            <h5 className={styles.types__item_title}>
                                Русская печь
                            </h5>
                            <p className={styles.types__item_text}>
                                Изготавливаем русские печи авторской работы
                                различной сложности и конфигурции.
                            </p>
                            <Link href="/portfolio">
                                <a>
                                    <div className={styles.types__item_more}>
                                        Смотреть проекты
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.types__item_img}>
                                <img
                                    src="/images/types-fire2.png"
                                    alt="Камин"
                                />
                            </div>
                        </div>
                        <div className={styles.types__item}>
                            <h5 className={styles.types__item_title}>
                                Банные печи
                            </h5>
                            <p className={styles.types__item_text}>
                                Банные печи для русской или финской бани. Такие
                                печи популярны, потому как дровяное топливо
                                доступно по цене
                            </p>
                            <Link href="/portfolio">
                                <a>
                                    <div className={styles.types__item_more}>
                                        Смотреть проекты
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.types__item_img}>
                                <img
                                    src="/images/types-fire4.png"
                                    alt="Камин"
                                />
                            </div>
                        </div>
                        <div className={styles.types__item}>
                            <h5 className={styles.types__item_title}>Тандыр</h5>
                            <p className={styles.types__item_text}>
                                Изготавливаем тандыр по традиционным
                                технологиям. Из природной глины (без добавления
                                химии).
                            </p>
                            <Link href="/portfolio">
                                <a>
                                    <div className={styles.types__item_more}>
                                        Смотреть проекты
                                    </div>
                                </a>
                            </Link>
                            <div className={styles.types__item_img}>
                                <img src="/images/types-tan.png" alt="Тандыр" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.benefits}>
                <div className="container">
                    <h3 className={styles.benefits__title}>
                        Почему наши клиенты выбирают нас,
                        <span>
                            <br /> даже сравнив все предложения на рынке ?
                        </span>
                    </h3>
                    <div className={styles.benefits__row_top}>
                        <div className={styles.benefits__row_item}>
                            <img
                                className={classNames(
                                    styles.benefits__top_img,
                                    styles.benefits__top_img__margin
                                )}
                                src="/images/benefits-calc.png"
                                alt="Калькулятор"
                            />
                            <h6 className={styles.benefits__top_title}>
                                Нет менеджерских <br /> наценок и доп. продаж
                            </h6>
                            <p className={styles.benefits__top_text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla quam velit, vulputate eu
                                pharetra nec, mattis ac neque
                            </p>
                        </div>
                        <div className={styles.benefits__row_item}>
                            <img
                                className={styles.benefits__top_img}
                                src="/images/benefits-center.png"
                                alt=""
                            />
                            <div className={styles.benefits__top_circle}></div>
                        </div>
                        <div className={styles.benefits__row_item}>
                            <img src="/images/benefits2.png" alt="" />
                            <h6 className={styles.benefits__top_title}>
                                Профессиональные работники <br /> с опытом более
                                10 лет
                            </h6>
                            <p className={styles.benefits__top_text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla quam velit, vulputate eu
                                pharetra nec, mattis ac neque
                            </p>
                        </div>
                    </div>
                    <div className={styles.benefits__row_bottom}>
                        <div className={styles.benefits__bottom_item}>
                            <img src="/images/benefits-list.png" alt="" />
                            <h6 className={styles.benefits__top_title}>
                                Делаем проекты <br /> по индивидуальному заказу
                            </h6>
                            <p className={styles.benefits__top_text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla quam velit, vulputate eu
                                pharetra nec, mattis ac neque
                            </p>
                        </div>
                        <div className={styles.benefits__bottom_item}>
                            <img
                                className={styles.benefits__bottom_img__width}
                                src="/images/benefits-cat.png"
                                alt=""
                            />
                            <h6 className={styles.benefits__top_title}>
                                Широкий выбор <br /> ассортимента
                            </h6>
                            <p className={styles.benefits__top_text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla quam velit, vulputate eu
                                pharetra nec, mattis ac neque
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Projects
                categories={categories}
                initialProjects={initialProjects}
            />
            <Order />
            <Loop />
            <Description />
            <section className={styles.blog}>
                <div className="container">
                    <h4 className={styles.blog__title}>Наш Блог</h4>
                    <div className={styles.blog__items}>
                        {posts.map(
                            ({ title, photo, previewContent, id, slug }) => {
                                return (
                                    <div className={styles.job__item} key={id}>
                                        <img
                                            className={styles.job__item_img}
                                            src={`${process.env.BASE_URL}${photo}`}
                                            alt=""
                                        />
                                        <div className={styles.job__info}>
                                            <h6 className={styles.job__title}>
                                                {title}
                                            </h6>
                                            <p className={styles.job__descr}>
                                                {previewContent}
                                            </p>
                                        </div>
                                        <Link href={`/blog/${slug}`}>
                                            <div className={styles.job__btn}>
                                                <p>Подробнее о проекте</p>
                                                <img
                                                    src="/images/job-arrow.png"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </section>
            <Contacts />
            <Footer />
        </>
    );
};

export const getServerSideProps = async (context) => {
    const data = await ProjectsService.getProjectsSSR();
    console.log(data);
    const posts = await BlogService.getLastThreePost();
    data.props.posts = posts;

    return data;
};

export default Home;
