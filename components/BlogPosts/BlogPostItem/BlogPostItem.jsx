import Link from "next/link";
import React from "react";
import styles from "./BlogPostItem.module.css";

const BlogPostItem = ({ title, photo, url, previewContent }) => {
    return (
        <div className={styles.blog__item}>
            <img src={`${process.env.BASE_URL}${photo}`} alt="" />
            <h4 className={styles.blog__item_title}>{title}</h4>
            <p className={styles.blog__item_text}>{previewContent}</p>
            <Link href={`/blog/${url}`}>
                <a>
                    <button className={styles.blog__item_btn}>
                        <p>Подробнее</p>
                        <div className={styles.blog__btn_arrow}>
                            <img src="/images/blog-arrow.png" alt="" />
                        </div>
                    </button>
                </a>
            </Link>
        </div>
    );
};

export default BlogPostItem;
