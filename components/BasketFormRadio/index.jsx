import React, { useState } from "react";
import RadioButton from "../RadioButton";
import styles from "./index.module.css";

const RadioForm = ({ setFormMounting }) => {
    const [selectRadio, setSelectRadio] = useState("yes");

    const isRadioSelected = (value) => {
        return selectRadio === value;
    };

    const handleRadioClick = (e) => {
        setSelectRadio(e.currentTarget.value);
        setFormMounting(e.currentTarget.value);
    };
    return (
        <div className={styles.radio__items}>
            <div className={styles.radio__item}>
                <RadioButton
                    label={"Да"}
                    value={"yes"}
                    checked={isRadioSelected("yes")}
                    onChange={handleRadioClick}
                />
            </div>
            <RadioButton
                label={"Нет"}
                value={"no"}
                checked={isRadioSelected("no")}
                onChange={handleRadioClick}
            />
        </div>
    );
};

export default RadioForm;
