import React from "react";
import { useState } from "react";
import classNames from "classnames";
import styles from "./Projects.module.css";
import ProjectsTabs from "../ProjectsTabs/ProjectsTabs";
import ProjectsItems from "./ProjectsItems/ProjectsItems";
import ProjectsService from "../../services/ProjectsService";

const Projects = ({ categories, initialProjects }) => {
    const [projects, setProjects] = useState(initialProjects);

    const fetchProjects = async (id) => {
        const data = await ProjectsService.getProjectsByIdCategory(id);
        setProjects(data);
    };

    return (
        <section className={classNames(styles.jobs, styles.jobs__portfolio)}>
            <div className="container">
                <h1 className={styles.jobs__title}>Посмотрите наши работы</h1>
                <ProjectsTabs
                    categories={categories}
                    fetchProjects={fetchProjects}
                />
                <ProjectsItems projects={projects} />
                <div className={styles.jobs__more}>
                    <p>Показать больше проектов</p>
                    <img src="/images/arrow-more.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
