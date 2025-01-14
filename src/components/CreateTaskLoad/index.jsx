import styles from "./style.module.css";
import progressImg from "../../assets/images/createTaskProgress.svg";
import { Link } from "react-router-dom";

export default function CreateTaskLoad({ prevLink, nextLink }) {
    return (
        <div className={styles.createTaskFooter}>
            <img
                src={progressImg}
                width="100%"
                height="100%"
                alt="progress line"
            />
            <div className={styles.buttonsContainer}>
                <Link to={prevLink}>Назад</Link>
                <h2>1 из 12</h2>
                <Link to={nextLink}>Продолжить</Link>
            </div>
        </div>
    );
}
