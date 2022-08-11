import classNames from "classnames";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import MainLayout from "../../layouts/MainLayout";
import styles from "../../styles/basket.module.css";
import { percentDiscount } from "../../utils/percentDiscount";
import { serializeString } from "../../utils/serializeString";
import { Context } from "../_app";
import modifyProducts from "../../utils/modifyProducts";
import { checkUrlPhoto } from "../../utils/checkUrlPhoto";
import RadioButton from "../../components/RadioButton";
import RadioForm from "../../components/BasketFormRadio";
import RadioForm2 from "../../components/BasketFormRadio/BasketForm2";
import ShopService from "../../services/ShopService";

const BasketPage = () => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const context = useContext(Context);
    const data = context[0];
    const products = modifyProducts(data);

    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [formMounting, setFormMounting] = useState(true);
    const [formPay, setFormPay] = useState("");

    const calcPriceInitial = () => {
        let totalPrice = 0;
        let totalDiscount = 0;
        products.forEach(({ price, discount, count }) => {
            totalPrice += serializeString(price) * count;
            totalDiscount += serializeString(discount) * count;
        });
        setPrice(totalPrice);
        setDiscount(totalDiscount);
    };

    const minusHandeler = (e, product) => {
        if (product.count <= 1) {
            return;
        }
        product.count--;
        setPrice((prev) => prev - serializeString(product.price));
        setDiscount((prev) => prev - serializeString(product.discount));
    };

    const plusHandeler = (e, product) => {
        product.count++;
        setPrice((prev) => prev + serializeString(product.price));
        setDiscount((prev) => prev + serializeString(product.discount));
    };

    const deleteProduct = (e, product) => {
        const data = products.filter((item) => item.code !== product.code);

        setPrice(
            (prev) => prev - product.count * serializeString(product.price)
        );
        setDiscount(
            (prev) => prev - product.count * serializeString(product.discount)
        );

        context[1](data);
    };

    useEffect(() => {
        calcPriceInitial();
    }, []);

    const createRequest = async (e, data) => {
        console.log(data);
        const response = await ShopService.createRequest(data);
        console.log(response);
    };

    return (
        <MainLayout>
            <section className={styles.basket}>
                <div className="container">
                    <HeaderTop />
                    <div className={styles.catalog__location}>
                        <Link href="/catalog">
                            <a>
                                <p className={styles.catalog__location_item}>
                                    Главная
                                </p>
                            </a>
                        </Link>
                        <p className={styles.catalog__location_item}>Корзина</p>
                    </div>
                    <h4 className={styles.catalog__title}>
                        {products.length} товара(ов) в корзине
                    </h4>
                    <div className={styles.basket__inner}>
                        <div className={styles.basket__items}>
                            {products.map((product) => {
                                return (
                                    <div
                                        className={styles.catalog__item}
                                        key={product.code}
                                    >
                                        <div
                                            className={styles.catalog__item_img}
                                        >
                                            <img
                                                src={
                                                    checkUrlPhoto(product.photo)
                                                        ? `${process.env.BASE_URL}${product.photo}`
                                                        : product.photo
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
                                                    ({
                                                        params,
                                                        value,
                                                        size,
                                                    }) => {
                                                        return (
                                                            <div
                                                                key={
                                                                    params +
                                                                    value
                                                                }
                                                                className={
                                                                    styles.catalog__item_characteristic
                                                                }
                                                            >
                                                                <p
                                                                    className={
                                                                        styles.catalog__characteristic_left
                                                                    }
                                                                >
                                                                    {params}
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
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className={classNames(
                                                styles.catalog__item_order,
                                                styles.catalog__item_order__basket
                                            )}
                                        >
                                            <div
                                                className={classNames(
                                                    styles.catalog__item_price,
                                                    styles.catalog__item_price__basket
                                                )}
                                            >
                                                <p
                                                    className={
                                                        styles.catalog__price
                                                    }
                                                >
                                                    {product.price} руб.
                                                </p>
                                                <p
                                                    className={
                                                        styles.catalog__item_discount
                                                    }
                                                >
                                                    {product.discount &&
                                                        `-${product.discount}р`}
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
                                                <div
                                                    className={
                                                        styles.basket__btn_count
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.basket__count_item
                                                        }
                                                        data-type={1}
                                                        onClick={(e) =>
                                                            minusHandeler(
                                                                e,
                                                                product
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.basket__count_item
                                                        }
                                                    >
                                                        {product.count}
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.basket__count_item
                                                        }
                                                        data-type={2}
                                                        onClick={(e) =>
                                                            plusHandeler(
                                                                e,
                                                                product
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        styles.basket__btn_delete
                                                    }
                                                >
                                                    <p
                                                        className={
                                                            styles.basket__delete_text
                                                        }
                                                        onClick={(e) =>
                                                            deleteProduct(
                                                                e,
                                                                product
                                                            )
                                                        }
                                                    >
                                                        Удалить
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {products[0] ? (
                                <div className={styles.basket__price}>
                                    <div className={styles.basket__price_flex}>
                                        <p
                                            className={
                                                styles.basket__price_text__white
                                            }
                                        >
                                            Сумма скидки
                                        </p>
                                        <div className="dots"></div>
                                        <p
                                            className={
                                                styles.basket__price_text__white
                                            }
                                        >
                                            {discount.toLocaleString()} руб.
                                        </p>
                                    </div>
                                    <div className={styles.basket__price_flex}>
                                        <p
                                            className={
                                                styles.basket__price_text__gold
                                            }
                                        >
                                            Итого:
                                        </p>
                                        <div className="dots"></div>
                                        <p
                                            className={classNames(
                                                styles.catalog__item_discount,
                                                styles.basket__discount
                                            )}
                                        >
                                            {price.toLocaleString()} руб.
                                        </p>
                                        <p
                                            className={
                                                styles.basket__price_text__gold
                                            }
                                        >
                                            {(
                                                price - discount
                                            ).toLocaleString()}{" "}
                                            руб.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <Link href="/catalog">
                                    <a>
                                        <div
                                            className={styles.basket__text_link}
                                        >
                                            Перейти в магазин
                                        </div>
                                    </a>
                                </Link>
                            )}
                        </div>

                        <div className={styles.basket__form}>
                            <h4 className={styles.basket__form_title}>
                                Введите контактные данные
                            </h4>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.currentTarget.value)
                                }
                                placeholder="Ваш телефон"
                            />
                            <input
                                type="text"
                                value={address}
                                onChange={(e) =>
                                    setAddress(e.currentTarget.value)
                                }
                                placeholder="Адрес доставки"
                            />
                            <textarea
                                className={styles.basket__form_area}
                                type="text"
                                placeholder="Комментарий к заказу"
                                value={comment}
                                onChange={(e) =>
                                    setComment(e.currentTarget.value)
                                }
                            />
                            <p className={styles.basket__form_subtitle}>
                                Нужен ли монтаж
                            </p>
                            <div className={styles.basket__radio_items}>
                                <RadioForm setFormMounting={setFormMounting} />
                            </div>
                            <p className={styles.basket__form_subtitle}>
                                Выберите способ оплаты
                            </p>
                            <RadioForm2 setFormPay={setFormPay} />
                            <button
                                className={styles.catalog__form_btn}
                                onClick={(e) =>
                                    createRequest(e, {
                                        phone: phone,
                                        address: address,
                                        comment: comment,
                                        mounting:
                                            formMounting === "yes"
                                                ? true
                                                : false,
                                        paymentMethod: formPay,
                                    })
                                }
                            >
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default BasketPage;
