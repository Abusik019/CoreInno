import styles from "./style.module.css";

export const Textarea = ({ value, maxLength = 1000, onInput, placeholder = "" }) => {    
    return (
        <>
            <textarea
                maxLength={maxLength}
                placeholder={placeholder}
                onInput={onInput}
                className={styles.textarea}
            />
            <span className={styles.description}>{value.length}/{maxLength}</span>
        </>
    );
};
