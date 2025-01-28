import styles from "./style.module.css";
import jobifyLogo from '../../../assets/icons/logoJobify.svg';
import image from '../../../assets/images/Rectangle 55.png';
import { Link } from 'react-router-dom';

export default function ResetPasswordTwo({ isEmailType }) {
    return (
        <div className={styles.resetPassword}>
            <img src={jobifyLogo} width={119} height={38} alt="logo Jobify" />
            <div className={styles.resetPasswordContent}>
                <img 
                    src={image}
                    width={242}
                    height={123}
                    alt="number confirm"
                />
                <h2>Инструкция была выслана на {isEmailType ? 'указанную почту!' : 'указанный номер'}</h2>
                <p>Проверьте {isEmailType ? 'Вашу почту' : 'Ваши сообщения'} на наличие письма</p>
            </div>
            <Link to='#'>Продолжить</Link>
        </div>
    );
}
