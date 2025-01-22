import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import pcImg from '../../../assets/images/pc.png';

export default function CreateTaskPageEight() {
    return (
        <div className={styles.createTask}>
           <div className={styles.createTaskConatiner}>
                <img 
                    src={pcImg}
                    width={311}
                    height={233}
                    alt="PC" 
                />
                <h2>Ваш заказ был успешно опубликован!</h2>
                <Link to='#'>К заказу</Link>
           </div>
        </div>
    );
}
