import React, { useEffect, useState } from "react";
import BlogService from "../../services/BlogService";
import BlogTabItem from "./BlogTabItem/BlogTabItem";
import styles from "./BlogTabs.module.css";

const BlogTabs = ({ categories, setPosts }) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className={styles.blog__tabs}>
            {categories.map(({ slug, id, title }) => {
                return (
                    <BlogTabItem
                        key={slug}
                        id={id}
                        title={title}
                        setPosts={setPosts}
                        active={activeTab}
                        setActive={setActiveTab}
                    />
                );
            })}
        </div>
    );
};

export default BlogTabs;
