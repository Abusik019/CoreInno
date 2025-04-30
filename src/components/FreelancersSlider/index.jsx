import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import freelancer from "../../assets/images/freelancer.png";
import toFavourite from "../../assets/icons/toFavourite.svg";
import arrow from "../../assets/icons/arrowBlackLong.svg";

const mockFreelancers = [
    ...Array(10)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            name: "Жанна Кондратьева",
            image: `${freelancer}`,
            region: "Регион",
            description:
                "Маркетолог-эксперт со стажем 14 лет практических работ",
            totalOrders: "17",
            rating: "5.0",
            price: "1200",
            skills: ["Навык", "Навык", "Навык", "Навык", "Навык"],
        })),
];

export default function FreelancersSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [indexFavorite, setIndexFavorite] = useState(null);
    const [favorite, setFavorite] = useState(false);
    function favorites(index) {
        setFavorite(!favorite);
        setIndexFavorite(index);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            Math.max(prevIndex - 2, 0)
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 2, mockFreelancers.length - 4)
        );
    };

    return (
        <>
            <div className={styles.sliderWrapper}>
                <div className={styles.sliderContainer}>
                    <ul
                        className={styles.slider}
                        style={{
                            transform: `translateX(-${currentIndex * (390 + 15)}px)`, 
                        }}
                    >
                        {mockFreelancers.map((slide, index) => {
                            const isVisible = index >= currentIndex && index < currentIndex + 4;
                            return (
                                <li
                                    key={slide.id}
                                    className={styles.freelancerCard}
                                >
                                    <div className={styles.freelancerInfo}>
                                        <img
                                            src={slide.image}
                                            width={70}
                                            height={70}
                                            style={{
                                                borderRadius: "16px",
                                                objectFit: "cover",
                                            }}
                                            alt="profile photo"
                                        />
                                        <div>
                                            <div className={styles.freelancerName}>
                                                <h2>{slide.name}</h2>
                                                <h3>{slide.rating}</h3>
                                            </div>
                                            <h3>{slide.region}</h3>
                                        </div>
                                    </div>
                                    <p>{slide.description}</p>
                                    <div className={styles.slideLine}></div>
                                    <div className={styles.freelancerStats}>
                                        <h2>{slide.totalOrders} выполненных заказов</h2>
                                        <h3>~{slide.price}₽ за заказ</h3>
                                    </div>
                                    <div className={styles.freelancerSkills}>
                                        {slide.skills.map((skill, index) => (
                                            <div key={index}>{skill}</div>
                                        ))}
                                    </div>
                                    <p
                                        className={styles.onlineConsultation}
                                    >
                                        <p to="#">Онлайн-консультация</p>
                                    </p>
                                    <div className={styles.slideActions}>
                                        <button className={styles.toProfile}>
                                            <Link to="#">
                                                Перейти в профиль
                                            </Link>
                                        </button>
                                        <div className={favorite && indexFavorite === index ? styles.selected_freelancer : ""} onClick={() => favorites(index)}>
                                            <div className={`${styles.icon} ${favorite && indexFavorite === index ? styles.visible : styles.hidden}`}>
                                                <svg con xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                                                    <path d="M8 6.2C8 5.08 8 4.52 8.2725 4.092C8.51218 3.71569 8.89462 3.40974 9.365 3.218C9.9 3 10.6 3 12 3H19C20.4 3 21.1 3 21.635 3.218C22.1054 3.40974 22.4878 3.71569 22.7275 4.092C23 4.52 23 5.08 23 6.2V19.505C23 19.991 23 20.234 22.8738 20.367C22.8192 20.4248 22.7496 20.4725 22.6697 20.5067C22.5899 20.5409 22.5017 20.5608 22.4112 20.565C22.2025 20.575 21.95 20.44 21.445 20.171L15.5 17L9.555 20.17C9.05 20.44 8.7975 20.575 8.5875 20.565C8.49729 20.5606 8.40935 20.5407 8.32972 20.5065C8.25009 20.4723 8.18067 20.4247 8.12625 20.367C8 20.234 8 19.991 8 19.505V6.2Z" fill="url(#paint0_linear_2490_2957)"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_2490_2957" x1="15.5" y1="3" x2="15.5" y2="20.5655" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#543BA7"/>
                                                        <stop offset="1" stop-color="#7F78E9"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className={`${styles.icon} ${favorite && indexFavorite === index ? styles.hidden : styles.visible}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                                                    <path d="M8 6.2C8 5.08 8 4.52 8.2725 4.092C8.51218 3.71569 8.89462 3.40974 9.365 3.218C9.9 3 10.6 3 12 3H19C20.4 3 21.1 3 21.635 3.218C22.1054 3.40974 22.4878 3.71569 22.7275 4.092C23 4.52 23 5.08 23 6.2V19.505C23 19.991 23 20.234 22.8738 20.367C22.8192 20.4248 22.7496 20.4725 22.6697 20.5067C22.5899 20.5409 22.5017 20.5608 22.4112 20.565C22.2025 20.575 21.95 20.44 21.445 20.171L15.5 17L9.555 20.17C9.05 20.44 8.7975 20.575 8.5875 20.565C8.49729 20.5606 8.40935 20.5407 8.32972 20.5065C8.25009 20.4723 8.18067 20.4247 8.12625 20.367C8 20.234 8 19.991 8 19.505V6.2Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.sliderBtns}>
                <button 
                    className={styles.prevSlide} 
                    onClick={prevSlide}
                    style={{
                        opacity: currentIndex === 0 ? '0.5' : '0.8',
                        cursor: currentIndex === 0 ? 'default' : 'pointer'
                    }}
                >
                    <img 
                        src={arrow}
                        width={35}
                        height={25}
                        alt="prev" 
                    />
                </button>
                <button 
                    className={styles.nextSlide} 
                    onClick={nextSlide}
                    style={{
                        opacity: currentIndex === mockFreelancers.length - 4 ? '0.5' : '1',
                        cursor: currentIndex === mockFreelancers.length - 4 ? 'default' : 'pointer'
                    }}
                >
                    <img
                        src={arrow}
                        width={35}
                        height={25}
                        alt="next"
                    />
                </button>
            </div>
        </>
    );
}