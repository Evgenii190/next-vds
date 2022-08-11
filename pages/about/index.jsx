import React from "react";
import Loop from "../../components/Loop/Loop";
import Description from "../../components/Description/Description";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import PagePatternLayout from "../../layouts/PagePatternLayout";
import styles from "../../styles/about.module.css";

const AboutPage = () => {
    return (
        <PagePatternLayout
            pageTitle={
                <>
                    О компании <br /> Богатырь Камин
                </>
            }
            pageText={""}
            isDots={false}
            srcImage={"/images/about-bg.png"}
        >
            <section className={styles.unique}>
                <div className="container">
                    <div className={styles.unique__inner}>
                        <div className={styles.unique__info}>
                            <h3 className={styles.unique__title}>
                                Изготавливаем авторскиe <br /> камины и барбекю
                                в <br />
                                уникальном стиле
                            </h3>
                            <p className={styles.unique__text}>
                                Производственная компания ООО {"АЛКАМ плюс"}
                                существует на рынке изготовления полуфабрикатов
                                из цветных и черных металлов с 2002 года.
                            </p>
                            <p className={styles.unique__text}>
                                В настоящее время выбрано основное направление
                                деятельности компании - это развитие и
                                совершенствование технологических процессов
                                изготовления полуфабрикатов из AL и его сплавов:
                                мы серийно производим листы.
                            </p>
                            <p className={styles.unique__text}>
                                Д16АТ по ГОСТ 21631-76 толщинами от 0,8мм до
                                5,0мм включительно, как стандартного раскроя
                                ХХХ*1200*3000 так и в размер Заказчика, например
                                2,0*1000*2600мм. Специальный раскрой может.
                            </p>
                        </div>
                        <div className={styles.unique__images}>
                            <img src="/images/unique1.png" alt="" />
                            <img src="/images/unique2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.produce}>
                <div className="container">
                    <h4 className={styles.produce__title}>
                        Производим каминные облицовки на собственном
                        производстве , оснащенной европейским оборудованием
                    </h4>
                    <div className={styles.produce__images}>
                        <div className={styles.produce__image}>
                            <img src="/images/produce1.png" alt="" />
                        </div>
                        <div className={styles.produce__image}>
                            <img src="/images/produce2.png" alt="" />
                        </div>
                        <div className={styles.produce__image}>
                            <img src="/images/produce3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Loop />
            <Description />
            <Contacts margin={true} />
        </PagePatternLayout>
    );
};

export default AboutPage;
