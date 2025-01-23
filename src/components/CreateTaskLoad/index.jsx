import styles from "./style.module.css";

export default function CreateTaskLoad({ prev, next, setPage }) {
    const progress = prev * 16.6;

    return (
        <div className={styles.createTaskFooter}>
            <div className={styles.progressLine}>
                <div style={{width: `${progress}%`}}></div>
            </div>
            <div className={styles.buttonsContainer}>
                <button onClick={() => setPage(prev)}>Назад</button>
                <h2>{prev} из 6</h2>
                <button onClick={() => setPage(next)}>Продолжить</button>
            </div>
        </div>
    );
}
