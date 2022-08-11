import { createContext, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/globals.css";

export const Context = createContext("provider");
export const SubTitleContext = createContext("provider");
export const FiltersContext = createContext("provider");

function MyApp({ Component, pageProps }) {
    const [products, setProducts] = useState([]);
    const [subCategory, setSubCategory] = useState(null);
    const [subTitle, setSubTitle] = useState("");
    const [filterQuery, setFilterQuery] = useState([]);

    return (
        <Context.Provider
            value={[products, setProducts, subCategory, setSubCategory]}
        >
            <FiltersContext.Provider value={[filterQuery, setFilterQuery]}>
                <SubTitleContext.Provider value={[subTitle, setSubTitle]}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </SubTitleContext.Provider>
            </FiltersContext.Provider>
        </Context.Provider>
    );
}

export default MyApp;
