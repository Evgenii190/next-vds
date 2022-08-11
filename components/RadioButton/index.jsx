import React, { useRef, useState } from "react";
import styles from "./index.module.css";

const RadioButton = ({ label, value, checked, onChange }) => {
    return (
        <div>
            <label className={styles.container}>
                {label}
                <input
                    type="radio"
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                <span className={styles.checkmark}></span>
            </label>
        </div>
    );
};

export default RadioButton;
