import styles from "./style.module.css";
import { useState } from "react";
import jobifyImg from "../../../assets/icons/logoJobify.svg";

export default function SelectionRole() {
    const [choice, setChoice] = useState('freelancer');

    return (
        <div className={styles.selectionWrapper}>
            <img src={jobifyImg} width={127} height={42} alt="jobify" />
            <div className={styles.selection}>
                <h1>Регистрация аккаунта Jobify</h1>
                <h2>Я хочу зарегистрироваться как:</h2>
                <div className={styles.selects}>
                    <div 
                        className={styles.select} 
                        onClick={() => setChoice('freelancer')}
                        style={{opacity: choice === 'freelancer' ? '1' : '0.8'}}
                    >
                        <div>
                            <h2>Фрилансер</h2>
                            <div className={styles.checkbox}>
                                {choice === 'freelancer' && <div className={styles.checkboxContent}></div>}
                            </div>
                        </div>
                        <p>Я хочу находить клиентов и зарабатывать деньги с заданий!</p>
                    </div>
                    <div 
                        className={styles.select} 
                        onClick={() => setChoice('customer')}
                        style={{opacity: choice === 'customer' ? '1' : '0.8'}}
                    >
                        <div>
                            <h2>Заказчик</h2>
                            <div className={styles.checkbox}>
                                {choice === 'customer' && <div className={styles.checkboxContent}></div>}
                            </div>
                        </div>
                        <p>Я хочу найти исполнителя для реализации  своей идеи!</p>
                    </div>
                </div>
                <button className={styles.nextBtn}>Продолжить</button>
            </div>
        </div>
    );
}
