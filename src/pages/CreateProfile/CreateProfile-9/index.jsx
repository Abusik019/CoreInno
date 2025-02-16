import styles from "./style.module.css";
import jobifyImg from "../../../assets/icons/logoJobify.svg";
import pcImg from '../../../assets/images/pc.png';
import { Link } from 'react-router-dom';

export default function CreateProfilePageNine() {
    return (
        <div className={styles.createProfile}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <img 
                    src={pcImg}
                    width={311}
                    height={233}
                    alt="PC" 
                />
                <h2>Отлично, профиль был успешно заполнен</h2>
                <h3>Изменить данные можно в любой момент в <Link to="">Настройках</Link></h3>
            </div>
            <Link to="#">Продолжить</Link>
        </div>
    );
}
