import React from "react";
import BlogPostItem from "./BlogPostItem/BlogPostItem";
import styles from "./BlogPosts.module.css";

const BlogPosts = ({ posts }) => {
    return (
        <div className={styles.blog_page__items}>
            {posts.map(({ title, photo, slug, previewContent }) => {
                return (
                    <BlogPostItem
                        key={photo}
                        url={slug}
                        title={title}
                        previewContent={previewContent}
                        photo={photo}
                    />
                );
            })}
        </div>
    );
};

export default BlogPosts;
