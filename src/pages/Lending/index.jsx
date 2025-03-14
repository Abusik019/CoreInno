import styles from './style.module.css';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import bgImg from '../../assets/images/lending-bg-item.png';
import videoImg from '../../assets/images/video.png';
import itImg from '../../assets/icons/ITicon.svg';
import smmImg from '../../assets/icons/smm.svg';
import audioImg from '../../assets/icons/video.svg';
import businessImg from '../../assets/icons/business.svg';
import seoImg from '../../assets/icons/seo.svg';
import designImg from '../../assets/icons/design.svg';
import textsImg from '../../assets/icons/texts.svg';
import linkArrowImg from '../../assets/icons/linkArrow.svg';
import switch1Img from '../../assets/images/lendingSwitch1.png';
import switch2Img from '../../assets/images/lendingSwitch2.png';
import switch3Img from '../../assets/images/lendingSwitch3.png';
import switch4Img from '../../assets/images/lendingSwitch4.png';
import jobifyImg from '../../assets/icons/logoJobify.svg';
import vkImg from '../../assets/icons/blackVK.svg';
import tgImg from '../../assets/icons/blackTG.svg';
import igImg from '../../assets/icons/blackIG.svg';

const switchData = [
    {
        id: 1,
        title: 'Новые функции платформы',
        desc: 'Мы обновили биржу — добавили встроенный чат, быстрые переводы и систему гарантии сделок, а также поддержку пользователей',
    },
    {
        id: 2,
        title: 'Увеличение скорости выполнения заданий',
        desc: 'Благодаря использованию нейросетей исполнители нашего сервиса смогут выполнить задания за пару часов, вместо того чтобы ждать 2-3 дня, как это делают конкуренты',
    },
    {
        id: 3,
        title: 'Адекватная ценовая политика',
        desc: 'Комииссия сервиса будет значительно меньше, чем у конкурентов. Начинаться с 15% от суммы заказа и уменьшаться в зависимости от количества успешно выполненных работ',
    },
    {
        id: 4,
        title: 'Оптимизация логики формирования рейтинга',
        desc: 'Формирование рейтинга будет базироваться на опыте человека, количестве качественных работ в портфолио, отзывах реальных клиентов',
    },
]

