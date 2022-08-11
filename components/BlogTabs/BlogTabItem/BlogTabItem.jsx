import classNames from "classnames";
import Link from "next/link";
import React from "react";
import BlogService from "../../../services/BlogService";
import styles from "./BlogTabItem.module.css";

const BlogTabItem = ({ title, id, setPosts, active, setActive }) => {
    const fetchPostsByCategory = async (idCategory) => {
        const posts = await BlogService.getPostsCategory(idCategory);
        setPosts(posts);
        setActive(id);
        if (id === active) {
            setActive(null);
        }
    };

    return (
        <div
            onClick={() => fetchPostsByCategory(id)}
            className={classNames({
                [styles.blog__tab]: true,
                [styles.blog__tab__active]: id === active,
            })}
        >
            {title}
        </div>
    );
};

export default BlogTabItem;
