import styles from './styles.module.css';
import unionImg from '../../../assets/images/union.svg';
import questionImg from '../../../assets/icons/question.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CreateTaskPageOne() {
    const [questionVisible, setQuestionVisible] = useState(false);

    const toggleQuestionVisible = () => {
        setQuestionVisible((prev) => !prev);
    };

  return (
    <div className={styles.createTask}>
        <div className={styles.createTaskTitleBlock}>
            <h2>Добро пожаловать в <span>Giglink!</span><br/>Создайте и разместите своё первое задание!</h2>
            <p>Разместив объявление, Вы гораздо быстрее найдете исполнителя! Наша система искусственного интеллекта поможет Вам создать и опубликовать задание с молниеносной скоростью!</p>
            <div className={styles.createTaskButtons}>
                <div className={styles.nextWithAI}>
                    <Link to='#'>Продолжить с ИИ</Link>
                    <button onClick={toggleQuestionVisible}>
                        <img 
                            src={questionImg} 
                            width={24}
                            height={24}
                            alt="Подсказка" 
                        />
                    </button>
                    <div className={`${styles.question} ${questionVisible ? styles.visible : ''}`}>Lorem ipsum dolor sit amet dolor sit ame consectetur. <span>Подробнее</span></div>
                </div>
                <Link to='/create-task-1'>Продолжить без ИИ</Link>
            </div>
        </div>
        <img 
            src={unionImg}
            width={446}
            height={446}
            alt='union photo'
        />
    </div>
  )
}
