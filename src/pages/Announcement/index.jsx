import styles from "./style.module.css";
import avatarImg from "../../assets/images/freelancer.png";
import circleImg from "../../assets/icons/partOfCircle.svg";
import sandTimerImg from "../../assets/icons/sandTimer.svg";
import smallArrowImg from "../../assets/icons/smallArrow.svg";
import copyImg from "../../assets/icons/copy.svg";
import shareImg from "../../assets/icons/share.svg";
import pigImg from '../../assets/icons/pig.svg';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Announcement() {
    const [fixPayment, setFixPayment] = useState(true);

    return (
        <div className={styles.announcement}>
            <div className={styles.announcementContainer}>
                <div className={styles.announcementContent}>
                    <div className={styles.announcementTitleBlock}>
                        <h1>
                            Составить презентацию для стартап проекта BioDev
                        </h1>
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
                    <div className={styles.announcementCategories}>
                        <h2>Категория заказа</h2>
                        <ul>
                            <li>Графический дизайн</li>
                        </ul>
                    </div>
                    {!fixPayment 
                        ? 
                            <div className={styles.announcementDetails}>
                            <h2>Детали заказа</h2>
                            <ul>
                                <li>
                                    <div>
                                        <h2>Оплата по этапам</h2>
                                        <h3>Заказчик платит за отдельные этапы</h3>
                                    </div>
                                    <img
                                        src={circleImg}
                                        width={20}
                                        height={20}
                                        alt="circle"
                                    />
                                </li>
                                <li>
                                    <div>
                                        <h2>Сроки</h2>
                                        <h3>1-2 недели на каждый из этапов</h3>
                                    </div>
                                    <img
                                        src={sandTimerImg}
                                        width={20}
                                        height={20}
                                        alt="sand timer"
                                    />
                                </li>
                                <li>
                                    <div>
                                        <h2>Lorem ipsum</h2>
                                        <h3>Lorem ipsum dolor sit amet</h3>
                                    </div>
                                    <img
                                        src={sandTimerImg}
                                        width={20}
                                        height={20}
                                        alt="sand timer"
                                    />
                                </li>
                                <li>
                                    <div>
                                        <h2>Lorem ipsum</h2>
                                        <h3>Lorem ipsum dolor sit amet</h3>
                                    </div>
                                    <img
                                        src={sandTimerImg}
                                        width={20}
                                        height={20}
                                        alt="sand timer"
                                    />
                                </li>
                            </ul>
                            </div>
                        :
                            <div className={styles.announcementDetails}>
                                <h2>Детали заказа</h2>
                                <ul>
                                    <li>
                                        <div>
                                            <h2>Фиксированная оплата</h2>
                                            <h3>Заказчик платит фиксированную сумму</h3>
                                        </div>
                                        <img
                                            src={pigImg}
                                            width={20}
                                            height={20}
                                            alt="circle"
                                        />
                                    </li>
                                    <li>
                                        <div>
                                            <h2>Сроки</h2>
                                            <h3>Не более 2-х месяцев</h3>
                                        </div>
                                        <img
                                            src={sandTimerImg}
                                            width={20}
                                            height={20}
                                            alt="sand timer"
                                        />
                                    </li>
                                    <li>
                                        <div>
                                            <h2>Lorem ipsum</h2>
                                            <h3>Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <img
                                            src={sandTimerImg}
                                            width={20}
                                            height={20}
                                            alt="sand timer"
                                        />
                                    </li>
                                    <li>
                                        <div>
                                            <h2>Lorem ipsum</h2>
                                            <h3>Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <img
                                            src={sandTimerImg}
                                            width={20}
                                            height={20}
                                            alt="sand timer"
                                        />
                                    </li>
                                </ul>
                            </div>
                    }
                    {fixPayment && 
                        <div className={styles.announcementStages}>
                            <h2>Этапы задания</h2>
                            <ul>
                                <li>
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <h3>1200₽</h3>
                                </li>
                                <li>
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <h3>1200₽</h3>
                                </li>
                                <li>
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <h3>1200₽</h3>
                                </li>
                            </ul>
                            <button>
                                <span>Показать все этапы</span>
                                <img
                                    src={smallArrowImg}
                                    width={16}
                                    height={16}
                                    alt="arrow"
                                />
                            </button>
                        </div>
                    }
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
                    <button className={styles.responseBtn}>Я возьмусь</button>
                    <button className={styles.saveBtn}>
                        Сохранить в избранное
                    </button>
                    <h2>Доступно коннектов: 12</h2>
                    <div className={styles.aboutClient}>
                        <h2>О клиенте</h2>
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
                        <h4>Активность задания</h4>
                        <ul className={styles.clientActivity}>
                            <li>Количество откликов: 12</li>
                            <li>Фрилансеров на интервью: 3</li>
                            <li>Офферов отправлено: 0</li>
                        </ul>
                        <h5>Ожидаемые навыки</h5>
                        <ul className={styles.expectedSkills}>
                            <li>PowerPoint</li>
                            <li>Figma</li>
                            <li>PowerPoint</li>
                            <li>Figma</li>
                            <li>Figma</li>
                            <li>Figma</li>
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
