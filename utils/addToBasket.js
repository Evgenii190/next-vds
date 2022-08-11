const addToBasket = (e, product) => {
    let isExists = false;

    if (context[0].length === 0) {
        context[1]([modifyProducts(product)]);
        return;
    }

    const basketProducts = context[0].map((item) => {
        if (item.code === product.code) {
            isExists = true;
            item.count++;
            return item;
        }
        return item;
    });

    if (!isExists) {
        basketProducts.push(modifyProducts(product));
    }

    context[1](basketProducts);
};
