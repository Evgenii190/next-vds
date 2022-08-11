export const BASE_URL = process.env.API_URL;

export default class BlogService {
    static async getAllCategories() {
        try {
            const response = await fetch(`${BASE_URL}/blog/categories`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getPostsCategory(categoryId) {
        try {
            const response = await fetch(
                `${BASE_URL}/blog/posts/${categoryId}`
            );
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getPostBySlug(slug) {
        try {
            const response = await fetch(`${BASE_URL}/blog/post/${slug}`);
            const data = await response.json();
            return data[0];
        } catch (e) {
            console.log(e);
        }
    }

    static async getPostBySlug(slug) {
        try {
            const response = await fetch(`${BASE_URL}/blog/post/${slug}`);
            const data = await response.json();
            return data[0];
        } catch (e) {
            console.log(e);
        }
    }
    static async getLastThreePost(slug) {
        try {
            const response = await fetch(`${BASE_URL}/blog/post/`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
