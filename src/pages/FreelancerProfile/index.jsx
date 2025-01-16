import styles from "./style.module.css";
import { Link } from "react-router-dom";
import ProfileSelect from "../../components/SelectProfile";

import avatarImg from "../../assets/images/freelancer.png";
import universityImg from "../../assets/icons/university.svg";
import ratingStarImg from "../../assets/icons/ratingStar.svg";
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import noneImg from '../../assets/images/mockLi.png';
import ReviewsSelect from '../../components/SelectReviews';
import like from '../../assets/icons/like.svg';
import dislike from '../../assets/icons/dislike.svg';

export default function FreelancerProfile() {
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
                            <div>
                                <h2>FirstName LastName</h2>
                                <h3>Город, Страна - локальное время</h3>
                            </div>
                        </div>
                        <div className={styles.profileStats}>
                            <div>
                                <h2>₽ 90 000+</h2>
                                <h3>Всего заработано</h3>
                            </div>
                            <div>
                                <h2>16</h2>
                                <h3>Заказов</h3>
                            </div>
                            <div>
                                <h2>97 %</h2>
                                <h3>Успешных заказов</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.profileVerification}>
                        <h2>Верификация</h2>
                        <h3>Телефон подтвержден</h3>
                        <h4>Документы подтверждены</h4>
                    </div>
                    <div className={styles.profileEducation}>
                        <h2>Образование</h2>
                        <div className={styles.profileEducationContent}>
                            <img
                                src={universityImg}
                                width={28}
                                height={28}
                                alt="university icon"
                            />
                            <div>
                                <h2>Название заведения</h2>
                                <h3>
                                    Степень
                                    <br />
                                    2020 - 2024
                                </h3>
                            </div>
                        </div>
                        <ul className={styles.profileSkills}>
                            <li>навык</li>
                            <li>навык</li>
                            <li>навык</li>
                            <li>навык</li>
                            <li>навык</li>
                            <li>+2</li>
                        </ul>
                    </div>
                    <div className={styles.jobExperience}>
                        <h2>Опыт работы</h2>
                        <ul className={styles.experienceList}>
                            <li>
                                <h2>Название работы</h2>
                                <h3>Месяц Год - Месяц Год</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Massa et id faucibus id fermentum.Sed netus
                                    id gravida dui tellus facilisis nullam
                                    interdum montes. Nullam interdum montes.
                                </p>
                            </li>
                            <li>
                                <h2>Название работы</h2>
                                <h3>Месяц Год - Месяц Год</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Massa et id faucibus id fermentum.Sed netus
                                    id gravida dui tellus facilisis nullam
                                    interdum montes. Nullam interdum montes.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.otherExperience}>
                        <h2>Другой опыт</h2>
                        <ul className={styles.otherExperienceList}>
                            <li>
                                <h2>Название опыта</h2>
                                <h3>Дата</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Massa et id faucibus id fermentum.Sed netus
                                    id gravida dui tellus facilisis nullam
                                    interdum montes. Nullam interdum montes.
                                </p>
                            </li>
                            <li>
                                <h2>Название опыта</h2>
                                <h3>Дата</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Massa et id faucibus id fermentum.Sed netus
                                    id gravida dui tellus facilisis nullam
                                    interdum montes. Nullam interdum montes.
                                </p>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className={styles.profileContent}>
                    <section className={styles.profileBio}>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur, Ultrices
                            risus tincidunt commodo lacus
                        </h2>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur. Sit diam
                            imperdiet elit proin non cursus ridiculus. Nam
                            blandit egestas malesuada imperdiet facilisis in non
                            sit. Dictum vel nec metus morbi.
                        </h3>
                        <h4>
                            Lorem ipsum dolor sit amet consectetur. Tortor
                            aenean nec risus vel. Magna sed augue eget iaculis
                            vitae enim quam molestie. Sagittis sagittis dolor
                            tincidunt sit id aliquam in id. Elementum integer
                            proin lobortis commodo. Odio dolor lacus in sed
                            lorem luctus sodales. Fringilla commodo mattis leo
                            eget ultricies integer tortor proin. Nunc cursus vel
                            consectetur dui commodo. In dolor diam tortor
                            rhoncus id amet adipiscing egestas.
                        </h4>
                    </section>
                    <section className={styles.responseConsultation}>
                        <h2>Запросить консультацию</h2>
                        <div className={styles.blackLine}></div>
                        <div className={styles.consultationCard}>
                            <img
                                src={avatarImg}
                                width={170}
                                height={170}
                                alt="avatar consultant"
                            />
                            <div className={styles.consultationCardContent}>
                                <h2>Название консультации</h2>
                                <h3>Бесплатная 15-ти минутная консультация</h3>
                                <ul>
                                    <li>Тема обсуждения</li>
                                    <li>Тема обсуждения</li>
                                </ul>
                                <Link to="#">Записаться</Link>
                            </div>
                        </div>
                    </section>
                    <section className={styles.doneTasks}>
                        <h2>Выполненные задания</h2>
                        <div className={styles.blackLine}></div>
                        <ProfileSelect />
                        <ul className={styles.taskCards}>
                            <li>
                                <h2>Название задания</h2>
                                <div className={styles.rating}>
                                    <div>
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                    </div>
                                    <h3>5.0</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Malesuada parturient placerat sit at
                                    fermentum. Feugiat sit facilisi aenean et
                                    venenatis maecenas tortor sit arcu.
                                </p>
                                <div className={styles.taskCardPrice}>
                                    <h2>₽ 32 000</h2>
                                    <h3>45 часов</h3>
                                </div>
                            </li>
                            <li>
                                <h2>Название задания</h2>
                                <div className={styles.rating}>
                                    <div>
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                    </div>
                                    <h3>5.0</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Malesuada parturient placerat sit at
                                    fermentum. Feugiat sit facilisi aenean et
                                    venenatis maecenas tortor sit arcu.
                                </p>
                                <div className={styles.taskCardPrice}>
                                    <h2>₽ 32 000</h2>
                                    <h3>45 часов</h3>
                                </div>
                            </li>
                            <li>
                                <h2>Название задания</h2>
                                <div className={styles.rating}>
                                    <div>
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                        <img
                                            src={ratingStarImg}
                                            width={18}
                                            height={18}
                                            alt="star"
                                        />
                                    </div>
                                    <h3>5.0</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Malesuada parturient placerat sit at
                                    fermentum. Feugiat sit facilisi aenean et
                                    venenatis maecenas tortor sit arcu.
                                </p>
                                <div className={styles.taskCardPrice}>
                                    <h2>₽ 32 000</h2>
                                    <h3>45 часов</h3>
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
                    </section>
                </div>
            </div>
            <section className={styles.profilePortfolio}>
                <h2>Портфолио</h2>
                <div className={styles.blackLine}></div>
                <ul className={styles.portfolioTasks}>
                    <li>
                        <img 
                            src={noneImg} 
                            width={284}
                            height={160}
                            alt="task image" 
                        />
                        <h2>Название выполненной работы или кейса</h2>
                    </li>
                    <li>
                        <img 
                            src={noneImg} 
                            width={284}
                            height={160}
                            alt="task image" 
                        />
                        <h2>Название выполненной работы или кейса</h2>
                    </li>
                    <li>
                        <img 
                            src={noneImg} 
                            width={284}
                            height={160}
                            alt="task image" 
                        />
                        <h2>Название выполненной работы или кейса</h2>
                    </li>
                    <li>
                        <img 
                            src={noneImg} 
                            width={284}
                            height={160}
                            alt="task image" 
                        />
                        <h2>Название выполненной работы или кейса</h2>
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
            </section>
            <section className={styles.profileReviews}>
                <h2>Отзывы о фрилансере (12)</h2>
                <div className={styles.blackLine}></div>
                <ReviewsSelect />
                <ul className={styles.reviewsList}>
                    <li>
                        <h2>Помог настроить CRM систему</h2>
                        <div className={styles.reviewsContent}>
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
                                        width={20}
                                        height={20}
                                        alt="like" 
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>Помог настроить CRM систему</h2>
                        <div className={styles.reviewsContent}>
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
                                        width={20}
                                        height={20}
                                        alt="like" 
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>Помог настроить CRM систему</h2>
                        <div className={styles.reviewsContent}>
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
                                        width={20}
                                        height={20}
                                        alt="like" 
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>Помог настроить CRM систему</h2>
                        <div className={styles.reviewsContent}>
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
                                        width={20}
                                        height={20}
                                        alt="like" 
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. Lorem ipsum dolor sit amet consectetur. Faucibus gravida elit odio neque massa id nibh pellentesque. </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <button className={styles.showMoreReviews}>Показать ещё</button>
            </section>
            <section className={styles.announcement}>
                <h2>Объявления фрилансера</h2>
                <div className={styles.blackLine}></div>
                <ul className={styles.announcementList}>
                    <li>
                        <img 
                            src={noneImg}
                            width={284}
                            height={160}
                            alt="order image" 
                        />
                        <div className={styles.orderText}>
                            <h2>Контекстная реклама любых видов под ключ</h2>
                            <h3>от 1000₽</h3>
                            <h4>Срок выполнения: от 48 часов</h4>
                            <Link to='#'>Подробнее</Link>
                        </div>
                    </li>
                    <li>
                        <img 
                            src={noneImg}
                            width={284}
                            height={160}
                            alt="order image" 
                        />
                        <div className={styles.orderText}>
                            <h2>Контекстная реклама любых видов под ключ</h2>
                            <h3>от 1000₽</h3>
                            <h4>Срок выполнения: от 48 часов</h4>
                            <Link to='#'>Подробнее</Link>
                        </div>
                    </li>
                    <li>
                        <img 
                            src={noneImg}
                            width={284}
                            height={160}
                            alt="order image" 
                        />
                        <div className={styles.orderText}>
                            <h2>Контекстная реклама любых видов под ключ</h2>
                            <h3>от 1000₽</h3>
                            <h4>Срок выполнения: от 48 часов</h4>
                            <Link to='#'>Подробнее</Link>
                        </div>
                    </li>
                    <li>
                        <img 
                            src={noneImg}
                            width={284}
                            height={160}
                            alt="order image" 
                        />
                        <div className={styles.orderText}>
                            <h2>Контекстная реклама любых видов под ключ</h2>
                            <h3>от 1000₽</h3>
                            <h4>Срок выполнения: от 48 часов</h4>
                            <Link to='#'>Подробнее</Link>
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
            </section>
        </div>
    );
}
