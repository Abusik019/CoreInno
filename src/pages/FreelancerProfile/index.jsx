import styles from "./style.module.css";
import { Link } from "react-router-dom";
import ProfileSelect from "../../components/SelectProfile";
import { useState } from "react";
import ReviewsSelect from '../../components/SelectReviews';

import avatarImg from "../../assets/images/freelancer.png";
import universityImg from "../../assets/icons/university.svg";
import ratingStarImg from "../../assets/icons/ratingStar.svg";
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import noneImg from '../../assets/images/mockLi.png';
import like from '../../assets/icons/like.svg';
import dislike from '../../assets/icons/dislike.svg';
import editImg from '../../assets/icons/certificatesEdit.svg';
import plusImg from '../../assets/icons/certificatesPlus.svg';
import uploadImg from '../../assets/icons/uploadResume.svg';
import bagImg from '../../assets/icons/bag.svg';
import cupImg from '../../assets/icons/cup.svg';
import bigBagImg from '../../assets/icons/bigBag.svg';
import chatImg from '../../assets/icons/bigChat.svg';
import boxImg from '../../assets/icons/box.svg';

const data = {
    phoneNumber: '',
    docs: '',
    emailConfirm: '',
    description: '',
    doneTasks: [],
    certificates: [],
    portfolio: [],
    education: {},
    skills: [],
    workExperience: {},
    otherExperience: {},
    reviews: [],
    announcements: []
}

