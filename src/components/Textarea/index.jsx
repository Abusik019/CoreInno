import { useState } from "react";
import styles from "./style.module.css";

export const Textarea = ({ value }) => {
    const [textareaValue, setTextareaValue] = useState(value.length);

    return (
        <>
            <textarea
                maxLength={5000}
                value={value}
                onInput={(e) => setTextareaValue(e.target.value.length)}
                className={styles.textarea}
            />
            <p className={styles.description}>{textareaValue}/5000</p>
        </>
    );
};
