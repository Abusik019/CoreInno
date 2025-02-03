import styles from "./style.module.css";
import ReviewsSelect from "../../components/SelectReviews";
import { Link } from "react-router-dom";

import avatarImg from "../../assets/images/freelancer.png";
import copyImg from "../../assets/icons/copy.svg";
import shareImg from "../../assets/icons/share.svg";
import mockImg from "../../assets/images/Rectangle 55.png";
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import like from '../../assets/icons/like.svg';
import tgImg from '../../assets/icons/tg.svg';

export default function CommercialAnnouncement() {
    return (
        <div className={styles.announcement}>
            <div className={styles.announcementContainer}>
                <div className={styles.announcementContent}>
                    <div className={styles.announcementTitleBlock}>
                        <h1>Название услуги</h1>
                        <div className={styles.taskInfo}>
                            <h2>Дата публикации: 21.12.2024</h2>
                            <h3>203</h3>
                        </div>
                        <div className={styles.authorInfo}>
                            <img
                                src={avatarImg}
                                width={58}
                                height={58}
                                alt="freelancer avatar"
                            />
                            <ul>
                                <li>Заказчик</li>
                                <li>
                                    Жанна Кондратьева <span>5.0</span>
                                </li>
                                <li>Регион</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.announcementImagesBlock}>
                        <div className={styles.announcementImages}>
                            <img src={mockImg} alt="announcement image" />
                            <div>
                                <img src={mockImg} alt="announcement image" />
                                <img src={mockImg} alt="announcement image" />
                                <img src={mockImg} alt="announcement image" />
                                <img src={mockImg} alt="announcement image" />
                                <img src={mockImg} alt="announcement image" />
                            </div>
                        </div>
                        <ul className={styles.announcementImagesLinks}>
                            <li>
                                <Link to="#">Описание услуги</Link>
                            </li>
                            <li>
                                <Link to="#">Что включено?</Link>
                            </li>
                            <li>
                                <Link to="#">Отзывы</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.announcementDesc}>
                        <h2>Описание задания</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Risus odio
                            ac tellus id quis ante. Eget pharetra sed quam
                            tortor leo blandit. Ac iaculis turpis porttitor
                            lectus sed. Sapien sit elementum pulvinar est vitae
                            diam condimentum.
                            <br />
                            Ipsum non volutpat urna augue amet placerat gravida
                            scelerisque risus. Ut tempor maecenas vestibulum
                            elit at amet amet eget. Neque lorem lorem diam enim
                            vitae dolor magna non sit. Pellentesque eget aliquam
                            suspendisse lacus vitae arcu sem lacus. Eu vitae
                            condimentum quisque non vulputate pharetra. Mi diam
                            eu semper tellus a enim pulvinar. Tincidunt pharetra
                            vel leo enim dictum amet amet quis pellentesque.
                            Arcu at blandit non quis ipsum ipsum iaculis.
                            Aliquam tortor massa duis sit hendrerit viverra
                            aliquam consequat. Massa diam in donec nec commodo
                            quis.
                            <br />
                            Velit tincidunt sem sed vel potenti quisque
                            fringilla. Rhoncus praesent sapien pulvinar
                            ullamcorper sapien quam enim arcu habitasse. Feugiat
                            vestibulum lacus sed donec suscipit vulputate non.
                            Cursus urna nibh erat risus enim. Est ultricies
                            scelerisque mauris euismod. Aliquet lorem tellus
                            sollicitudin sit semper sit viverra eu magnis.
                            Ridiculus odio tincidunt ac sit aliquam adipiscing
                            eu malesuada est. Sit egestas arcu metus sit urna.
                            Aenean cursus molestie posuere convallis scelerisque
                            libero metus. Feugiat arcu molestie gravida nec sem
                            magna odio a etiam. Aliquam nisl et quam
                            pellentesque.
                        </p>
                    </div>
                    <div className={styles.profilePortfolio}>
                        <h2>Портфолио</h2>
                        <div className={styles.grayLine}></div>
                        <ul className={styles.portfolioTasks}>
                            <li>
                                <img
                                    src={mockImg}
                                    alt="task image"
                                />
                            </li>
                            <li>
                                <img
                                    src={mockImg}
                                    alt="task image"
                                />
                            </li>
                            <li>
                                <img
                                    src={mockImg}
                                    alt="task image"
                                />
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
                    </div>
                    <div className={styles.profileReviews}>
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
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur. Faucibus gravida elit
                                            odio neque massa id nibh
                                            pellentesque. Lorem ipsum dolor sit
                                            amet consectetur. Faucibus gravida
                                            elit odio neque massa id nibh
                                            pellentesque.{" "}
                                        </p>
                                    </div>
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
                    </div>
                    <div className={styles.announcementOtherTasks}>
                        <div>
                            <h2>Другие задания заказчика</h2>
                            <Link to="#">Смотреть все</Link>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.announcementSimilarTasks}>
                        <div>
                            <h2>Похожие задания на Бирже</h2>
                            <Link to="#">Смотреть все</Link>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Lorem ipsum dolor sit amet consec eu tellus
                                    dui eu non
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.announcementAside}>
                    <button className={styles.responseBtn}>
                        Отправить запрос
                    </button>
                    <button className={styles.saveBtn}>
                        <img 
                            src={tgImg}
                            width={16}
                            height={14}
                            alt="telegram logo"
                        />
                        <span>Связаться</span> 
                    </button>
                    <div className={styles.aboutClient}>
                        <h2>О фрилансере</h2>
                        <h3>
                            Россия, г. Казань
                            <br />
                            21:00
                        </h3>
                        <ul className={styles.clientInfo}>
                            <li>Аккаунт верифицирован</li>
                            <li>Телефон подтвержден</li>
                            <li>Документы подтверждены</li>
                            <li>Способ оплаты добавлен</li>
                        </ul>
                        <button className={styles.complaint}>
                            Пожаловаться на объявление
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.linkToTask}>
                <h2>Ссылка на задание</h2>
                <div className={styles.linkToTaskActions}>
                    <button>https://music.yandex.ru/artist/54254</button>
                    <button>
                        <img src={copyImg} width={24} height={24} alt="copy" />
                    </button>
                    <button>
                        <img
                            src={shareImg}
                            width={24}
                            height={24}
                            alt="share"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
