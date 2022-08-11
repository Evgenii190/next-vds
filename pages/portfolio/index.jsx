import React from "react";
import Projects from "../../components/Projects/Projects";
import Order from "../../components/Order/Order";
import Contacts from "../../components/Contacts/Contacts";
import PagePatternLayout from "../../layouts/PagePatternLayout";
import ProjectsService from "../../services/ProjectsService";

const PortfolioPage = ({ categories, initialProjects }) => {
    return (
        <PagePatternLayout
            pageTitle={"Наши работы"}
            pageText={
                <>
                    <span>Посмотрите авторские работы нашей компании.</span>
                    <br />
                    Монтаж и обслуживании каминов и барбекю и печей
                </>
            }
            isDots={true}
            srcImage={"/images/portfolio-bg.png"}
        >
            <Projects
                categories={categories}
                initialProjects={initialProjects}
            />
            <Order />
            <Contacts margin={true} />
        </PagePatternLayout>
    );
};

export const getServerSideProps = async (context) => {
    const data = await ProjectsService.getProjectsSSR();

    return data;
};

export default PortfolioPage;
