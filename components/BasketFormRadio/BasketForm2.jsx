import React, { useState } from "react";
import RadioButton from "../RadioButton";
import styles from "./index.module.css";

const RadioForm2 = ({ setFormPay }) => {
    const [selectRadio, setSelectRadio] = useState("Банковской картой в офисе");

    const isRadioSelected = (value) => selectRadio === value;

    const handleRadioClick = (e) => {
        setSelectRadio(e.currentTarget.value);
        setFormPay(e.currentTarget.value);
    };
    return (
        <>
            <RadioButton
                label={"Банковской картой в офисе"}
                value={"Банковской картой в офисе"}
                checked={isRadioSelected("Банковской картой в офисе")}
                onChange={handleRadioClick}
            />
            <RadioButton
                label={"Наличными курьеру"}
                value={"Наличными курьеру"}
                checked={isRadioSelected("Наличными курьеру")}
                onChange={handleRadioClick}
            />
            <RadioButton
                label={"Наличными в магазине"}
                value={"Наличными в магазине"}
                checked={isRadioSelected("Наличными в магазине")}
                onChange={handleRadioClick}
            />
        </>
    );
};

export default RadioForm2;
