import React from "react";
import Head from "next/head";
import HeaderTop from "../components/HeaderTop/HeaderTop";

const MainLayout = ({ children, title, description, keywords }) => {
    return (
        <>
            <Head>
                <title>{title || "Богатырь Камин"}</title>
                <meta
                    name="description"
                    content={`Интернет магазин` + description}
                />
                <meta
                    name="keywords"
                    content={keywords || "Интернет магазин, Камины"}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            {children}
        </>
    );
};

export default MainLayout;
