import styles from "./style.module.css";
import { useState } from "react";
import { GradientText } from '../../components/GradientText/index';
import { Link } from 'react-router-dom';

import avatarImg from "../../assets/images/onlineAvatar.png";
import universityImg from "../../assets/icons/university.svg";
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import like from "../../assets/icons/like.svg";
import verifyImg from "../../assets/icons/verifed.svg";
import rhombusImg from "../../assets/icons/whiteRhombus.svg";
import listImg from "../../assets/icons/list.svg";
import editImg from "../../assets/icons/edit2.svg";
import plusImg from "../../assets/icons/plusWithBg.svg";
import messageImg from "../../assets/icons/bigChat.svg";
import locationImg from "../../assets/icons/location.svg";
import emailImg from "../../assets/icons/email.svg"
import boxImg from '../../assets/icons/empty-box.svg'

const data = {
    first_name: "1",
    last_name: "2",
    location: "3",
    stats: "4",
    isEmail: true,
    desc: "4",
    education: "5",
    sphere: "6",
    reviews: "7",
    announcements: "5"
}

export default function MyCustomerProfile() {
    const [isShowVerify, setIsShowVerify] = useState(false);

    return (
        <div className={styles.profile}>
            <div className={styles.profileInfo}>
                <aside className={styles.aside}>
                    <div className={styles.profileNameContainer}>
                        <div className={styles.profileNameBlock}>
                            <img
                                src={avatarImg}
                                width={90}
                                height={90}
                                alt="profile avatar"
                            />
                            <div className={styles.profileNameContent}>
                                <div>
                                    <h2>{(data.first_name && data.last_name) ? "Жанна Кондратьева" : "FirstName LastName"}</h2>
                                    <button
                                        onMouseEnter={() =>
                                            setIsShowVerify(true)
                                        }
                                        onMouseLeave={() =>
                                            setIsShowVerify(false)
                                        }
                                    >
                                        <img
                                            src={verifyImg}
                                            width={20}
                                            height={20}
                                            alt="verify"
                                        />
                                    </button>
                                    <div className={`${styles.isVerify} ${isShowVerify ? styles.visible : ""}`}>
                                            <h2>Профиль верифицирован</h2>
                                            <div>
                                                Заказчик подтвердил свою
                                                личность
                                                <img
                                                    src={rhombusImg}
                                                    width={24}
                                                    height={24}
                                                    alt="rhombus"
                                                />
                                            </div>
                                    </div>
                                </div>
                                <div className={styles.location}>
                                    <img src={locationImg} alt="location" />
                                    <h3>{data.location ? "Россия, Казань" : "Город, Страна - mm:hh"}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profileActions}>
                            <div>
                                <button>Редактировать</button>
                                <button>Публичный вид</button>
                            </div>
                            <button>
                                <img
                                    src={listImg}
                                    width={20}
                                    height={20}
                                    alt="list"
                                />
                                <span>Мои резюме</span>
                            </button>
                        </div>
                        {data.stats && (
                            <div className={styles.profileStats}>
                                <div>
                                    <h2>₽ 1600</h2>
                                    <h3>Средний чек</h3>
                                </div>
                                <div>
                                    <h2>97 %</h2>
                                    <h3>Успешных заказов</h3>
                                </div>
                                <div>
                                    <h2>310</h2>
                                    <h3>Дней на бирже</h3>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.profileVerification}>
                        <h2>Верификация</h2>
                        {data.isEmail ? 
                            <div className={styles.emailVerify}>
                                <img src={emailImg} alt="email" />
                                <h3>Почта подтверждена</h3>
                            </div> : (
                            <a href='#' className={styles.notVerification}>
                                <div>
                                    <img src={emailImg} alt="email" />
                                    <h3>Подтвердите почту</h3>
                                </div>
                                <img 
                                    src={arrowImg} 
                                    width={32}
                                    height={12}
                                    alt="arrow"
                                />
                            </a>
                        )}
                    </div>
                    <div className={styles.profileEducation}>
                        <h2>Образование</h2>
                        <div className={styles.profileEducationContent}>
                            {data.education ? (
                                <>
                                    <img
                                        src={universityImg}
                                        width={28}
                                        height={28}
                                        alt="university icon"
                                    />
                                    <div>
                                        <h2>ВШЭ</h2>
                                        <h3>Бакалавриат</h3>
                                        <h4>2020 - 2025</h4>
                                    </div>
                                </>
                            ) : (
                                <div className={styles.notEducation}>
                                    <h2>Вы еще не указали ваше образование</h2>
                                    <Link to="#"><GradientText text="Указать образование"/></Link>
                                </div>
                            )}
                        </div>
                        <h2>Сфера деятельности</h2>
                        {data.sphere ? (
                            <ul className={styles.profileSkills}>
                                <li>Разработка и IT</li>
                                <li>Дизайн</li>
                                <li>Маркетинг</li>
                                <li>Видео и аудио</li>
                            </ul>
                        ) : (
                            <div className={styles.notSpheres}>
                                <h2>Пока нет информации о ваших навыках</h2>
                                <Link to="#"><GradientText text="Указать навыки"/></Link>
                            </div>
                        )}
                    </div>
                </aside>
                <div className={styles.profileContent}>
                    <section className={styles.profileBio}>
                        {data.desc ? (
                        <>
                            <h2>Описание</h2>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur. Sit diam
                                imperdiet elit proin non cursus ridiculus. Nam
                                blandit egestas malesuada imperdiet facilisis in non
                                sit. Dictum vel nec metus morbi.Lorem ipsum dolor sit amet consectetur. Tortor
                                aenean nec risus vel. Magna sed augue eget iaculis
                                vitae enim quam molestie. Sagittis sagittis dolor
                                tincidunt sit id aliquam in id.
                            </h3>
                        </>
                        ) : (
                            <>
                                <h2>Описание</h2>
                                <h4>Пока это поле пустует, расскажите немного о себе и своих увлечениях!</h4>
                                <Link to="#"><GradientText text="Рассказать о себе"/></Link>
                            </>
                        )}
                    </section>
                    <section className={styles.profileReviews}>
                        <h2>
                            Ваши отзывы <span>(12)</span>
                        </h2>
                        {data.reviews ? (
                            <>
                                <ul className={styles.reviewsList}>
                                    <li>
                                        <img
                                            src={avatarImg}
                                            width={52}
                                            height={52}
                                            alt="profile avatar"
                                        />
                                        <div className={styles.reviewsContentTitle}>
                                            <div>
                                                <h2>Имя Юзера</h2>
                                                <img
                                                    src={like}
                                                    width={16}
                                                    height={16}
                                                    alt="like"
                                                />
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Faucibus
                                                gravida elit odio neque massa id nibh
                                                pellentesque. Lorem ipsum dolor sit amet
                                                consectetur. Faucibus gravida elit odio neque
                                                massa id nibh pellentesque.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img
                                            src={avatarImg}
                                            width={52}
                                            height={52}
                                            alt="profile avatar"
                                        />
                                        <div className={styles.reviewsContentTitle}>
                                            <div>
                                                <h2>Имя Юзера</h2>
                                                <img
                                                    src={like}
                                                    width={16}
                                                    height={16}
                                                    alt="like"
                                                />
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Faucibus
                                                gravida elit odio neque massa id nibh
                                                pellentesque. Lorem ipsum dolor sit amet
                                                consectetur. Faucibus gravida elit odio neque
                                                massa id nibh pellentesque.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img
                                            src={avatarImg}
                                            width={52}
                                            height={52}
                                            alt="profile avatar"
                                        />
                                        <div className={styles.reviewsContentTitle}>
                                            <div>
                                                <h2>Имя Юзера</h2>
                                                <img
                                                    src={like}
                                                    width={16}
                                                    height={16}
                                                    alt="like"
                                                />
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Faucibus
                                                gravida elit odio neque massa id nibh
                                                pellentesque. Lorem ipsum dolor sit amet
                                                consectetur. Faucibus gravida elit odio neque
                                                massa id nibh pellentesque.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img
                                            src={avatarImg}
                                            width={52}
                                            height={52}
                                            alt="profile avatar"
                                        />
                                        <div className={styles.reviewsContentTitle}>
                                            <div>
                                                <h2>Имя Юзера</h2>
                                                <img
                                                    src={like}
                                                    width={16}
                                                    height={16}
                                                    alt="like"
                                                />
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Faucibus
                                                gravida elit odio neque massa id nibh
                                                pellentesque. Lorem ipsum dolor sit amet
                                                consectetur. Faucibus gravida elit odio neque
                                                massa id nibh pellentesque.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <div className={styles.arrowBtns}>
                                    <button className={styles.prevBtn}>
                                        <img
                                            src={arrowImg}
                                            width={32}
                                            height={12}
                                            alt="arrow"
                                        />
                                    </button>
                                    <button className={styles.nextBtn}>
                                        <img
                                            src={arrowImg}
                                            width={33}
                                            height={12}
                                            alt="arrow"
                                        />
                                    </button>
                                </div>
                            </>
                        ) : (
                            
                            <div className={styles.notReviews}>
                                <div className={styles.divider}></div>
                                <img 
                                    src={messageImg}
                                    width={68}
                                    height={68} 
                                    alt="message" 
                                />
                                <p>У вас нет ни одного отзыва, а чтобы их получить, выполняйте задания</p>
                            </div>
                        )}
                    </section>
                </div>
            </div>
            <section className={styles.announcement}>
                <div className={styles.announcementTitleBlock}>
                    <h2>Ваши объявления</h2>
                    <div>
                        <button>
                            <img 
                                src={editImg} 
                                width={24}
                                height={24}
                                alt="edit" 
                            />
                        </button>
                        <button>
                            <img 
                                src={plusImg} 
                                width={24}
                                height={24}
                                alt="plus" 
                            />
                        </button>
                    </div>
                </div>
                
                {!data.announcements ? (
                    
                    <section className={styles.notAnnouncement}>
                        <div className={styles.divider}></div>
                        <img src={boxImg} alt="box" />
                        <p><span>Вы не выложили ни одного объявления, но можете</span> <Link to="/create-task"><GradientText text="сделать это сейчас"/></Link></p>
                    </section>
                    ) : (
                        <ul className={styles.announcementList}>
                            <li>
                                <div>
                                    <h2>Выбранная тема</h2>
                                    <h3>2 декабря, 00:11</h3>
                                </div>
                                <h2>Контроль и консультирование менеджеров по техническим вопросам</h2>
                                <p>Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей</p>
                            </li>
                            <li>
                                <div>
                                    <h2>Выбранная тема</h2>
                                    <h3>2 декабря, 00:11</h3>
                                </div>
                                <h2>Контроль и консультирование менеджеров по техническим вопросам</h2>
                                <p>Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей</p>
                            </li>
                            <li>
                                <div>
                                    <h2>Выбранная тема</h2>
                                    <h3>2 декабря, 00:11</h3>
                                </div>
                                <h2>Контроль и консультирование менеджеров по техническим вопросам</h2>
                                <p>Нужен человек, способный и распологающий временем для контроля, консультирования и содействия менеджерам в части, касающейся технических вопросов по монтажу ворот и дверей</p>
                            </li>
                        </ul>
                    )
                }
                
                
            </section>
        </div>
    );
}
