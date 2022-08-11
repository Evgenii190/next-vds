const modifyProducts = (products) => {
    if (!Array.isArray(products)) {
        products.count = 1;
        return products;
    }
    return products.map((product) => {
        if (product.count) {
            return product;
        }
        product.count = 1;
        return product;
    });
};

export default modifyProducts;
