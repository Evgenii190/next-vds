import Link from "next/link";
import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Order from "../../components/Order/Order";
import PagePatternLayout from "../../layouts/PagePatternLayout";
import BlogService from "../../services/BlogService";
import styles from "../../styles/post.module.css";

const PostPage = ({ post }) => {
    const createMarkup = (content) => ({ __html: content });

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
            <section className={styles.post}>
                <div className={styles.post__container}>
                    <div>
                        <div
                            dangerouslySetInnerHTML={createMarkup(post.content)}
                        ></div>
                    </div>
                    {/* <div className={styles.post__img}>
                        <img
                            className={styles.post__img}
                            src="/images/post-img.png"
                            alt=""
                        />
                    </div> */}

                    {/* <iframe
                        className={styles.post__video}
                        src="https://www.youtube.com/embed/6mzRtd9dFvI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe> */}
                    <div className={styles.post__button}>
                        <Link href="/blog">
                            <a>
                                <button>Вернуться к новостям</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            <Order />
            <Contacts margin={true} />
        </PagePatternLayout>
    );
};

export const getServerSideProps = async ({ params }) => {
    const post = await BlogService.getPostBySlug(params.slug);

    return {
        props: { post },
    };
};

export default PostPage;
