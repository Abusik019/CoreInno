import { useState } from "react";
import styles from "./style.module.css";

export const Textarea = ({ value = "", maxLength = 1000, onChange }) => {
    const [textareaValue, setTextareaValue] = useState(value);
    console.log(value);
    return (
        <>
            <textarea
                maxLength={maxLength}
                value={textareaValue}
                onInput={(e) => setTextareaValue(e.target.value)}
                className={styles.textarea}
                onChange={onChange}
            />
            <span className={styles.description}>{textareaValue.length}/{maxLength}</span>
        </>
    );
};
