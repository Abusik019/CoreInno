import React, { useState } from "react";
import styles from "./style.module.css";
import favorite from "../../assets/icons/favorite.png";
import material from "../../assets/icons/material.svg";
import mingcute from "../../assets/icons/mingcute.svg";
import fluent from "../../assets/icons/fluent.svg";

// Данные для карточек
const data = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: "Жанна Кондратьева",
  rating: "5.0",
  title: "Создать сайт для стоматологический клиники",
  payment: "Способ оплаты верифицирован",
  payment1: "Телефон подтвержден",
  payment2: "Оплата по этапам",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nullam feugiat porttitor arcu magna vel fermentum dictumst morbi. Ut id malesuada nisl sit nunc. Pellentesque tellus dignissim eget praesent tellus. In lacus at venenatis pretium vestibulum rutrum...",
    proposals: 5,
    price: "до 45000 ₽"
}));

const ListPaginationOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Определение текущих карточек
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Функция для смены страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.container}>
      {/* Карточки */}
      <div className={styles.cardsContainer}>
        {currentItems.map((item) => (
          <div className={styles.cart} key={item.id}>
            <div className={styles.user}>
              <div className={styles.userInfo}>
                <p>
                  {item.name} * {item.rating}{" "}
                </p>
                <p>{item.title}</p>
                <div className={styles.payment}>
                  {" "}
                  <div>
                    <img src={material} alt="" /> {item.payment}
                  </div>{" "}
                  <div>
                    <img src={mingcute} alt="" /> {item.payment1}
                  </div>{" "}
                  <div>
                    <img src={fluent} alt="" /> {item.payment2}
                  </div>
                </div>
              </div>
              <div className={styles.favorite}>
                <img src={favorite} alt="" />
                <button>Откликнуться</button>
              </div>
            </div>

            <p style={{ color: "gray", marginTop: "12px", fontSize: "14px" }}>
              {item.description}{" "}
              <span style={{ color: "#000000", cursor: "pointer" }}>
                Подробнее
              </span>
            </p>
            <div className={styles.buttons1}>
              <button> навык</button>
              <button> навык</button>
              <button> навык</button>
              <button>навык</button>
              <button>навык</button>
              <button>...</button>
            </div>
            <div className={styles.price}>
            <p style={{fontSize: "14px", color: "gray", marginTop: "10px"}}>Предложений получено: {item.proposals}</p>
            <h4>{item.price}</h4>

            </div>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`${styles.pageButton} ${
              currentPage === i + 1 ? styles.activePage : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListPaginationOrders;
