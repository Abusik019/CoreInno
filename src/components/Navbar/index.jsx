import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TabsComponent } from "../TabsComponent";

import whiteHeartImg from "../../assets/icons/whiteHeart.svg";
import heartImg from "../../assets/icons/heart.svg";
import whiteNotificationImg from "../../assets/icons/whiteNotification.svg";
import notificationImg from "../../assets/icons/notification.svg";
import avatarImg from "../../assets/images/defaultAvatar2.jpg";
import arrowImg from "../../assets/icons/smallArrow.svg";
import settingImg from "../../assets/icons/setting.svg";
import exitImg from "../../assets/icons/exit.svg";
import whiteJobifyImg from "../../assets/icons/whiteLogoJobify.svg";
import jobifyImg from "../../assets/icons/logoJobify.svg";
import wallerImg from "../../assets/icons/wallet.svg";
import supportImg from "../../assets/icons/support.svg";

export const Navbar = ({ theme }) => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.accessToken);
    const userInfo = useSelector((state) => state.auth.userInfo);

    const [isShowSearch, setIsShowSearch] = useState(false);
    const [isReadNot, setIsReadNot] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isNavbarDropdown, setIsNavbarDropdown] = useState({
        order: false,
        work: false,
        notifications: false,
        profile: false,
    });

    const orderDropdownRef = useRef(null);
    const workDropdownRef = useRef(null);
    const notificationsDropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);
    const searchRef = useRef(null);

    const orderButtonRef = useRef(null);
    const workButtonRef = useRef(null);
    const notificationsButtonRef = useRef(null);
    const profileButtonRef = useRef(null);

    useEffect(() => {
        setIsLogin(!!token);
    }, [token]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const target = event.target;

            if (
                !orderDropdownRef.current?.contains(target) &&
                !workDropdownRef.current?.contains(target) &&
                !notificationsDropdownRef.current?.contains(target) &&
                !profileDropdownRef.current?.contains(target) &&
                !searchRef.current?.contains(target) &&
                !orderButtonRef.current?.contains(target) &&
                !workButtonRef.current?.contains(target) &&
                !notificationsButtonRef.current?.contains(target) &&
                !profileButtonRef.current?.contains(target)
            ) {
                setIsNavbarDropdown({
                    order: false,
                    work: false,
                    notifications: false,
                    profile: false,
                });
                setIsShowSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
    };

    return (
        <div className={`${styles.navbar} ${theme === 'light' ? styles.light : '' }`} style={{backgroundColor: theme === 'dark' ? '#000' : '#fff'}}>
            <div className={styles.leftSide}>
                <Link to="/">
                    <img src={theme === 'dark' ? whiteJobifyImg : jobifyImg} width={102} height={42} alt="Jobify logo" />
                </Link>
                <ul className={styles.navPanel}>
                    <li>
                        {!isLogin && <Link to="/list-orders">Заказы</Link>}
                        {isLogin && (
                            <>
                                <h2
                                    ref={orderButtonRef}
                                    onClick={() => toggleNavDropdown("order")}
                                    style={{ opacity: isNavbarDropdown.order && "1" }}
                                >
                                    Заказы
                                </h2>
                                <div
                                    ref={orderDropdownRef}
                                    className={`${styles.orderDropdown} ${isNavbarDropdown.order ? styles.visible : ""}`}
                                >
                                    <Link to="/create-task">Разместить заказ</Link>
                                    <Link to="/my-orders">Мои заказы</Link>
                                </div>
                            </>
                        )}
                    </li>
                    <li>
                        <h2
                            ref={workButtonRef}
                            onClick={() => toggleNavDropdown("work")}
                            style={{ opacity: isNavbarDropdown.work && "1" }}
                        >
                            Фрилансеры
                        </h2>
                        <div
                            ref={workDropdownRef}
                            className={`${styles.freelancersDropdown} ${isNavbarDropdown.work ? styles.visible : ""}`}
                        >
                            <Link to="/list-freelancer">Каталог</Link>
                            {isLogin && <Link to="/recently-viewed-freelancer">Недавно просмотренные</Link>}
                            {isLogin && <Link to="#">Нанятые исполнители</Link>}
                            {isLogin && <Link to="/invited-freelancers">Приглашенные исполнители</Link>}
                            {!isLogin && <Link to="/list-freelancer">Список фрилансеров</Link>}
                        </div>
                    </li>
                    <li>
                        <Link to="#">Наш курс</Link>
                    </li>
                    {isLogin && (
                        <li>
                            <Link to="/chat">Чат</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.navbarActions}>
                    <div className={styles.inputWrapper} ref={searchRef}>
                        <input
                            type="search"
                            className={`${styles.searchInput} ${isShowSearch ? styles.visible : ""}`}
                            onClick={() => setIsShowSearch(true)}
                        />
                    </div>
                    {isLogin && (
                        <Link to="/favorites">
                            <img src={theme === 'dark' ? whiteHeartImg : heartImg} width={24} height={24} alt="heart" />
                        </Link>
                    )}
                    {isLogin && (
                        <button ref={notificationsButtonRef} onClick={() => toggleNavDropdown("notifications")}>
                            <img src={theme === 'dark' ? whiteNotificationImg : notificationImg} width={24} height={24} alt="notification" />
                        </button>
                    )}
                    {!isLogin && (
                        <Link className={styles.login} to="/login">
                            Войти
                        </Link>
                    )}
                    <div
                        ref={notificationsDropdownRef}
                        className={`${styles.notifictionsDropdown} ${isNavbarDropdown.notifications ? styles.visible : ""}`}
                    >
                        <div className={styles.notificationsTitleBlock}>
                            <h2>Уведомления</h2>
                            <button onClick={() => setIsReadNot((prev) => !prev)}>
                                {isReadNot ? "Очистить все" : "Прочитать все"}
                            </button>
                        </div>
                        <TabsComponent />
                    </div>
                    {isLogin && (
                        <button ref={profileButtonRef} className={styles.profileBtn} onClick={() => toggleNavDropdown("profile")}>
                            <img
                                src={userInfo?.avatarUrl ? userInfo.avatarUrl : avatarImg}
                                width={48}
                                height={48}
                                alt="avatar"
                                style={{ borderRadius: "12px", objectFit: "contain" }}
                            />
                        </button>
                    )}
                    <div ref={profileDropdownRef} className={`${styles.profileDropdown} ${isNavbarDropdown.profile ? styles.visible : ""}`}>
                        <div className={styles.profileInfo}>
                            <div className={styles.profileName}>
                                <img
                                    src={userInfo?.avatarUrl ? userInfo.avatarUrl : avatarImg}
                                    width={48}
                                    height={48}
                                    alt="avatar"
                                    style={{ borderRadius: "12px" }}
                                />
                                <div className={styles.nameData}>
                                    <h2>{userInfo?.firstName} {userInfo?.lastName}</h2>
                                    {userInfo?.country && <h3>{userInfo.country}</h3>}
                                </div>
                            </div>
                            <div className={styles.fillProfile}>
                                <div className={styles.fillProfileContent}>
                                    <Link to="/create-profile">
                                        <h2>Заполнить профиль</h2>
                                        <img
                                            src={arrowImg}
                                            width={14}
                                            height={14}
                                            alt="arrow"
                                            style={{ transform: "rotate(-90deg)", opacity: "0.5" }}
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
                                    <img src={wallerImg} width={24} height={24} alt="choose theme" />
                                    <h2>Ваш баланс</h2>
                                </div>
                                <h3>3200 ₽</h3>
                            </li>
                            <li>
                                <div>
                                    <img src={supportImg} width={24} height={24} alt="support" />
                                    <Link to="/support-chat">Чат с поддержкой</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={settingImg} width={24} height={24} alt="setting" />
                                    <Link to="/setting-account">Настройки</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={exitImg} width={24} height={24} alt="exit" />
                                    <h2 onClick={removeToken}>Выход</h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
