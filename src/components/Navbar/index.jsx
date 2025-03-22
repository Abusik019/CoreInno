import styles from './style.module.css';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TabsComponent } from '../TabsComponent';
import { fetchUserAuth } from '../../redux/slices/userSlice';

import listImg from '../../assets/icons/list.svg';
import whiteListImg from '../../assets/icons/whiteList.svg';
import heartImg from '../../assets/icons/whiteHeart.svg';
import notificationImg from '../../assets/icons/whiteNotification.svg';
import freelancersImg from '../../assets/icons/freelancers.svg';
import bagImg from '../../assets/icons/bag.svg';
import avatarImg from '../../assets/images/defaultAvatar2.jpg';
import arrowImg from '../../assets/icons/smallArrow.svg';
import settingImg from '../../assets/icons/setting.svg';
import exitImg from '../../assets/icons/exit.svg';
import jobifyImg from '../../assets/icons/whiteLogoJobify.svg';
import wallerImg from '../../assets/icons/wallet.svg';
import supportImg from '../../assets/icons/support.svg';

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.authSlice.token);
    const userAuth = useSelector((state) => state.user.userAuth);

    const [isNavbarDropdown, setIsNavbarDropdown] = useState({order: false, work: false, notifications: false, profile: false, search: false});
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [isReadNot, setIsReadNot] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if(token){
            setIsLogin(true);
        } else{
            setIsLogin(false);
        }
    }, [token])

    useEffect(() => {
        dispatch(fetchUserAuth())
    }, []);

    console.log(userAuth);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsNavbarDropdown((prev) => ({
                    ...prev,
                    search: false
                }));
                setIsShowSearch(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

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
            <Link to="/"><img src={jobifyImg} width={102} height={42} alt="Jobify logo" /></Link>
            <ul className={styles.navPanel}>
                {isLogin && (
                    <li>
                        <h2 onClick={() => toggleNavDropdown('order')} style={{opacity: isNavbarDropdown.order ? '1' : '0.7'}}>Заказы</h2>
                        <div className={`${styles.orderDropdown} ${isNavbarDropdown.order ? styles.visible : ''}`}>
                            <Link to="/create-task">Разместить заказ</Link>
                            <Link to="/my-orders">Мои заказы</Link>
                        </div>
                    </li>
                )}
                {isLogin && (
                    <li>
                        <h2 onClick={() => toggleNavDropdown('work')} style={{opacity: isNavbarDropdown.work ? '1' : '0.7'}}>Фрилансеры</h2>
                        <div className={`${styles.freelancersDropdown} ${isNavbarDropdown.work ? styles.visible : ''}`}>
                            <Link to="/catalog">Каталог</Link>
                            <Link to="/recently-viewed-freelancer">Недавно просмотренные</Link>
                            <Link to="#">Нанятые исполнители</Link>
                            <Link to="/invited-freelancers">Приглашенные исполнители</Link>
                        </div>
                    </li>
                )}
                <li><Link to="#">Наш курс</Link></li>
                {isLogin && <li><Link to="/chat">Чат</Link></li>}
            </ul>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.navbarActions}>
                <div className={styles.searchWrapper} ref={wrapperRef}>
                    <div className={styles.inputWrapper}>
                        <input 
                            type="search" 
                            className={`${styles.searchInput} ${isShowSearch ? styles.visible : ''}`}
                            onClick={() => setIsShowSearch(true)}
                        />
                        <button className={`${styles.searchDropdown} ${isShowSearch ? styles.visible : ''}`} onClick={toggleDropdown}>
                            <img 
                                src={whiteListImg} 
                                width={18}
                                height={18}
                                alt="list" 
                                onClick={() => toggleNavDropdown('search')}
                            />
                        </button>
                        <div className={`${styles.inputDropdown} ${isNavbarDropdown.search ? styles.visible : ''}`}>
                            <Link to='/list-freelancer'>
                                <img 
                                    src={freelancersImg} 
                                    width={20}
                                    height={20}
                                    alt="freelancers" 
                                />
                                <h2>Фрилансеры</h2>
                            </Link>
                            <Link to='/list-orders'>
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
                </div>
                {isLogin &&  
                    <Link to="/favorites">
                        <img 
                            src={heartImg}
                            width={20}
                            height={20}
                            alt="heart" 
                        />
                    </Link>
                }
                {isLogin && 
                    <button onClick={() => toggleNavDropdown('notifications')}>
                        <img 
                            src={notificationImg}
                            width={20}
                            height={20}
                            alt="notification" 
                        />
                    </button>
                }
                {!isLogin && <Link className={styles.login} to='/login'>Войти</Link>}
                <div className={`${styles.notifictionsDropdown} ${isNavbarDropdown.notifications ? styles.visible : ''}`}>
                    <div className={styles.notificationsTitleBlock}>
                        <h2>Уведомления</h2>
                        <button onClick={() => setIsReadNot((prev) => !prev)}>{isReadNot ? "Очистить все" : "Прочитать все"}</button>
                    </div>
                    <TabsComponent />
                </div>
                {isLogin && 
                    <button className={styles.profileBtn} onClick={() => toggleNavDropdown('profile')}>
                        <img 
                            src={userAuth?.avatarUrl ? userAuth.avatarUrl : avatarImg} 
                            width={48}
                            height={48}
                            alt="avatar" 
                            style={{borderRadius: '12px', objectFit: 'contain'}}
                        />
                    </button>
                }
                <div className={`${styles.profileDropdown} ${isNavbarDropdown.profile ? styles.visible : ''}`}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>
                            <img 
                                src={userAuth?.avatarUrl ? userAuth.avatarUrl : avatarImg} 
                                width={48}
                                height={48}
                                alt="avatar" 
                                style={{borderRadius: '12px'}}
                            />
                            <div className={styles.nameData}>
                                <h2>{userAuth?.firstName} {userAuth?.lastName}</h2>
                                {userAuth?.country && <h3>{userAuth.country}</h3>}
                            </div>
                        </div>
                        <div className={styles.fillProfile}>
                            <div className={styles.fillProfileContent}>
                                <h2>Заполнить профиль</h2>
                                <Link to='#'>
                                    <img 
                                        src={arrowImg}
                                        width={14}
                                        height={14}
                                        alt="arrow" 
                                        style={{transform: 'rotate(-90deg)', opacity: '0.5'}}
                                    />
                                </Link>
                            </div>
                            <div className={styles.fillInProgress}>
                                <div className={styles.progress}>
                                    <div></div>
                                </div>
                                <h2>76%</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.profileLine}></div>
                    <ul className={styles.profileActions}>
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
                                    src={supportImg}
                                    width={24}
                                    height={24}
                                    alt="support"
                                />
                                <Link to='/support-chat'>Чат с поддержкой</Link>
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
                                <Link to='/setting-account'>Настройки</Link>
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
