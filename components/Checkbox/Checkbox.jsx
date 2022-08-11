import React, { useContext, useEffect } from "react";
import { FiltersContext } from "../../pages/_app";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, isChecked, selectFilter, param }) => {
    const [filterQuery, setFilterQuery] = useContext(FiltersContext);
    const [checked, setChecked] = React.useState(isChecked);

    const changeCheckedHandler = (e) => {
        setChecked(!checked);
    };

    return (
        <label className={styles.container}>
            {label}
            <input
                type="checkbox"
                onChange={changeCheckedHandler}
                defaultChecked={checked}
                onClick={(e) => {
                    selectFilter(e, label, param, checked);
                    changeCheckedHandler();
                }}
            />
            <span className={styles.checkmark}></span>
        </label>
    );
};

export default Checkbox;
