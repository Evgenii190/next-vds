import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../../components/HeaderTop/HeaderTop";
import Footer from "../../components/Footer/Footer";
import Contacts from "../../components/Contacts/Contacts";
import styles from "../../styles/catalog.module.css";
import ShopService from "../../services/ShopService";
import { Context, FiltersContext, SubTitleContext } from "../_app";
import modifyProducts from "../../utils/modifyProducts";
import Link from "next/link";
import { percentDiscount } from "../../utils/percentDiscount";
import { serializeString } from "../../utils/serializeString";
import { localeString } from "../../utils/localeString";
import classNames from "classnames";
import { checkUrlPhoto } from "../../utils/checkUrlPhoto";
import FilterItem from "../../components/FilterItem/FilterItem";

const Catalog = ({ productsPage }) => {
    const context = useContext(Context);
    const subContext = useContext(SubTitleContext);
    const [filters, setFilters] = useState([]);
    const [products, setProducts] = useState(productsPage);
    const [filterQuery, setFilterQuery] = useContext(FiltersContext);

    console.log(filterQuery);

    const selectFiltersHandler = async (e, label, param, isChecked) => {
        if (!isChecked) {
            setFilterQuery((prev) => [...prev, { label, param }]);
            return;
        }

        const arr = filterQuery.filter((item) => item.label !== label);
        setFilterQuery(arr);
    };

    const getProductsBySubCategory = async (id) => {
        const data = await ShopService.getProductsSubCategoriesById(id);
        const filtersArray = [];
        data.map((item) => {
            filtersArray.push(...item.characteristics);
        });

        let temp = [];
        for (let { params, value, type, size } of filtersArray) {
            let check = temp.find((elem, index, obj) => elem.params == params);
            if (check) {
                check.value.push(value);
            } else {
                temp.push({
                    params: params,
                    type: type,
                    size: size,
                    value: [value],
                });
            }
        }

        setFilters(temp);
        setProducts({ results: data });
    };

    useEffect(() => {
        if (context[2]) {
            getProductsBySubCategory(context[2]);
        }
    }, [context[2]]);

    useEffect(() => {
        const getQueryProducts = async () => {
            console.log(filterQuery);
            const { data } = await ShopService.productsQuery({
                filters: filterQuery,
                category: context[2],
            });
            if (data.results[0]) {
                setProducts(data);
            } else {
                if (context[2]) {
                    getProductsBySubCategory(context[2]);
                } else {
                    setProducts(productsPage);
                }
            }
        };

        getQueryProducts();
    }, [filterQuery]);

    useEffect(() => {
        const filtersArray = [];
        products.results.map((item) => {
            filtersArray.push(...item.characteristics);
        });

        let temp = [];
        for (let { params, value, type, size } of filtersArray) {
            let check = temp.find((elem, index, obj) => elem.params == params);
            if (check) {
                check.value.push(value);
            } else {
                temp.push({
                    params: params,
                    type: type,
                    size: size,
                    value: [value],
                });
            }
        }

        setFilters(temp);
    }, []);

    const pagesCount = Math.ceil(products.count / 6);
    const pagesArr = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }

    const fetchDataToNextPage = async (nextPageLink) => {
        const response = await fetch(nextPageLink);
        const data = await response.json();
        setProducts(data);
    };

    const fetchDataPagination = async (page) => {
        const products = await ShopService.pagination(page);
        setProducts(products);
    };

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

    return (
        <>
            <section className={styles.catalog}>
                <div className="container">
                    <Header />
                    {subContext[0] ? (
                        <div className={styles.catalog__location}>
                            <Link href="/">
                                <a>
                                    <p
                                        className={
                                            styles.catalog__location_item
                                        }
                                    >
                                        Главная
                                    </p>
                                </a>
                            </Link>
                            <p className={styles.catalog__location_item}>
                                {subContext[0]}
                            </p>
                        </div>
                    ) : (
                        <div className={styles.catalog__location}></div>
                    )}

                    <div
                        className={classNames({
                            [styles.catalog__content]: true,
                            [styles.catalog__content__padding]:
                                pagesArr.length <= 1,
                        })}
                    >
                        <div className={styles.catalog__sidebar}>
                            {filters.map((filter) => {
                                return (
                                    <FilterItem
                                        key={filter.value}
                                        filter={filter}
                                        selectFiltersHandler={
                                            selectFiltersHandler
                                        }
                                    />
                                );
                            })}
                        </div>
                        <div className={styles.catalog__items}>
                            {products.results.map((product) => {
                                return (
                                    <div
                                        className={styles.catalog__item}
                                        key={product.code}
                                    >
                                        <div
                                            className={styles.catalog__item_img}
                                        >
                                            <Link
                                                href={`/catalog/${product.slug}`}
                                            >
                                                <a>
                                                    <div
                                                        className={
                                                            styles.catalog__item_img__inner
                                                        }
                                                    >
                                                        <img
                                                            src={
                                                                !checkUrlPhoto(
                                                                    product.photo
                                                                )
                                                                    ? `${product.photo}`
                                                                    : `${process.env.BASE_URL}${product.photo}`
                                                            }
                                                            alt=""
                                                        />
                                                        {product.discount ? (
                                                            <div className="other__discount">
                                                                <img
                                                                    src="/images/discount-img.png"
                                                                    alt=""
                                                                />
                                                                <p>
                                                                    {`-${percentDiscount(
                                                                        product.price,
                                                                        product.discount
                                                                    )}%`}
                                                                </p>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>

                                        <div
                                            className={
                                                styles.catalog__item_info
                                            }
                                        >
                                            <Link
                                                href={`/catalog/${product.slug}`}
                                            >
                                                <a>
                                                    <h4
                                                        className={
                                                            styles.catalog__item_title
                                                        }
                                                    >
                                                        {product.title}
                                                    </h4>
                                                </a>
                                            </Link>

                                            <div
                                                className={
                                                    styles.catalog__item_characteristics
                                                }
                                            >
                                                {product.characteristics.map(
                                                    (
                                                        { params, value, size },
                                                        index
                                                    ) => {
                                                        return (
                                                            <div
                                                                key={
                                                                    params +
                                                                    value
                                                                }
                                                            >
                                                                {index < 5 ? (
                                                                    <div
                                                                        className={
                                                                            styles.catalog__item_characteristic
                                                                        }
                                                                        key={
                                                                            params +
                                                                            value
                                                                        }
                                                                    >
                                                                        <p
                                                                            className={
                                                                                styles.catalog__characteristic_left
                                                                            }
                                                                        >
                                                                            {
                                                                                params
                                                                            }
                                                                        </p>
                                                                        <div className="dots"></div>
                                                                        <p
                                                                            className={
                                                                                styles.catalog__characteristic_right
                                                                            }
                                                                        >
                                                                            {size
                                                                                ? value +
                                                                                  " " +
                                                                                  size
                                                                                : value}
                                                                        </p>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_order
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.catalog__item_price
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.catalog__price
                                                    }
                                                >
                                                    {localeString(
                                                        serializeString(
                                                            product.price
                                                        ) -
                                                            serializeString(
                                                                product.discount
                                                            )
                                                    )}
                                                    руб.
                                                </p>
                                                <p
                                                    className={
                                                        styles.catalog__item_discount
                                                    }
                                                >
                                                    {product.discount
                                                        ? `${product.discount}р.`
                                                        : null}
                                                </p>
                                            </div>
                                            <p className={styles.catalog__code}>
                                                Код товара: {product.code}
                                            </p>
                                            <div
                                                className={
                                                    styles.catalog__item_buttons
                                                }
                                            >
                                                <button
                                                    className={
                                                        styles.catalog__button_basket
                                                    }
                                                    onClick={(e) =>
                                                        addToBasket(e, product)
                                                    }
                                                >
                                                    В корзину
                                                </button>
                                                <button
                                                    className={
                                                        styles.catalog__button_click
                                                    }
                                                >
                                                    купить в 1 клик
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {pagesArr.length > 1 ? (
                                <div className={styles.catalog__more}>
                                    <div className={styles.catalog__btn_more}>
                                        {products.next ? (
                                            <button
                                                onClick={() =>
                                                    fetchDataToNextPage(
                                                        products.next
                                                    )
                                                }
                                            >
                                                Следующая страница
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    fetchDataToNextPage(
                                                        products.previous
                                                    )
                                                }
                                            >
                                                Предыдущая страница
                                            </button>
                                        )}
                                    </div>

                                    <div className={styles.catalog__more_items}>
                                        {pagesArr.map((page) => {
                                            return (
                                                <div
                                                    key={page}
                                                    className={
                                                        styles.catalog__more_item
                                                    }
                                                    onClick={() =>
                                                        fetchDataPagination(
                                                            page
                                                        )
                                                    }
                                                >
                                                    {page}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
            <Contacts margin={true} />
            <Footer />
        </>
    );
};

export const getServerSideProps = async (context) => {
    const productsPage = await ShopService.getProducts();

    return {
        props: { productsPage },
    };
};

export default Catalog;
