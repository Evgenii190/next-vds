import Link from "next/link";
import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Order from "../../components/Order/Order";
import PagePatternLayout from "../../layouts/PagePatternLayout";
import styles from "../../styles/post.module.css";

const PostPage = () => {
    return (
        <PagePatternLayout
            pageTitle={"Блог"}
            pageText={
                <>
                    <span>Интересные статьи о производстве,</span> <br />
                    монтажу и обслуживании каминов и барбекю
                </>
            }
            isDots={true}
            srcImage={"/images/blog-bg.png"}
        >
            <section className={styles.post}>
                <div className={styles.post__container}>
                    <h2 className={styles.post__title}>
                        Как сделать камин своими руками: пошаговая инструкция
                    </h2>
                    <p className={styles.post__text}>
                        Как построить камин из кирпича для дома: все секреты
                        правильной кладки
                    </p>
                    <div className={styles.post__img}>
                        <img
                            className={styles.post__img}
                            src="/images/post-img.png"
                            alt=""
                        />
                    </div>
                    <h3 className={styles.post__title}>Кладка</h3>
                    <p className={styles.post__text}>
                        Новичку, впервые задумавшемуся о том, как сложить камин
                        из кирпича своими руками, схема кладки потребуется в
                        первуюочередь. Она называется порядовкой и позволяет
                        даже дилетантам решить эту сложную задачу, не вдаваясь в
                        расчётыи не углубляясь в нормативные документы.
                        Самостоятельно «изобретать» камин, не будучи
                        специалистом в этом деле, не стоит.Но кроме готовой
                        порядовки домашнему мастеру понадобятся и теоретические
                        знания об основных элементах камина, принципах его
                        эффективной и безопасной работы. Вся необходимая
                        информация – перед вами.
                    </p>
                    <h3 className={styles.post__title}>
                        Прежде всего стоит учитывать
                    </h3>
                    <ul className={styles.post__list}>
                        <li className={styles.post__list_item}>
                            Тип и площадь помещения
                        </li>
                        <li className={styles.post__list_item}>
                            Тип камина, его размер и конфигурация
                        </li>
                        <li className={styles.post__list_item}>
                            Размер и конфигурацию камина
                        </li>
                        <li className={styles.post__list_item}>
                            Место установки камина
                        </li>
                        <li className={styles.post__list_item}>
                            Материал отделки помещения
                        </li>
                        <li className={styles.post__list_item}>
                            Дизайн-проект помещения (при наличии)
                        </li>
                        <li className={styles.post__list_item}>
                            Ваши пожелания
                        </li>
                    </ul>
                    <iframe
                        className={styles.post__video}
                        src="https://www.youtube.com/embed/6mzRtd9dFvI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className={styles.post__button}>
                        <Link href="/blog">
                            <a>
                                <button>Вернуться к новостям</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            <Order />
            <Contacts margin={true} />
        </PagePatternLayout>
    );
};

export default PostPage;
