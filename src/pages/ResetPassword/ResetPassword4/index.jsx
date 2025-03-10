import styles from "./style.module.css";
import { Link } from 'react-router-dom';

import jobifyImg from "../../../assets/icons/logoJobify.svg";
import doneImg from '../../../assets/images/bigDone.png';

export default function ResetPasswordFour() {
    return (
        <div className={styles.resetPasswordWrapper}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.resetPassword}>
                <img 
                    src={doneImg}
                    width={99}
                    height={99}
                    alt="done" 
                />
                <h2>Пароль был успешно изменен</h2>
                <h3>Перейзайдите в аккаунт, чтобы изменения вступили в силу</h3>
                <Link className={styles.nextBtn} to="#">Продолжить</Link>
            </div>
        </div>
    );
}
