import React, { useState } from "react";
import styles from "./ProjectsItems.module.css";
import ProjectItem from "./ProjectItem/ProjectItem";

const ProjectsItems = ({ projects }) => {
    return (
        <div className={styles.jobs__items}>
            {projects[0] ? (
                projects.map((project, index) => {
                    return (
                        <ProjectItem
                            key={project.title + index}
                            params={project}
                        />
                    );
                })
            ) : (
                <div className={styles.nothing}>Здесь пока что ничего нет</div>
            )}
        </div>
    );
};

export default ProjectsItems;
