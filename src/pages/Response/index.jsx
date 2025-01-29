import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Textarea } from "../../components/Textarea";

import noneImg from '../../assets/images/mockLi.png';

export default function Response() {
    return (
        <div className={styles.response}>
            <Link to="#">Раздел заказов</Link>
            <h2>Предложить услугу</h2>
            <section className={styles.reponseRules}>
                <h2>Правила качественного отклика</h2>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet consectetur. Lacus faucibus
                        convallis sed in nulla et eget euismod vestibulum. Eget
                        habitasse suspendisse eu sem ut ac orci. Placerat
                        nascetur odio pretium sit cursus non faucibus ultricies
                        blandit. Arcu turpis in nulla non volutpat in molestie.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur. Lacus faucibus
                        convallis sed in nulla et eget euismod vestibulum. Eget
                        habitasse suspendisse eu sem ut ac orci. Placerat
                        nascetur odio pretium sit cursus non faucibus ultricies
                        blandit. Arcu turpis in nulla non volutpat in molestie.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur. Lacus faucibus
                        convallis sed in nulla et eget euismod vestibulum. Eget
                        habitasse suspendisse eu sem ut ac orci. Placerat
                        nascetur odio pretium sit cursus non faucibus ultricies
                        blandit. Arcu turpis in nulla non volutpat in molestie.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur. Lacus faucibus
                        convallis sed in nulla et eget euismod vestibulum. Eget
                        habitasse suspendisse eu sem ut ac orci. Placerat
                        nascetur odio pretium sit cursus non faucibus ultricies
                        blandit. Arcu turpis in nulla non volutpat in molestie.
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet . Placerat nascetur odio pretium
                    sit cursus non faucibus ultricies blandit. Arcu turpis in
                    nulla non volutpat in molestie.
                </p>
            </section>
            <section className={styles.orderResponse}>
                <div className={styles.orderAuthorName}>
                    <h2>Жанна Кондратьева</h2>
                    <h3>5.0</h3>
                </div>
                <h2>Создать сайт для стоматологический клиники</h2>
                <ul className={styles.orderVerifications}>
                    <li>Способ оплаты верифицирован</li>
                    <li>Телефон подтвержден</li>
                    <li>Фиксированная оплата</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nullam feugiat
                    porttitor arcu magna vel fermentum dictumst morbi. Ut id
                    malesuada nisl sit nunc. Pellentesque tellus dignissim eget
                    praesent tellus. In lacus at venenatis pretium vestibulum
                    rutrum... <span>Подробнее</span>
                </p>
                <ul className={styles.orderAuthorSkills}>
                    <li>навык</li>
                    <li>навык</li>
                    <li>навык</li>
                    <li>навык</li>
                    <li>навык</li>
                    <li>...</li>
                </ul>
                <div className={styles.orderPrice}>
                    <h2>Предложений получено: 5</h2>
                    <h3>до 45 000 ₽</h3>
                </div>
            </section>
            <section className={styles.yourReponse}>
                <h2>Ваш отклик</h2>
                <div className={styles.blackLine}></div>
                <h3>Описание *</h3>
                <Textarea value="Расскажите, почему стоит выбрать именно Вас" maxLength={5000}/>
                <div className={styles.yourResponseInputs}>
                    <div className={styles.responsePrice}>
                        <label htmlFor="price">
                            Укажите стоимость работы *
                        </label>
                        <input
                            type="number"
                            id="price"
                            placeholder="32000 ₽"
                            required
                        />
                    </div>
                    <div className={styles.responseDate}>
                        <label htmlFor="date">Срок выполнения *</label>
                        <input
                            type="number"
                            id="date"
                            placeholder="До 7 дней"
                            required
                        />
                    </div>
                </div>
            </section>
            <section className={styles.payment}>
                <h2>Порядок оплаты</h2>
                <div className={styles.blackLine}></div>
                <div className={styles.selectPaymentMethod}>
                    <div>
                        <label htmlFor="payment1">Оплата по этапам</label>
                        <input id="payment1" type="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="payment2">Фиксированная оплата</label>
                        <input id="payment2" type="checkbox" />
                    </div>
                </div>
                <p>Оплата по этапам — после выполнения некоторой части задания заказчик пересылает вам соответствующую сумму.<br />Заказчик в праве оставить за собой способ оплаты.</p>
            </section>
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
            </section>
            <div className={styles.navBtns}>
                <Link to='#'>Вернуться назад</Link>
                <Link to='#'>Отправить отклик</Link>
            </div>
        </div>
    );
}
