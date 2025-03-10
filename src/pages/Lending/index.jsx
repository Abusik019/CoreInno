import styles from './style.module.css';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';

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

export default function Lending() {
  return (
    <div className={styles.lending}>
        <Navbar />
        <main className={styles.main}> 
            <div className={styles.mainInfo}>
                <div className={styles.implementAI}>Внедряем ИИ</div>
                <h2>Найдите идеальную работу или специалиста с Jobify!</h2>
                <p>Платформа для поиска фриланс-заказов и исполнителей с удобным интерфейсом и надежными инструментами</p>
                <div className={styles.mainBtns}>
                    <button>Присоединиться</button>
                    <button>Есть вопросы?</button>
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
                        <button>Я фрилансер</button>
                        <button>Я заказчик</button>
                    </div>
                </div>
                <ul className={styles.stepsList}>
                    <li>
                        <h2>Шаг №1</h2>
                        <p>Создайте задание/Найдите подходящий проект</p>
                    </li>
                    <li>
                        <h2>Шаг №2</h2>
                        <p>Выберите исполнителя/Откликнитесь на заказ</p>
                    </li>
                    <li>
                        <h2>Шаг №3</h2>
                        <p>Оплачивайте через безопасную сделку и получайте безупречный результат/Работайте и получайте оплату через безопасную сделку</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className={styles.tutorial}>
            <div className={styles.tutorialContent}>
                <div className={styles.implementAI}>Что-то тут будет</div>
                <h2>Туториал по работе на Jobify</h2>
                <p>Мы обновили биржу — добавили встроенный чат, быстрые переводы и систему гарантии сделок, а также поддержку пользователей</p>
                <button>Присоединиться</button>
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
    </div>
  )
}
