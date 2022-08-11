import React, { useState } from "react";
import Contacts from "../../components/Contacts/Contacts";
import Order from "../../components/Order/Order";
import PagePatternLayout from "../../layouts/PagePatternLayout";
import styles from "../../styles/blog.module.css";
import Link from "next/link";
import BlogTabs from "../../components/BlogTabs/BlogTabs";
import BlogService from "../../services/BlogService";
import BlogPosts from "../../components/BlogPosts/BlogPosts";

const BlogPage = ({ categories, postsCategory }) => {
    const [posts, setPosts] = useState(postsCategory);

    return (
        <PagePatternLayout
            pageTitle={"Блог"}
            pageText={
                <>
                    <span>Интересные статьи о производстве,</span> <br />
                    монтажу и обслуживании каминов и барбекю
                </>
            }
            isDots={true}
            srcImage={"/images/blog-bg.png"}
        >
            <section className={styles.blog__jobs}>
                <div className="container">
                    <div className={styles.blog__jobs_inner}>
                        <BlogTabs categories={categories} setPosts={setPosts} />
                        <BlogPosts posts={posts} />
                    </div>
                </div>
            </section>
            <Order />
            <Contacts margin={true} />
        </PagePatternLayout>
    );
};

export const getServerSideProps = async (context) => {
    const categories = await BlogService.getAllCategories();
    const initalCategoryId = categories[0].id;

    const postsCategory = await BlogService.getPostsCategory(initalCategoryId);

    return {
        props: { categories, postsCategory },
    };
};

export default BlogPage;
