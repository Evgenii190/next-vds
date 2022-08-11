import React from "react";
import HeaderTop from "../components/HeaderTop/HeaderTop";
import MainLayout from "./MainLayout";
import classNames from "classnames";
import styles from "../styles/PagePatternLayout.module.css";
import Footer from "../components/Footer/Footer";

const PagePatternLayout = (
    { pageTitle, isDots, pageText, srcImage, children },
    ...props
) => {
    return (
        <MainLayout props={props}>
            <>
                <header
                    style={{ backgroundImage: `url(${srcImage})` }}
                    className={styles.header__pattern}
                >
                    <div className="container">
                        <HeaderTop />
                        <h1 className={styles.pattern__title}>{pageTitle}</h1>
                        <div
                            className={classNames({
                                [styles.pattern__subtitle_dots]: true,
                                [styles.pattern__subtitle_dots__none]: !isDots,
                            })}
                        >
                            <img
                                className={classNames(
                                    styles.pattern__subtitle_dot,
                                    styles.pattern__subtitle_dots__light
                                )}
                                src="/images/dot.png"
                                alt=""
                            />
                            <img
                                className={classNames(
                                    styles.pattern__subtitle_dot,
                                    styles.pattern__subtitle_dots__middle
                                )}
                                src="/images/dot.png"
                                alt=""
                            />
                            <img
                                className={styles.pattern__subtitle_dot}
                                src="/images/dot.png"
                                alt=""
                            />
                        </div>
                        <p className={styles.pattern__text}>{pageText}</p>
                    </div>
                </header>
                {children}
                <Footer />
            </>
        </MainLayout>
    );
};

export default PagePatternLayout;
