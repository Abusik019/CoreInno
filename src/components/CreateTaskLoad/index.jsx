import styles from "./style.module.css";
import { useState, useEffect } from "react";

let action = 0

export default function CreateTaskLoad({ prev, next, setPage, maxPage, disabled = false, nextText = "Продолжить", onNext = () => {} }) {
    
    const [progress, setProgress] = useState((action === 1 || action === 0) ? (action === 0 ? 0 : prev) * (100 / maxPage) : (next) * (100 / maxPage));
    useEffect(() => {

        const timeoutId = new Promise((resolve, reject) => {
            setTimeout(() => {
                let perm = (action === 1 || action===0) ? (prev + 1) * (100 / maxPage) : (next - 1) * (100 / maxPage);
                resolve(perm)
            }, 1);
        })

        timeoutId.then((result) => {
            setProgress(result);
        })
        
        return () => clearTimeout(timeoutId);
    }, [progress]);

    
    return (
        <div className={styles.createTaskFooter}>
            <div className={styles.progressLine}>
                <div style={{width: `${progress}%`, transition: "width 800ms cubic-bezier(0.29, 0.98, 0.98, 1.01)" }}></div>
            </div>
            <div className={styles.buttonsContainer}>
                <button onClick={() => {setPage(prev === 0 ? 0 : prev); action = prev===0 ? 0 : -1;}}>Вернуться</button>
                <h2>{prev + 1} из {maxPage}</h2>
                <button onClick={() => {
                    onNext();
                    setPage(next);
                    action = 1;
                }} className={disabled ? styles.disabled_btn : ""}>{nextText}</button>
            </div>
        </div>
    );
}
