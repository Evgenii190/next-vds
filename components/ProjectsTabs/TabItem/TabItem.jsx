import classNames from "classnames";
import React, { useEffect } from "react";
import styles from "./TabItem.module.css";

const TabItem = ({ active, index, setActive, title, fetchProjects, id }) => {
    const setActiveHandler = (e) => {
        fetchProjects(id);
        setActive(id);
    };

    return (
        <div
            className={classNames({
                [styles.jobs__tab]: true,
                [styles.jobs__tab__active]: id === active,
            })}
            onClick={setActiveHandler}
        >
            {title}
        </div>
    );
};

export default TabItem;
