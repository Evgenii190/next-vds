export const BASE_URL = process.env.API_URL;

export default class ProjectsService {
    static async getAllCategories() {
        try {
            const response = await fetch(`${BASE_URL}/projects/categories`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getProjectsByIdCategory(id) {
        try {
            const response = await fetch(`${BASE_URL}/projects/project/${id}`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getCharacteristicsById(id) {
        try {
            const response = await fetch(
                `${BASE_URL}/projects/characteristics/${id}`
            );
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getProjectsSSR(initialValue) {
        try {
            const categories = await ProjectsService.getAllCategories();
            const initialCategory = categories[initialValue || 0].id;
            let initialProjects = await ProjectsService.getProjectsByIdCategory(
                initialCategory
            );

            console.log({ categories, initialProjects }, 11);

            return { props: { categories, initialProjects } };
        } catch (e) {
            console.log(e);
        }
    }
}
