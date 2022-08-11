import React, { useEffect } from "react";
import { useState } from "react";
import ShopService from "../../services/ShopService";
import styles from "./HeaderTabs.module.css";

import TabItem from "./TabItem/TabItem";

const HeaderTabs = React.memo(() => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await ShopService.getCategories();

            console.log(categories);

            setCategories(categories);
        };

        fetchCategories();
    }, []);

    return (
        <div className={styles.header__tabs}>
            {categories.map(({ title, id }, index) => (
                <TabItem
                    key={title + index}
                    title={title}
                    id={id}
                    index={index}
                    active={activeTab}
                    setActive={setActiveTab}
                />
            ))}
        </div>
    );
});

export default HeaderTabs;
