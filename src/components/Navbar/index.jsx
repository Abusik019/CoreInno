import styles from './style.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import listImg from '../../assets/icons/list.svg';
import questionImg from '../../assets/icons/darkQuestion.svg';
import heartImg from '../../assets/icons/heart.svg';
import notificationImg from '../../assets/icons/notification.svg';
import profileImg from '../../assets/icons/profile.svg';
import freelancersImg from '../../assets/icons/freelancers.svg';
import bagImg from '../../assets/icons/bag.svg';
import freelancerAvatar from '../../assets/images/freelancer.png';
import arrowImg from '../../assets/icons/arrow.svg';
import fillInImg from '../../assets/icons/fill-in.svg';
import themeImg from '../../assets/icons/chooseTheme.svg';
import inviteImg from '../../assets/icons/addEmployees.svg';
import settingImg from '../../assets/icons/setting.svg';
import exitImg from '../../assets/icons/exit.svg';
import jobifyLogo from '../../assets/icons/logoJobify.svg';
import wallerImg from '../../assets/icons/wallet.svg';
import connectImg from '../../assets/icons/connects.svg';
import { TabsComponent } from '../TabsComponent';

export const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isNavbarDropdown, setIsNavbarDropdown] = useState({order: false, work: false, notifications: false, profile: false});

    const toggleDropdown = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    const toggleNavDropdown = (item) => {
        setIsNavbarDropdown((prev) => {
            const updatedState = Object.keys(prev).reduce((acc, key) => {
                acc[key] = key === item ? !prev[key] : false;
                return acc;
            }, {});
            return updatedState;
        });
    };
    
    
    const removeToken = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

  return (
    <div className={styles.navbar}>
        <div className={styles.leftSide}>
            <img 
                src={jobifyLogo}
                width={119}
                height={38}
                alt='logo Jobify'
            />
            <div className={styles.searchWrapper}>
                <div className={styles.inputWrapper}>
                    <input type="search" placeholder='Поиск'/>
                    <button className={styles.searchDropdown} onClick={toggleDropdown}>
                        <img 
                            src={listImg} 
                            width={20}
                            height={20}
                            alt="list" 
                        />
                    </button>
                    <div className={`${styles.inputDropdown} ${isDropdownVisible ? styles.visible : ''}`}>
                        <Link to='#'>
                            <img 
                                src={freelancersImg} 
                                width={20}
                                height={20}
                                alt="freelancers" 
                            />
                            <h2>Фрилансеры</h2>
                        </Link>
                        <Link to='#'>
                            <img 
                                src={listImg} 
                                width={20}
                                height={20}
                                alt="list" 
                            />
                            <h2>Заказы</h2>
                        </Link>
                        <Link to='#'>
                            <img 
                                src={bagImg} 
                                width={20}
                                height={20}
                                alt="bag" 
                            />
                            <h2>Объявления</h2>
                        </Link>
                    </div>
                </div>
                <button className={styles.searchQuestions}>
                    <img 
                        src={questionImg}
                        width={24}
                        height={24}
                        alt="question" 
                    />
                </button>
            </div>
        </div>
        <div className={styles.rightSide}>
            <ul className={styles.navPanel}>
                <li>
                    <Link to="#" onClick={() => toggleNavDropdown('order')}>Найти заказ</Link>
                    <div className={`${styles.orderDropdown} ${isNavbarDropdown.order ? styles.visible : ''}`}>
                        <Link>Биржа заказов</Link>
                        <Link>Сохраненные заказы</Link>
                        <Link>Мои отклики</Link>
                    </div>
                </li>
                <li>
                    <Link to="#" onClick={() => toggleNavDropdown('work')}>Работа</Link>
                    <div className={`${styles.freelancersDropdown} ${isNavbarDropdown.work ? styles.visible : ''}`}>
                        <Link>Текущая работа</Link>
                        <Link>История работы</Link>
                        <Link>Предложения о работе</Link>
                    </div>
                </li>
                <li><Link to="#">Чат</Link></li>
            </ul>
            <div className={styles.navbarActions}>
                <Link>
                    <img 
                        src={heartImg}
                        width={24}
                        height={24}
                        alt="heart" 
                    />
                </Link>
                <button onClick={() => toggleNavDropdown('notifications')}>
                    <img 
                        src={notificationImg}
                        width={24}
                        height={24}
                        alt="notification" 
                    />
                </button>
                <div className={`${styles.notifictionsDropdown} ${isNavbarDropdown.notifications ? styles.visible : ''}`}>
                    <div className={styles.notificationsTitleBlock}>
                        <h2>Уведомления</h2>
                        <button>Прочитать все</button>
                    </div>
                    <TabsComponent />
                </div>
                <button onClick={() => toggleNavDropdown('profile')}>
                    <img 
                        src={profileImg}
                        width={32}
                        height={32}
                        alt="profile" 
                    />
                </button>
                <div className={`${styles.profileDropdown} ${isNavbarDropdown.profile ? styles.visible : ''}`}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>
                            <img 
                                src={freelancerAvatar} 
                                width={48}
                                height={48}
                                alt="profile image" 
                            />
                            <div className={styles.nameData}>
                                <h2>Александр Блок</h2>
                                <h3>Город, Страна</h3>
                            </div>
                        </div>
                        <div className={styles.fillProfile}>
                            <div className={styles.fillProfileContent}>
                                <h2>Заполнить профиль</h2>
                                <Link to='#'>
                                    <img 
                                        src={arrowImg}
                                        width={32}
                                        height={10}
                                        alt="arrow" 
                                    />
                                </Link>
                            </div>
                            <div className={styles.fillInProgress}>
                                <img 
                                    src={fillInImg} 
                                    width={175}
                                    height={10}
                                    alt="fill in" 
                                />
                                <h2>76%</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.profileLine}></div>
                    <ul className={styles.profileActions}>
                        <li>
                            <div>
                                <img 
                                    src={themeImg} 
                                    width={24}
                                    height={24}
                                    alt="choose theme" 
                                />
                                <h2>Выбранная тема</h2>
                            </div>
                            <h3>Light</h3>
                        </li>
                        <li>
                            <div>
                                <img 
                                    src={wallerImg} 
                                    width={24}
                                    height={24}
                                    alt="choose theme" 
                                />
                                <h2>Ваш баланс</h2>
                            </div>
                            <h3>3200 ₽</h3>
                        </li>
                        <li>
                            <div>
                                <img 
                                    src={connectImg} 
                                    width={24}
                                    height={24}
                                    alt="choose theme" 
                                />
                                <h2>Коннекты</h2>
                            </div>
                            <h3>12</h3>
                        </li>
                        <li>
                            <div>
                                <img 
                                    src={inviteImg} 
                                    width={24}
                                    height={24}
                                    alt="invite employees" 
                                />
                                <Link to='#'>Пригласить сотрудника</Link>
                            </div>
                        </li>
                        <li>
                           <div>
                            <img 
                                    src={settingImg}
                                    width={24}
                                    height={24}
                                    alt="setting"
                                />
                                <Link to='#'>Настройки</Link>
                           </div>
                        </li>
                        <li>
                            <div>
                                <img 
                                    src={exitImg} 
                                    width={24}
                                    height={24}
                                    alt="exit" 
                                />
                                <h2 onClick={() => removeToken()}>Выход</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
