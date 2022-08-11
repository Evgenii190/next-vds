import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import styles from "./Range.module.css";

const Range = ({ min, max }) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const onChangeHandler = (e) => {
        setMaxValue(e[1]);
        setMinValue(e[0]);
    };

    const onChange = ({ target: { value } }, func) => {
        if (+value > max) {
            return;
        }
        if (minValue > maxValue || maxValue < minValue) {
            setMinValue(min);
            setMaxValue(max);
            return;
        }
        if (value == "") {
            func(+"0");
            return;
        }
        func((prev) => (/\d+/.test(Number(value)) ? value : prev));
    };
    return (
        <div>
            <div className={styles.range__values}>
                <div className={styles.range__value}>
                    <input
                        className={styles.range__input}
                        type="text"
                        value={minValue}
                        onChange={(e) => onChange(e, setMinValue)}
                    />
                    {String(minValue).length <= 7 ? <p>от</p> : null}
                </div>
                <div className={styles.range__value}>
                    <input
                        className={styles.range__input}
                        type="text"
                        value={maxValue}
                        onChange={(e) => onChange(e, setMaxValue)}
                    />
                    {String(maxValue).length <= 7 ? <p>до</p> : null}
                </div>
            </div>
            <div className={styles.range}>
                <Slider
                    range
                    defaultValue={[min, max]}
                    value={[minValue, maxValue]}
                    min={min}
                    max={max}
                    railStyle={{
                        background: "#fff",
                        opacity: 0.1,
                        height: "1px",
                    }}
                    handleStyle={[
                        {
                            height: "20px",
                            width: "20px",
                            bottom: "-2px",
                            background: "#33292B",
                            border: "3px solid #FFC274",
                        },
                        {
                            height: "20px",
                            width: "20px",
                            bottom: "-2px",
                            background: "#33292B",

                            border: "3px solid #FFC274",
                        },
                    ]}
                    onChange={onChangeHandler}
                    allowCross={false}
                />
            </div>
        </div>
    );
};

export default Range;
