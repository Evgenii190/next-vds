export const BASE_URL = process.env.API_URL;

export default class ShopService {
    static async getProducts() {
        try {
            const response = await fetch(`${BASE_URL}/shop/products`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getProductBySlug(slug) {
        try {
            const response = await fetch(`${BASE_URL}/shop/products/${slug}`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getOtherProducts(category) {
        try {
            const response = await fetch(
                `${BASE_URL}/shop/category/${category}`
            );
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async pagination(page) {
        try {
            const response = await fetch(
                `${BASE_URL}/shop/products/?page=${page}`
            );
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getPhotos(productId) {
        try {
            const response = await fetch(
                `${BASE_URL}/shop/images/${productId}`
            );
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async createRequest(reqData) {
        try {
            const response = await fetch(`${BASE_URL}/shop/request`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqData),
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async productsQuery(reqData) {
        try {
            const response = await fetch(`${BASE_URL}/shop/productsQuery`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqData),
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getCategories() {
        try {
            const response = await fetch(`${BASE_URL}/shop/categories`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getItemsCategoriesById(id) {
        try {
            const response = await fetch(
                `${BASE_URL}/shop/itemsCategories/${id}`
            );
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getProductsSubCategoriesById(id) {
        try {
            const response = await fetch(`${BASE_URL}/shop/subcategory/${id}`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
