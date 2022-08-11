import React, { useState } from "react";
import TabItem from "./TabItem/TabItem";
import styles from "./ProjectsTabs.module.css";

const ProjectsTabs = ({ categories, fetchProjects, activeItem }) => {
    const [active, setActive] = useState(activeItem || 1);

    return (
        <div className={styles.jobs__tabs}>
            {categories.map(({ title, id }) => {
                return (
                    <TabItem
                        key={title}
                        title={title}
                        active={active}
                        setActive={setActive}
                        id={id}
                        fetchProjects={fetchProjects}
                    />
                );
            })}
        </div>
    );
};

export default ProjectsTabs;
