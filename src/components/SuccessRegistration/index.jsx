import styles from './style.module.css';
import jobifyLogo from '../../assets/icons/logoJobify.svg';
import image from '../../assets/images/Rectangle 55.png';
import { Link } from 'react-router-dom';

export const SuccesRegistration = () => {
  return (
    <div className={styles.succesReg}>
        <img 
            src={jobifyLogo}
            width={119}
            height={38}
            alt="logo Jobify" 
        />
        <div className={styles.confirmNumber}>
            <img 
                src={image}
                width={311}
                height={233}
                alt="confirm image" 
            />
            <h2>Ваш аккаунт был успешно создан!</h2>
            <Link to='#'>Подтвердить номер</Link>
        </div>
        <Link to='#'>Продолжить</Link>
    </div>
  )
}
