import { useState } from 'react';
import styles from './style.module.css';
import SelectItem from '../../components/Select';
import energyImg from '../../assets/icons/energy.svg';
import freelancerImg from '../../assets/images/freelancer.png';
import noneImg from '../../assets/images/mockLi.png';
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import like from '../../assets/icons/like.svg';
import { Link } from 'react-router-dom';
import ReviewsSelect from '../../components/SelectReviews';

const mockResponses = [
    {
        id: 1,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 2,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 3,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 4,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 5,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
    {
        id: 6,
        image: '../../../src/assets/images/freelancer.png',
        first_name: 'Жанна',
        last_name: 'Кондратьева',
        rating: '5.0',
        bio: 'Маркетолог-эксперт со стажем 14 лет практических работ',
        region: 'region',
        price: 1200,
        orderQuantity: 10,
        successOrders: 97,
        skills: ['навык', 'навык', 'навык', 'навык', 'навык', 'навык',]
    },
]

export default function AllResponses() {
    const [activeItem, setActiveItem] = useState('all');
    const [activeResponse, setActiveResponse] = useState(null);

    return (
        <div className={styles.allResponses}>
            <h1>Дизайн логотипа для  кондитерской лавки </h1>
            <div className={styles.responsesContainer}>
                <ul className={styles.resTabs}>
                    <li 
                        style={{
                            opacity: activeItem === 'all' ? '1' : '0.6',
                            borderColor: activeItem === 'all' ? '#000' : 'transparent'
                        }} 
                        onClick={() => setActiveItem('all')}>Все отклики (12)</li>
                    <li 
                        style={{
                            opacity: activeItem === 'liked' ? '1' : '0.6',
                            borderColor: activeItem === 'liked' ? '#000' : 'transparent'
                        }} 
                        onClick={() => setActiveItem('liked')}>Понравившиеся (100+)</li>
                    <li 
                        style={{
                            opacity: activeItem === 'archive' ? '1' : '0.6',
                            borderColor: activeItem === 'archive' ? '#000' : 'transparent'
                        }} 
                        onClick={() => setActiveItem('archive')}>Архив (100+)</li>
                </ul>
                <div className={styles.resContent}>
                    <div className={styles.contentLeft}>
                        <input type="text" placeholder='Поиск'/>
                        <SelectItem 
                            defaultValue="Новые отклики" 
                            values={['value_1', 'value_2', 'value_3']} 
                            styles={{
                                width: 145,
                                opacity: '0.6'
                            }}
                        />
                        <ul className={styles.contentResponses}>
                            {mockResponses.map(item => (
                                <li 
                                    key={item.id}
                                    onClick={() => setActiveResponse(item.id)} 
                                    style={{backgroundColor: item.id === activeResponse ? '#F2F2F2' : 'transparent'}}
                                >
                                    <div className={styles.bioBlock}>
                                        <img 
                                            src={item.image}
                                            width={53}
                                            height={53}
                                            alt="freelancer photo" 
                                            style={{borderRadius: '12px'}}
                                        />
                                        <div className={styles.bioBlockText}>
                                            <div>
                                                <h2>{item.first_name} {item.last_name}</h2>
                                                <span>{item.rating}</span>
                                                <button>
                                                    <img
                                                        src={energyImg}
                                                        width={14}
                                                        height={14} 
                                                        alt="energy" 
                                                    />
                                                </button>
                                            </div>
                                            <h2>{item.bio}</h2>
                                            <h3>{item.region}</h3>
                                        </div>
                                    </div>
                                    <div className={styles.infoBlock}>
                                        <div>~{item.price}₽ за заказ</div>
                                        <div>{item.orderQuantity} заказов в вашей сфере</div>
                                        <div>{item.successOrders} успешных заказов</div>
                                    </div>
                                    <ul className={styles.skillsBlock}>
                                        {item.skills.map((skill, index) => {
                                            if (index === 5) {
                                                return <li key="ellipsis">...</li>; 
                                            }
                                            if (index > 5) {
                                                return null; 
                                            }
                                            return <li key={index}>{skill}</li>; 
                                        })}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.contentRight}>
                        <div className={styles.responseActions}>
                            <div>
                                <Link to='#'>Перейти в чат</Link>
                                <button>Нанять фрилансера</button>
                            </div>
                            <button>Пожаловаться</button>
                        </div>
                        <h2 className={styles.responseDate}>Дата отклика: 21.12.2024 (17 дней назад)</h2>
                        <div className={styles.freelancerInfo}>
                            <img 
                                src={freelancerImg}
                                width={58}
                                height={58}
                                alt="freelancer photo" 
                                style={{borderRadius: '12px'}}
                            />
                            <div className={styles.freelancerBio}>
                                <h2>Фрилансер</h2>
                                <div>
                                    <h3>Жанна Кондратьева</h3>
                                    <span>5.0</span>
                                </div>
                                <h3>Регион</h3>
                            </div>
                        </div>
                        <div className={styles.freelancerBid}>
                            <h2>Заявка</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Risus odio ac tellus id quis ante. Eget pharetra sed quam tortor leo blandit. Ac iaculis turpis porttitor lectus sed. Sapien sit elementum pulvinar est vitae diam condimentum.
                                <br />
                                <br />
                                Ipsum non volutpat urna augue amet placerat gravida scelerisque risus. Ut tempor maecenas vestibulum elit at amet amet eget. Neque lorem lorem diam enim vitae dolor magna non sit. Pellentesque eget aliquam suspendisse lacus vitae arcu sem lacus. Eu vitae condimentum quisque non vulputate pharetra. Mi diam eu semper tellus a enim pulvinar. Tincidunt pharetra vel leo enim dictum amet amet quis pellentesque. Arcu at blandit non quis ipsum ipsum iaculis.
                            </p>
                        </div>
                        <div className={styles.freelancerExamples}>
                            <h2>Прикрепленные примеры</h2>
                            <ul className={styles.portfolioTasks}>
                                <li>
                                    <img 
                                        src={noneImg} 
                                        width={220}
                                        height={160}
                                        alt="task image" 
                                    />
                                </li>
                                <li>
                                    <img 
                                        src={noneImg} 
                                        width={220}
                                        height={160}
                                        alt="task image" 
                                    />
                                </li>
                                <li>
                                    <img 
                                        src={noneImg} 
                                        width={220}
                                        height={160}
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
                        <div className={styles.freelancerReviews}>
                            <div className={styles.freelancerReviewsText}>
                                <h2>Отзывы о фрилансере <span>(12)</span></h2>
                                <ReviewsSelect />
                            </div>
                            <ul className={styles.reviewsList}>
                                <li>
                                    <img
                                        src={freelancerImg}
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
                                            pellentesque.
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
                        </div>
                        <button className={styles.cancelResponse}>Отклонить отклик</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
