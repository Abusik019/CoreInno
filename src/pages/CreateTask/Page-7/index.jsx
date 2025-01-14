import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

import editImg from '../../../assets/icons/pen.svg';
import plusImg from '../../../assets/icons/plus.svg';
import avatarImg from '../../../assets/images/freelancer.png';
import humanImg from '../../../assets/icons/human.svg';
import deleteImg from '../../../assets/icons/close.svg';
import closeImg from '../../../assets/icons/close.svg';

export default function CreateTaskPageSeven() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.createTask}>
            <h2>Детали заказа</h2>
            <div className={styles.orderDetails}>
                <div className={styles.orderTitleWrapper}>
                    <div className={styles.orderTitleBlock}>
                       <h2>Дизайн логотипа для кондитерской лавки</h2>
                       <Link to='/create-task-1'>
                            <img 
                                src={editImg}
                                width={24}
                                height={24}
                                alt="edit" 
                            />
                       </Link>
                    </div>
                    <div className={styles.actionsWithTask}>
                        <button className={styles.deleteTask}></button>
                        <button className={styles.saveDraft}>
                            <img 
                                src={plusImg}
                                width={18}
                                height={18}
                                alt="plus" 
                            />
                            <h2>Сохранить черновик</h2>
                        </button>
                    </div>
                </div>
                <div className={styles.orderContent}>
                    <div className={styles.orderContentLeft}>
                        <div className={styles.orderNameWrapper}>
                            <div className={styles.orderName}>
                                <img 
                                    src={avatarImg}
                                    width={54}
                                    height={54}
                                    alt="user avatar"
                                    style={{borderRadius: '8px'}}
                                />
                                <div>
                                    <h2>Имя</h2>
                                    <h3>Москва, Россия</h3>
                                    <h4>номер подтвержден</h4>
                                    <h5>способ оплаты не подтвержден</h5>
                                    <h6>На бирже с 22 мая 2009</h6>
                                </div>
                                <button style={{backgroundColor: "transparent", cursor: "default"}}>
                                    <img 
                                        src={humanImg}
                                        width={12}
                                        height={12}
                                        alt="human" 
                                    />
                                </button>
                            </div>
                            <div className={styles.orderFiles}>
                                <h2>Вложения</h2>
                                <h3>Прикрепленные файлы</h3>
                                <ul>
                                    <li>
                                        <h2>фон.jpg</h2>
                                        <img 
                                            src={deleteImg}
                                            width={18}
                                            height={18}
                                            alt="delete" 
                                        />
                                    </li>
                                    <li>
                                        <h2>логотип.ai</h2>
                                        <img 
                                            src={deleteImg}
                                            width={18}
                                            height={18}
                                            alt="delete" 
                                        />
                                    </li>
                                </ul>
                                <Link to='/create-task-5'>
                                    <img 
                                        src={editImg}
                                        width={16}
                                        height={16}
                                        alt="edit"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.orderDesciprion}>
                            <div>
                                <h2>Описание заказа</h2>
                                <Link to='/create-task-5'>
                                    <img 
                                        src={editImg}
                                        width={16}
                                        height={16}
                                        alt="edit" 
                                    />
                                </Link>
                            </div>
                            <p>Мы ищем талантливого специалиста для создания визуально привлекательного логотипа для кондитерской лавки. Это отличная возможность  внести свой вклад в создание нового и уникального кондитерского дела.</p>
                        </div>
                        <div className={styles.orderCategories}>
                            <div>
                                <h2>Категория заказа</h2>
                                <Link to='/create-task-3'>
                                    <img 
                                        src={editImg}
                                        width={16}
                                        height={16}
                                        alt="edit" 
                                    />
                                </Link>
                            </div>
                            <h2>Графический дизайн</h2>
                        </div>
                    </div>
                    <div className={styles.orderContentRight}>
                        <h2>Детали заказа</h2>
                        <h3>Бюджет</h3>
                        <h4>Фиксированный</h4>
                        <h5>22,000₽ - 30,000₽</h5>
                        <h6>Теги / навыки</h6>
                        <ul className={styles.orderSkills}>
                            <li>Графический дизайн</li>
                            <li>Брендинг</li>
                            <li>Adobe smth</li>
                            <li>Adobe smth</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <Link to="/create-task-5">Вернуться</Link>
                <h2>1 из 12</h2>
                <button onClick={() => setIsModalOpen(true)}>Опубликовать заказ</button>
            </div>
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalText}>
                            <h2>Что произойдет после публикации<br/>заказа?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Vitae non sed suscipit id id posuere. Viverra sem quis?</p>
                        </div>
                        <div className={styles.modalBtns}>
                            <button onClick={() => setIsModalOpen(false)}>Редактировать</button>
                            <button>Опубликовать задание</button>
                        </div>
                        <button className={styles.closeModal} onClick={() => setIsModalOpen(false)}>
                            <img 
                                src={closeImg}
                                width={20}
                                height={20}
                                alt="close modal" 
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
