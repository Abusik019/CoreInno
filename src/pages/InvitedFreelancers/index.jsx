import styles from "./style.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';


import activeImg from '../../assets/images/freelancer.png';
import arrowImg from '../../assets/icons/smallArrow.svg';
import chatImg from '../../assets/icons/chat.svg';

export default function InvitedFreelancers() {
    const [list, setList] = useState([1]);
    const [isHideHistory, setIsHideHistory] = useState(false);

    return (
        <>
            {list.length ? (
                <div className={styles.invitedFreelancers} >
                    <div className={styles.activeOffers}>
                        <h2>Приглашенные исполнители</h2>
                        <h3>Активные офферы <span>(2)</span></h3>
                        <p>Здесь видны все ваши офферы, еще не получившие ответа</p>
                        <ul className={styles.offersList}>
                            <li>
                                <h2>Название задания</h2>
                                <h3>Дата оффера: 21.02.2024</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Non urna pellentesque libero lobortis turpis gravida. Posuere purus convallis quam convallis duis montes est ornare lorem. Aliquam ipsum sit sit aliquam</p>
                                <div className={styles.offerInfo}>
                                    <Link to="#">
                                        <img src={activeImg} width={36} height={36} alt="avatar" />
                                        <div className={styles.freelancerInfo}>
                                            <h2>Светлана Бурова <span>5.0</span></h2>
                                            <h3>Россия, Казань</h3>
                                        </div>
                                    </Link>
                                    <Link to="#">Перейти в чат</Link>
                                </div>
                            </li>
                            <li>
                                <h2>Название задания</h2>
                                <h3>Дата оффера: 21.02.2024</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Non urna pellentesque libero lobortis turpis gravida. Posuere purus convallis quam convallis duis montes est ornare lorem. Aliquam ipsum sit sit aliquam</p>
                                <div className={styles.offerInfo}>
                                    <Link to="#">
                                        <img src={activeImg} width={36} height={36} alt="avatar" />
                                        <div className={styles.freelancerInfo}>
                                            <h2>Светлана Бурова <span>5.0</span></h2>
                                            <h3>Россия, Казань</h3>
                                        </div>
                                    </Link>
                                    <Link to="#">Перейти в чат</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.historyOfOffers}>
                        <button className={styles.hideBtn} onClick={() => setIsHideHistory((prev) => !prev)}>
                            <img src={arrowImg} width={24} height={24} alt="arrow" style={{transform: isHideHistory ? 'rotate(-90deg)' : 'rotate(0deg)'}}/>
                        </button>
                        <h3>История офферов <span>(3)</span></h3>
                        <p>Здесь вы можете видеть все ваши отклики</p>
                        {!isHideHistory && (
                            <motion.ul 
                                className={styles.offersHistoryList}
                                initial={{ opacity: 0, maxHeight: 0 }}
                                animate={{ opacity: 1, maxHeight: "500px" }}  // Указываем большое значение для maxHeight
                                exit={{ opacity: 0, maxHeight: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <li>
                                    <div>
                                        <h2><a href="#">Название задания</a></h2>
                                        <h3>Дата оффера: 21.02.2024</h3>
                                        <h4>Отлик отклонен</h4>
                                    </div>
                                    <Link to="#"><img src={chatImg} width={24} height={24} alt="chat" /></Link>
                                </li>
                                <li>
                                    <div>
                                        <h2><a href="#">Название задания</a></h2>
                                        <h3>Дата оффера: 21.02.2024</h3>
                                        <h4>Отлик отклонен</h4>
                                    </div>
                                    <Link to="#"><img src={chatImg} width={24} height={24} alt="chat" /></Link>
                                </li>
                            </motion.ul>
                        )}
                    </div>
                </div>
            ) : (
                <div className={styles.empty}>
                    <h1>Пока что здесь ничего нет</h1>
                </div>
            )}
        </>
    );
}
