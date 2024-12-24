import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { Order } from '../../components/Order';

import questionImg from '../../assets/icons/question.svg';
import letterImg from '../../assets/icons/letter.svg';
import phoneImg from '../../assets/icons/phone.svg';
import arrow from '../../assets/icons/arrow.svg';
import FreelancersSlider from '../../components/FreelancersSlider';

export default function MyOrders() {
  return (
    <div className={styles.myOrders}>
        <div className={styles.bgElement}></div>
        <section className={styles.lastSteps}>
            <div className={styles.lastStepsTitle}>
                <h2>Выполни оставшиеся шаги </h2>
                <img 
                    src={questionImg}
                    width={24}
                    height={24}
                    alt='question' 
                />
            </div>
            <ul className={styles.steps}>
                <li>
                    <img 
                        src={letterImg}
                        width={46}
                        height={46}
                        alt='letter'
                    />
                    <div className={styles.stepInfo}>
                        <h3>Обязательно к выполнению</h3>
                        <p>Подтвердите адрес электронной почты</p>
                    </div>
                </li>
                <li>
                    <img 
                        src={phoneImg}
                        width={46}
                        height={46}
                        alt='phone'
                    />
                    <div className={styles.stepInfo}>
                        <h3>Выполнено</h3>
                        <p>Вы подтвердили свой номер телефона</p>
                    </div>
                </li>
                <li>
                    <img 
                        src={phoneImg}
                        width={46}
                        height={46}
                        alt='phone'
                    />
                    <div className={styles.stepInfo}>
                        <h3>Выполнено</h3>
                        <p>Вы подтвердили свой номер телефона</p>
                    </div>
                </li>
            </ul>
        </section>
        <section className={styles.myOrdersContent}>
            <div className={styles.myOrdersHeadContent}>
                <div className={styles.myOrdersTitle}>
                    <h2>Мои заказы</h2>
                    <img 
                        src={questionImg}
                        width={24}
                        height={24}
                        alt='question' 
                    />
                </div>
                <button><Link to='#'><span>+</span> Добавить заказ</Link></button>
            </div>
            <ul className={styles.orders}>
                <Order 
                    title='Контроль и консультирование менеджеров по техническим вопросам'
                    desc='Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей'
                    theme='Выбранная тема'
                    date='2 декабря, 00:11'
                    status='Активный'
                    views={263}
                    response={27}
                    price={50000}
                />
                <Order 
                    title='Контроль и консультирование менеджеров по техническим вопросам'
                    desc='Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей'
                    theme='Выбранная тема'
                    date='2 декабря, 00:11'
                    status='Выполнен'
                    views={2563}
                    response={357}
                    price={45000}
                />
            </ul>
            <div className={styles.toAllOrders}>
                <Link to='#'>
                    <h2>Все заказы</h2>
                    <img 
                        src={arrow}
                        width={32}
                        height={10}
                        alt='arrow'
                    />
                </Link>
            </div>
        </section>
        <section className={styles.recommendedFreelancers}>
            <div className={styles.recommendedFreelancersTitle}>
                <h2>Рекомендуемые фрилансеры</h2>
                <button>Обновить</button>
            </div>
            <FreelancersSlider />
        </section>
    </div>
  )
}
