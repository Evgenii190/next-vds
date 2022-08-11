import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProjectsService from "../../../../services/ProjectsService";
import ProjectPopup from "../../Popup/Popup";
import styles from "./ProjectItem.module.css";

const ProjectItem = ({ params }) => {
    const [characteristics, setCharacteristics] = useState([]);
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    useEffect(() => {
        const fetchCharacteristics = async (id) => {
            const characteristicsData =
                await ProjectsService.getCharacteristicsById(id);
            setCharacteristics(characteristicsData);
        };
        fetchCharacteristics(params.id);
    }, []);

    return (
        <div className={styles.job__item}>
            {isOpenPopup && (
                <ProjectPopup params={params} characteristics={characteristics} setIsOpen={setIsOpenPopup} />
            )}
            <img
                className={styles.job__item_img}
                src={`${process.env.BASE_URL}${params.previewPhoto}`}
                alt="Картинка проекта"
            />
            <div className={styles.job__info}>
                <h6 className={styles.job__title}>{params.title}</h6>
                {characteristics.map(({ option, params, id }) => {
                    return (
                        <div key={id} className={styles.job__text_flex}>
                            <p className={styles.job__text_left}>{params}</p>
                            <div className={styles.job__dots}></div>
                            <p className={styles.job__text_right}>{option}</p>
                        </div>
                    );
                })}
                <div className={styles.job__price}>
                    <p>Стоимость:</p>
                    <div className={styles.job__dots}></div>
                    <p>{params.price} руб.</p>
                </div>
                <p className={styles.job__descr}>{params.previewContent}</p>
            </div>
            <div
                onClick={() => setIsOpenPopup(true)}
                className={styles.job__btn}
            >
                <p>Подробнее о проекте</p>
                <img src="/images/job-arrow.png" />
            </div>
        </div>
    );
};

export default ProjectItem;