export default function FreelancerProfile() {
    const [isMyProfile, setIsMyProfile] = useState(true);

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
                                <h3>Город, Страна - mm:hh</h3>
                            </div>
                        </div>
                        {!isMyProfile && 
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
                        }
                        {isMyProfile &&
                            <div className={styles.profileActions}>
                                <Link to='/setting-account'>Настройки профиля</Link>
                                <button>Публичный вид</button>
                                <button>
                                    <img 
                                        src={uploadImg}
                                        width={20}
                                        height={20}
                                        alt="upload" 
                                    />
                                    <h2>Загрузить резюме</h2>
                                </button>
                            </div>
                        }
                    </div>
                    <div className={styles.profileVerification}>
                        <h2>Верификация</h2>
                        {data.phoneNumber ? <h3>Телефон подтвержден</h3> : 
                            <Link to='/number-confirm' className={styles.numberConfirm}>
                                <h2>Подтвердить телефон</h2>
                                <img
                                    src={arrowImg}
                                    width={32}
                                    height={12}
                                    alt="arrow"
                                />
                            </Link>
                        }
                        {data.docs ? <h4>Документы подтверждены</h4> : 
                            <Link to='#' className={styles.docsConfirm}>
                                <h2>Подтвердить документы</h2>
                                <img
                                    src={arrowImg}
                                    width={32}
                                    height={12}
                                    alt="arrow"
                                />
                            </Link>
                        }
                        {data.emailConfirm ? <h5>Документы подтверждены</h5> : 
                            <Link to='/email-confirm' className={styles.emailConfirm}>
                                <h2>Подтвердить почту</h2>
                                <img
                                    src={arrowImg}
                                    width={32}
                                    height={12}
                                    alt="arrow"
                                />
                            </Link>
                        }
                    </div>
                    <div className={styles.profileEducation}>
                        <h2>Образование</h2>
                        {!data.education.length 
                            ? 
                                <div className={styles.noInfo}>
                                    <h2>Вы еще не указали ваше образование</h2>
                                    <Link to='/setting-account' className={styles.linkToSettings}>Указать образование</Link>
                                </div>
                            :
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
                        }
                        <h2>Навыки</h2>
                        {!data.skills.length
                            ? 
                                <div className={styles.noInfo}>
                                    <h2>Пока нет информации о ваших навыках</h2>
                                    <Link to='/setting-account' className={styles.linkToSettings}>Указать навыки</Link>
                                </div>
                            :
                                <ul className={styles.profileSkills}>
                                    <li>навык</li>
                                    <li>навык</li>
                                    <li>навык</li>
                                    <li>навык</li>
                                    <li>навык</li>
                                    <li>+2</li>
                                </ul>
                        }
                    </div>
                    <div className={styles.jobExperience}>
                        <h2>Опыт работы</h2>
                        {!data.workExperience.length
                            ? 
                                <div className={styles.noInfo}>
                                    <h2>Вы еще не заполнили поле об опыте работы</h2>
                                    <Link to='/setting-account' className={styles.linkToSettings}>Указать опыт работы</Link>
                                </div>
                            :
                            <ul className={styles.experienceList}>
                                <li>
                                    <img 
                                        src={bagImg}
                                        width={28}
                                        height={28}
                                        alt="job"
                                    />
                                    <div>
                                        <h2>Название работы</h2>
                                        <h3>mm:yy - Сейчас</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img 
                                        src={bagImg}
                                        width={28}
                                        height={28}
                                        alt="job"
                                    />
                                    <div>
                                        <h2>Название работы</h2>
                                        <h3>mm:yy - Сейчас</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        }
                    </div>
                    <div className={styles.otherExperience}>
                        <h2>Другой опыт</h2>
                        {!data.otherExperience.length
                            ? 
                                <div className={styles.noInfo}>
                                    <h2>Пока нет информации о вашем другом опыте</h2>
                                    <Link to='/setting-account' className={styles.linkToSettings}>Указать другой опыт</Link>
                                </div>
                            :
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
                        }
                    </div>
                </aside>
                <div className={styles.profileContent}>
                    <section className={styles.profileBio}>
                        <div>
                            <h2>
                                Lorem ipsum dolor sit amet consectetur, Ultrices
                                risus tincidunt commodo lacus
                            </h2>
                            <button>
                                <img
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        {!data.description ? <h3>Пока это поле пустует, расскажите немного о себе и своих увлечениях!</h3> : 
                            <h3>
                                Lorem ipsum dolor sit amet consectetur. Sit diam
                                imperdiet elit proin non cursus ridiculus. Nam
                                blandit egestas malesuada imperdiet facilisis in non
                                sit. Dictum vel nec metus morbi.
                                <br/>
                                Lorem ipsum dolor sit amet consectetur. Tortor
                                aenean nec risus vel. Magna sed augue eget iaculis
                                vitae enim quam molestie. Sagittis sagittis dolor
                                tincidunt sit id aliquam in id. Elementum integer
                                proin lobortis commodo. Odio dolor lacus in sed
                                lorem luctus sodales. Fringilla commodo mattis leo
                                eget ultricies integer tortor proin. Nunc cursus vel
                                consectetur dui commodo. In dolor diam tortor
                                rhoncus id amet adipiscing egestas.
                            </h3>
                        }
                    </section>
                    {!isMyProfile && 
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
                    }
                    <section className={styles.doneTasks}>
                        <div className={styles.doneTasksTitle}>
                            <h2>Выполненные задания</h2>
                            <button>
                                <img
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        <div className={styles.blackLine}></div>
                        <ProfileSelect />
                        {!data.doneTasks.length ? <h3>Выполненных работ пока что нет</h3> : 
                            <>
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
                            </>
                        }
                    </section>
                    {isMyProfile && 
                        <section className={styles.certificates}>
                            <div className={styles.certificatesTitle}>
                                <h2>Сертификаты</h2>
                                <div className={styles.editBlock}>
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
                            <div className={styles.blackLine}></div>
                            {!data.certificates.length 
                                ?
                                    <div className={styles.noInfoBlock}>
                                        <img 
                                            src={cupImg}
                                            width={68}
                                            height={68}
                                            alt="cup"
                                        />
                                        <div>
                                            Это поле пустует, но вы можете <Link to='#'>добавить свои сертификаты</Link> уже сейчас
                                        </div>
                                    </div>
                                :
                                    <>
                                        <div className={styles.certificatesContent}>
                                            <h2>Название сертификата</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur. Malesuada parturient placerat sit at fermentum. Feugiat sit facilisi aenean et venenatis maecenas tortor sit arcu.</p>
                                            <h3>dd:mm:yy</h3>
                                        </div>
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
                            }
                        </section>
                    }
                </div>
            </div>
            <section className={styles.profilePortfolio}>
                <div className={styles.profilePortfolioTitle}>
                    <h2>Портфолио</h2>
                    <div className={styles.editBlock}>
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
                <div className={styles.blackLine}></div>
                {!data.portfolio.length 
                    ?
                        <div className={styles.noInfoBlock}>
                            <img 
                                src={bigBagImg}
                                width={68}
                                height={68}
                                alt="cup"
                            />
                            <div>
                                Вы не загрузили ни одной работы, но вы можете <Link to='#'>сделать это</Link> уже сейчас
                            </div>
                        </div>
                    :
                        <>
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
                        </>
                }
            </section>
            <section className={styles.profileReviews}>
                {isMyProfile ? <h2>Ваши отзывы ({data.reviews.length})</h2> : <h2> Отзывы о фрилансере ({data.reviews.length})</h2>}
                <div className={styles.blackLine}></div>
                {!data.portfolio.length 
                    ?
                        <div className={styles.noInfoBlock}>
                            <img 
                                src={chatImg}
                                width={68}
                                height={68}
                                alt="cup"
                            />
                            <div>
                                У вас нет ни одного отзыва, а чтобы их получить, выполняйте задания                            </div>
                            </div>
                    :
                        <>
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
                        </>
                }
            </section>
            <section className={styles.announcement}>
                <div className={styles.announcementTitle}>
                    {isMyProfile ? <h2>Ваши объявления</h2> : <h2>Объявления фрилансера</h2>}
                    <div className={styles.editBlock}>
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
                <div className={styles.blackLine}></div>
                {!data.portfolio.length 
                    ?
                        <div className={styles.noInfoBlock}>
                            <img 
                                src={boxImg}
                                width={78}
                                height={78}
                                alt="cup"
                            />
                            <div>
                                Вы не выложили ни одного объявления, но можете <Link to='#'>сделать это сейчас</Link>
                            </div>
                        </div>
                    :
                        <>
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
                        </>
                }
            </section>
        </div>
    );
}
