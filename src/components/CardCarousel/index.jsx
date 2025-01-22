import styles from "./style.module.css";
import arrow from "../../assets/icons/sliderArrow.svg";
import freelancer from "../../assets/images/freelancer.png";
import toFavourite from "../../assets/icons/toFavourite.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const mockFreelancers = [
  ...Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: "Жанна Кондратьева",
      image: `${freelancer}`,
      region: "Стаж 14 лет",
      totalOrders: "97",
      rating: "5.0",
      price: "1200",
    })),
];

export default function FreelancersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, mockFreelancers.length - 3)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className={styles.sliderWrapper}>
      <button className={styles.prevSlide} onClick={prevSlide}>
        <img src={arrow} width={24} height={24} alt="prev" />
      </button>
      <div className={styles.sliderContainer}>
        <ul
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * 336}px)` }}
        >
          {mockFreelancers.map((slide, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + 3;
            return (
              <li
                key={slide.id}
                className={`${styles.freelancerCard} ${
                  isVisible ? styles.visible : styles.hidden
                }`}
              >
                <div className={styles.freelancerInfo}>
                  <img
                    src={slide.image}
                    width={70}
                    height={70}
                    style={{ borderRadius: "16px", objectFit: "cover" }}
                    alt="profile photo"
                  />
                  <div>
                    <h2>{slide.name}</h2>
                    <h3>{slide.region}</h3>
                  </div>
                </div>
                <div className={styles.slideLine}></div>
                <div className={styles.freelancerStats}>
                  <div className={styles.freelancerOrders}>
                    <h2>{slide.totalOrders}% успешных заказов</h2>
                    <div>{slide.rating}</div>
                  </div>
                  <div className={styles.price}>

                  <p>12000₽ заработано</p>
                  <p>~{slide.price}₽ за заказ</p>
                  </div>
                </div>
                <div className={styles.freelancerSkills}></div>

                <div className={styles.slideActions}>
                  <button className={styles.toProfile}>
                    <Link to="#">Обратиться</Link>
                  </button>
                  <button className={styles.addToFavourite}>
                    <img
                      src={toFavourite}
                      width={30}
                      height={24}
                      alt="add to fav"
                    />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button className={styles.nextSlide} onClick={nextSlide}>
        <img
          src={arrow}
          width={24}
          height={24}
          alt="next"
          style={{ transform: "rotate(180deg)" }}
        />
      </button>
    </div>
  );
}
