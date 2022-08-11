import classNames from "classnames";
import React, { useState } from "react";
import styles from "./Loop.module.css";
import LoopStep1 from "./Step1/LoopStep1";
import LoopStep2 from "./Step2/LoopStep2";
import LoopStep3 from "./Step3/LoopStep3";
import LoopStep4 from "./Step4/LoopStep4";
import LoopStep5 from "./Step5/LoopStep5";

const Loop = () => {
    const [active, setActive] = useState(1);

    const activeStepHandler = (e) => {
        const index = +e.currentTarget.dataset.index;
        setActive(index);
    };

    return (
        <section className={styles.loop}>
            <img className={styles.loop__bg} src="/images/loop-bg.png" alt="" />
            <div className={styles.container}>
                <h3 className={styles.loop__title}>
                    Осуществляем
                    <span>
                        полный цикл работ <br />
                    </span>
                    от проектирования и чертежей <br /> до монтажа у вас дома
                </h3>
                <div className={styles.loop__steps}>
                    <div className={styles.loop__step}>
                        <p
                            className={classNames({
                                [styles.loop__step_text]: true,
                                [styles.loop__step_text__orange]: active >= 1,
                            })}
                        >
                            Этап 1
                        </p>
                        <div
                            className={classNames({
                                [styles.loop__step_circle]: true,
                                [styles.loop__step_circle__orange]: active >= 1,
                            })}
                            onClick={activeStepHandler}
                            data-index="1"
                        >
                            <div
                                className={classNames({
                                    [styles.loop__inner_circle]: true,
                                    [styles.loop__inner_circle__active]:
                                        active >= 1,
                                })}
                            ></div>
                        </div>
                        <div
                            className={classNames({
                                [styles.loop__dots]: true,
                                [styles.loop__dots__orange]: active >= 1,
                            })}
                        ></div>
                    </div>
                    <div className={styles.loop__step}>
                        <p
                            className={classNames({
                                [styles.loop__step_text]: true,
                                [styles.loop__step_text__orange]: active >= 2,
                            })}
                        >
                            Этап 2
                        </p>
                        <div
                            className={classNames({
                                [styles.loop__step_circle]: true,
                                [styles.loop__step_circle__orange]: active >= 2,
                            })}
                            onClick={activeStepHandler}
                            data-index="2"
                        >
                            <div
                                className={classNames({
                                    [styles.loop__inner_circle]: true,
                                    [styles.loop__inner_circle__active]:
                                        active >= 2,
                                })}
                            ></div>
                        </div>
                        <div
                            className={classNames({
                                [styles.loop__dots]: true,
                                [styles.loop__dots__orange]: active >= 2,
                            })}
                        ></div>
                    </div>
                    <div className={styles.loop__step}>
                        <p
                            className={classNames({
                                [styles.loop__step_text]: true,
                                [styles.loop__step_text__orange]: active >= 3,
                            })}
                        >
                            Этап 3
                        </p>
                        <div
                            className={classNames({
                                [styles.loop__step_circle]: true,
                                [styles.loop__step_circle__orange]: active >= 3,
                            })}
                            onClick={activeStepHandler}
                            data-index="3"
                        >
                            <div
                                className={classNames({
                                    [styles.loop__inner_circle]: true,
                                    [styles.loop__inner_circle__active]:
                                        active >= 3,
                                })}
                            ></div>
                        </div>
                        <div
                            className={classNames({
                                [styles.loop__dots]: true,
                                [styles.loop__dots__orange]: active >= 3,
                            })}
                        ></div>
                    </div>
                    <div className={styles.loop__step}>
                        <p
                            className={classNames({
                                [styles.loop__step_text]: true,
                                [styles.loop__step_text__orange]: active >= 4,
                            })}
                        >
                            Этап 4
                        </p>
                        <div
                            className={classNames({
                                [styles.loop__step_circle]: true,
                                [styles.loop__step_circle__orange]: active >= 4,
                            })}
                            onClick={activeStepHandler}
                            data-index="4"
                        >
                            <div
                                className={classNames({
                                    [styles.loop__inner_circle]: true,
                                    [styles.loop__inner_circle__active]:
                                        active >= 4,
                                })}
                            ></div>
                        </div>
                        <div
                            className={classNames({
                                [styles.loop__dots]: true,
                                [styles.loop__dots__orange]: active >= 4,
                            })}
                        ></div>
                    </div>
                    <div className={styles.loop__step}>
                        <p
                            className={classNames({
                                [styles.loop__step_text]: true,
                                [styles.loop__step_text__orange]: active >= 5,
                            })}
                        >
                            Этап 5
                        </p>
                        <div
                            className={classNames({
                                [styles.loop__step_circle]: true,
                                [styles.loop__step_circle__orange]: active >= 5,
                            })}
                            onClick={activeStepHandler}
                            data-index="5"
                        >
                            <div
                                className={classNames({
                                    [styles.loop__inner_circle]: true,
                                    [styles.loop__inner_circle__active]:
                                        active >= 5,
                                })}
                            ></div>
                        </div>
                    </div>
                </div>
                {active === 1 && <LoopStep1 />}
                {active === 2 && <LoopStep2 />}
                {active === 3 && <LoopStep3 />}
                {active === 4 && <LoopStep4 />}
                {active === 5 && <LoopStep5 />}
            </div>
            {active === 1 && (
                <img
                    className={styles.loop__rh_img}
                    src="/images/loop-board.png"
                    alt=""
                />
            )}
            {active === 2 && (
                <img
                    className={styles.loop__lh_img}
                    src="/images/loop-step2.png"
                    alt=""
                />
            )}
            {active === 3 && (
                <img
                    className={styles.loop__rh_img}
                    src="/images/loop3-decr.png"
                    alt=""
                />
            )}
            {active === 4 && (
                <img
                    className={styles.loop__rh_img}
                    src="/images/loop4-decr.png"
                    alt=""
                />
            )}
            {active === 5 && (
                <img
                    className={styles.loop__rh_img}
                    src="/images/loop5-decr.png"
                    alt=""
                />
            )}
        </section>
    );
};

export default Loop;
