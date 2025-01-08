import styles from './style.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

export const Navbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isFreelancerDropdownVisible, setIsFreelancerDropdownVisible] = useState(false);
    const [profileDropdownVisible, setIsProfileDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    const toggleFreelancerDropdwon = () => {
        setIsFreelancerDropdownVisible((prev) => !prev);
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownVisible((prev) => !prev);
    };

  return (
    <div className={styles.navbar}>
        <div className={styles.leftSide}>
            <h1>Jobify</h1>
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
                <li><Link to="#">Заказы</Link></li>
                <li>
                    <Link to="#" onClick={toggleFreelancerDropdwon}>Фрилансеры</Link>
                    <div className={`${styles.freelancersDropdown} ${isFreelancerDropdownVisible ? styles.visible : ''}`}>
                        <Link>Каталог</Link>
                        <Link>Мои исполнители</Link>
                        <Link>Недавно просмотренные</Link>
                        <Link>Сохраненные (избранное)</Link>
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
                <button>
                    <img 
                        src={notificationImg}
                        width={24}
                        height={24}
                        alt="notification" 
                    />
                </button>
                <button onClick={toggleProfileDropdown}>
                    <img 
                        src={profileImg}
                        width={32}
                        height={32}
                        alt="profile" 
                    />
                </button>
                <div className={`${styles.profileDropdown} ${profileDropdownVisible ? styles.visible : ''}`}>
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
                            <img 
                                src={themeImg} 
                                width={24}
                                height={24}
                                alt="choose theme" 
                            />
                            <h2>Выбранная тема</h2>
                            <h3>Light</h3>
                        </li>
                        <li>
                            <img 
                                src={inviteImg} 
                                width={24}
                                height={24}
                                alt="invite employees" 
                            />
                            <Link to='#'>Пригласить сотрудника</Link>
                        </li>
                        <li>
                            <img 
                                src={settingImg}
                                width={24}
                                height={24}
                                alt="setting"
                            />
                            <Link to='#'>Настройки</Link>
                        </li>
                        <li>
                            <img 
                                src={exitImg} 
                                width={24}
                                height={24}
                                alt="exit" 
                            />
                            <h2>Выход</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