export default function Lending() {
    const [activeItem, setActiveItem] = useState(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [role, setRole] = useState('freelancer');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            setActiveItem(1)
        }
    }, [isVisible]);

    useEffect(() => {
        if (isVisible && activeItem !== null) {
            const timer = setTimeout(() => {
                setActiveItem((prev) => (prev !== 4 ? prev + 1 : null));
            }, 5000);
    
            return () => clearTimeout(timer);
        }
    }, [isVisible, activeItem]);

    function changeImageSource(){
        switch(activeItem){
            case 1:
                return switch1Img;
            case 2:
                return switch2Img;
            case 3:
                return switch3Img;
            case 4:
                return switch4Img;
            default:
                return switch1Img;
        }
    }

    return (
        <div className={styles.lending}>
            <Navbar />
            <main className={styles.main}> 
                <div className={styles.mainInfo}>
                    <div className={styles.implementAI}>Внедряем ИИ</div>
                    <h2>Найдите идеальную работу или специалиста с Jobify!</h2>
                    <p>Платформа для поиска фриланс-заказов и исполнителей с удобным интерфейсом и надежными инструментами</p>
                    <div className={styles.mainBtns}>
                        <Link to="/registration">Присоединиться</Link>
                        {/* <button>Есть вопросы?</button> */}
                    </div>
                </div>
                <ul className={styles.advantages}>
                    <li>
                        <h2><span>Удобный</span> сервис</h2>
                        <p>Интуитивно понятно и ненавязчиво</p>
                    </li>
                    <li>
                        <h2><span>Быстрый</span> поиск</h2>
                        <p>Поиск клиентов и исполнителей за считаные минуты</p>
                    </li>
                    <li>
                        <h2>У нас нет подписок</h2>
                        <p>Рейтинг зависит от портфолио и успешно выполненных заказов</p>
                    </li>
                    <li>
                        <h2><span>Защита</span> всех сделок</h2>
                        <p>Мы уделили особое внимание вашей безопасности</p>
                    </li>
                </ul>
            </main>
            <section className={styles.steps}>
                <img src={bgImg} alt="bg item" />
                <div className={styles.stepsContent}>
                    <div className={styles.stepsSwitchRole}>
                        <h2>Как мне находить исполнителей?</h2>
                        <div>
                            <button 
                                onClick={() => setRole('freelancer')}
                                style={{
                                    backgroundColor: role === 'freelancer' ? '#000' : '#fff',
                                    color: role === 'freelancer' ? '#fff' : '#000'
                                }}
                            >Я фрилансер</button>
                            <button 
                                onClick={() => setRole('customer')}
                                style={{
                                    backgroundColor: role === 'customer' ? '#000' : '#fff',
                                    color: role === 'customer' ? '#fff' : '#000'
                                }}
                            >Я заказчик</button>
                        </div>
                    </div>
                    <ul className={styles.stepsList}>
                        <li>
                            <h2>Шаг №1</h2>
                            <p>{role === 'customer' ? "Создайте задание" : "Найдите подходящий проект"}</p>
                        </li>
                        <li>
                            <h2>Шаг №2</h2>
                            <p>{role === 'customer' ? "Выберите исполнителя" : "Откликнитесь на заказ"}</p>
                        </li>
                        <li>
                            <h2>Шаг №3</h2>
                            <p>{role === 'customer' ? "Оплачивайте через безопасную сделку и получайте безупречный результат" : "Работайте и получайте оплату через безопасную сделку"}</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.tutorial}>
                <div className={styles.tutorialContent}>
                    <div className={styles.implementAI}>Что-то тут будет</div>
                    <h2>Туториал по работе на Jobify</h2>
                    <p>Мы обновили биржу — добавили встроенный чат, быстрые переводы и систему гарантии сделок, а также поддержку пользователей</p>
                    <Link to='/registration'>Присоединиться</Link>
                </div>
                <img 
                    src={videoImg}
                    width={652}
                    height={410}
                    alt='video'
                />
            </section>
            <section className={styles.links}>
                <ul className={styles.linksList}>
                    <li>
                        <h2>Разработка и IT</h2>
                        <div>
                            <img src={itImg} width={78} height={78} alt="it" />
                            <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                        </div>
                    </li>
                    <li>
                        <h2>SMM и реклама</h2>
                        <div>
                            <img src={smmImg} width={92} height={68} alt="smm" />
                            <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                        </div>
                    </li>
                    <li>
                        <h2>Видео и аудио</h2>
                        <div>
                            <img src={audioImg} width={100} height={100} alt="video" />
                            <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                        </div>
                    </li>
                    <li>
                        <h2>Бизнес и обучение</h2>
                        <div>
                            <img src={businessImg} width={97} height={79} alt="business" />
                            <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                        </div>
                    </li>
                    <li>
                        <h2>SEO и аналитика</h2>
                        <div>
                            <img src={seoImg} width={100} height={100} alt="seo" style={{opacity: '.1'}}/>
                            <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                        </div>
                    </li>
                    <li>
                        <h2>Дизайн</h2>
                        <div>
                            <img src={designImg} width={100} height={100} alt="design" />
                            <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                        </div>
                    </li>
                    <li>
                        <h2>Тексты и переводы</h2>
                        <div>
                            <img src={textsImg} width={100} height={100} alt="texts" />
                            <Link to="#"><img src={linkArrowImg} width={24} height={24} alt="link" /></Link>
                        </div>
                    </li>
                </ul>
            </section>
            <section ref={sectionRef} className={styles.switchInfo}>
                <img src={changeImageSource()} width={474} height={531} alt="switch" />
                <ul className={styles.switchInfoList}>
                    {switchData.map(item => (
                        <li key={item.id} className={`${activeItem === item.id ? styles.active : ''}`}>
                            <div onClick={() => setActiveItem(item.id)}></div>
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            {/* <section className={styles.stats}>
                <ul className={styles.statsList}>
                    <li>
                        <h2>1000+</h2>
                        <p>Выполненных заказов</p>
                    </li>
                    <li>
                        <h2>100К+</h2>
                        <p>Посещений в месяц</p>
                    </li>
                    <li>
                        <h2>15К+</h2>
                        <p>Активных пользователей</p>
                    </li>
                    <li>
                        <h2>99.9%</h2>
                        <p>Успешных заказов</p>
                    </li>
                </ul>
            </section> */}
            <section className={styles.course}>
                <h2>Курс по искусственному интелекту</h2>
                <p>Наш курс по искусственному интеллекту (ИИ) создан специально для фрилансеров, которые хотят зарабатывать больше и автоматизировать рутинные задачи.</p>
                <button>Перейти к курсу</button>
            </section>
            <section className={styles.getFirstOffer}>
                <h2><span>Ищешь работу?</span> Возьми свой первый заказ!</h2>
                <p>Начните работать с Jobify уже сегодня!</p>
                <input type="text" placeholder='Что будем искать?'/>
                <button>Найти работу</button>
            </section>
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerLogoBlock}>
                        <img src={jobifyImg} width={119} height={39} alt="Jobify logo" />
                        <h2>Будущее начинается с тебя!</h2>
                    </div>
                    <div className={styles.foooterLinks}>
                        <div>
                            <Link to="https://m.vk.com/coreinno"><img src={vkImg} width={24} height={24} alt="vk" /></Link>
                            <Link to="https://t.me/+pTuTWwR-Rg02ZGIy"><img src={tgImg} width={24} height={24} alt="tg" /></Link>
                            <Link to="https://www.instagram.com/core_inno?igsh=d2M3Z3RteHIwa3Bm"><img src={igImg} width={24} height={24} alt="ig" /></Link>
                        </div>
                        <h2>core.inno@mail.ru</h2>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <h2>© Jobify 2025 — Все права защищены</h2>
                    <div>
                        <Link to="#">Пользовательское соглашение</Link>
                        <Link to="#">Политика конфиденциальности</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
