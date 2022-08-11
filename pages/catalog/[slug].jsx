import classNames from "classnames";
import Link from "next/link";
import React, { useContext, useState } from "react";
import CardSlider from "../../components/CardSlider/CardSlider";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ShopService from "../../services/ShopService";
import styles from "../../styles/card.module.css";
import { localeString } from "../../utils/localeString";
import modifyProducts from "../../utils/modifyProducts";
import { percentDiscount } from "../../utils/percentDiscount";
import { serializeString } from "../../utils/serializeString";
import { Context } from "../_app";

const CardProduct = ({ product, otherProducts, photos }) => {
    const context = useContext(Context);

    const [activeTab, setActiveTab] = useState(1);
    const [isShowAllCharacteristics, setIsShowAllCharacteristics] =
        useState(false);

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

    console.log(product);

    return (
        <>
            <div className={styles.card__layout}>
                <div className="container">
                    <HeaderTop />
                    <div className={styles.catalog__link}></div>
                    <div className={styles.card}>
                        <div className={styles.card__slider__inner}>
                            <div className={styles.card__slider}>
                                <CardSlider photos={photos} />
                            </div>
                        </div>

                        <div className={styles.card__content}>
                            <h2 className={styles.card__title}>
                                {product.title}
                            </h2>
                            <p className={styles.card__text}>
                                {product.contentPreview}
                            </p>
                            <div className={styles.card__tabs}>
                                <div
                                    className={classNames({
                                        [styles.card__tab]: true,
                                        [styles.card__tab__active]:
                                            activeTab === 1,
                                    })}
                                    data-type="1"
                                    onClick={(e) => {
                                        setActiveTab(
                                            +e.currentTarget.dataset.type
                                        );
                                    }}
                                >
                                    <p>Характеристики</p>
                                </div>
                                <div
                                    className={classNames({
                                        [styles.card__tab]: true,
                                        [styles.card__tab__active]:
                                            activeTab === 2,
                                    })}
                                    data-type="2"
                                    onClick={(e) =>
                                        setActiveTab(
                                            +e.currentTarget.dataset.type
                                        )
                                    }
                                >
                                    <p>Описание</p>
                                </div>
                            </div>
                            <div className={styles.card__tab_content}>
                                <p>
                                    {activeTab === 1
                                        ? "Характеристики"
                                        : "Описание"}
                                </p>
                                {activeTab === 1 ? (
                                    <div
                                        className={
                                            styles.card__item_characteristics
                                        }
                                    >
                                        {product.characteristics.map(
                                            (
                                                { params, value, size },
                                                index
                                            ) => {
                                                return (
                                                    <div
                                                        className={classNames({
                                                            [styles.card__item_characteristic]: true,
                                                            [styles.card__item_characteristic__none]:
                                                                !isShowAllCharacteristics
                                                                    ? index > 5
                                                                    : null,
                                                        })}
                                                        key={params + value}
                                                    >
                                                        <p
                                                            className={
                                                                styles.card__characteristic_left
                                                            }
                                                        >
                                                            {params}
                                                        </p>
                                                        <div className="dots"></div>
                                                        <p
                                                            className={
                                                                styles.card__characteristic_right
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
                                        <div
                                            className={
                                                styles.card__button_characteristic
                                            }
                                        >
                                            <span
                                                onClick={() =>
                                                    setIsShowAllCharacteristics(
                                                        !isShowAllCharacteristics
                                                    )
                                                }
                                            >
                                                {product.characteristics
                                                    .length > 6
                                                    ? !isShowAllCharacteristics
                                                        ? "Все характеристики"
                                                        : "Скрыть характеристики"
                                                    : ""}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <p className={styles.card__content__text}>
                                        {product.content}
                                    </p>
                                )}
                                <div className={styles.card__order}>
                                    <div className={styles.card__price}>
                                        {localeString(
                                            serializeString(product.price) -
                                                serializeString(
                                                    product.discount
                                                )
                                        )}
                                        руб.
                                    </div>
                                    <div className={styles.card__discount}>
                                        {product.discount
                                            ? `${product.discount}р`
                                            : null}
                                    </div>
                                </div>
                                <div className={styles.card__buttons}>
                                    <div
                                        className={styles.card__button_basket}
                                        onClick={(e) => addToBasket(e, product)}
                                    >
                                        В корзину
                                    </div>
                                    <div className={styles.card__button_buy}>
                                        купить в 1 клик
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={classNames({
                            [styles.benefits]: true,
                            [styles.benefits__padding]:
                                otherProducts.length === 0,
                        })}
                    >
                        <div className={styles.benefit__item}>
                            <div className={styles.benefit__item_img}>
                                <img src="/images/benefit1.png" alt="" />
                            </div>
                            <h4 className={styles.benefit__item_title}>
                                Бесплатная <br /> доставка
                            </h4>
                            <p className={styles.benefit__item_text}>
                                При покупке Камина, доставка в районе города{" "}
                                осуществляется бесплатно
                            </p>
                        </div>
                        <div className={styles.benefit__item}>
                            <div className={styles.benefit__item_img}>
                                <img src="/images/benefit2.png" alt="" />
                            </div>
                            <h4 className={styles.benefit__item_title}>
                                Безопасный <br /> монтаж
                            </h4>
                            <p className={styles.benefit__item_text}>
                                Монтаж производится квалифицированными
                                мастерами. Имеется лицензия МЧС
                            </p>
                        </div>
                        <div className={styles.benefit__item}>
                            <div className={styles.benefit__item_img}>
                                <img src="/images/benefit3.png" alt="" />
                            </div>
                            <h4 className={styles.benefit__item_title}>
                                21 день на <br /> размышление
                            </h4>
                            <p className={styles.benefit__item_text}>
                                На обмен или возврат продукции. Мы добавили 7
                                дней к возврату не бывшей в использовании
                                продукции
                            </p>
                        </div>
                        <div className={styles.benefit__item}>
                            <div className={styles.benefit__item_img}>
                                <img src="/images/benefit4.png" alt="" />
                            </div>
                            <h4 className={styles.benefit__item_title}>
                                Гарантия <br /> лучшей цены
                            </h4>
                            <p className={styles.benefit__item_text}>
                                Мы ежедневно мониторим цены конкурентов. Если вы
                                найдете товар дешевле,
                            </p>
                        </div>
                    </div>
                    <div className={styles.other}>
                        {otherProducts.length !== 0 ? (
                            <h2 className={styles.other__title}>
                                Возможно вам понравятся другие товары
                            </h2>
                        ) : null}

                        <div
                            className={classNames({
                                [styles.other__items]:
                                    otherProducts.length !== 0,
                            })}
                        >
                            {otherProducts.map(
                                ({
                                    title,
                                    price,
                                    code,
                                    photo,
                                    slug,
                                    discount,
                                }) => {
                                    return (
                                        <div
                                            className={styles.other__item}
                                            key={code}
                                        >
                                            <Link href={`${slug}`}>
                                                <a>
                                                    <div
                                                        className={
                                                            styles.other__item_img
                                                        }
                                                    >
                                                        <img
                                                            src={`${process.env.BASE_URL}${photo}`}
                                                            alt=""
                                                        />

                                                        {discount ? (
                                                            <div className="other__discount">
                                                                <img
                                                                    src="/images/discount-img.png"
                                                                    alt=""
                                                                />
                                                                <p>
                                                                    {`-${percentDiscount(
                                                                        price,
                                                                        discount
                                                                    )}%`}
                                                                </p>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </a>
                                            </Link>

                                            <h4
                                                className={
                                                    styles.other__item_title
                                                }
                                            >
                                                <Link href={`${slug}`}>
                                                    <a>{title}</a>
                                                </Link>
                                            </h4>
                                            <p
                                                className={
                                                    styles.other__item_code
                                                }
                                            >
                                                Код товара: {code}
                                            </p>
                                            <p
                                                className={
                                                    styles.other__item_price
                                                }
                                            >
                                                {price} руб.
                                            </p>
                                            <div
                                                className={
                                                    styles.other__item_btn
                                                }
                                            >
                                                В корзину
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Contacts margin={true} />
            <Footer />
        </>
    );
};

export const getServerSideProps = async ({ params }) => {
    const data = await ShopService.getProductBySlug(params.slug);
    const product = data[0];

    const photos = await ShopService.getPhotos(product.id);

    const otherProductsData = await ShopService.getOtherProducts(
        product.category
    );

    const otherProducts = otherProductsData.filter(
        (item) => item.code !== product.code
    );

    return {
        props: { product, otherProducts, photos },
    };
};

export default CardProduct;
