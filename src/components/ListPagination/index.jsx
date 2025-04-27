import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import freelancer from "../../assets/images/freelancer.png";
import favorite from "../../assets/icons/favorite.png";
import zipper from "../../assets/icons/zipper.svg";
import battery from "../../assets/icons/battery.svg";
import smail from "../../assets/icons/smail.svg";
import favoriteAccent from "../../assets/icons/favoriteAccent.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/userSlice";

// Данные для карточек
const data = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  lastName: "Жанна Кондратьева",
  rating: "5.0",
  title: "Маркетолог-эксперт со стажем 14 лет практических работ",
  region: "Регион",
  price: "-1200₽ за заказ",
  orders: "10 заказов в вашей сфере",
  successRate: "97% успешных заказов",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nullam feugiat porttitor arcu magna vel fermentum dictumst morbi. Ut id malesuada nisl sit nunc. Pellentesque tellus dignissim eget praesent tellus. In lacus at  rutrum...",
}));

const ListPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorite1, setFavorite1] = useState(false);
  const [indexFavorite, setIndexFavorite] = useState(null);

  const itemsPerPage = 7;

  const dispatch = useDispatch()

  const users = useSelector((state) => state.user.users.users) || []
 
  

  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  useEffect(() => {
    if (users) {
      console.log(users);
    }
  }, [users]);
  


  function favorites(index) {
    setFavorite1(!favorite1);
    setIndexFavorite(index);
  }

  // Определение текущих карточек
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users?.length / itemsPerPage);

  // Функция для смены страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.container}>
      {/* Карточки */}
      <div className={styles.cardsContainer}>
        {currentItems?.map((item, index) => (
          <div className={styles.cart} key={item.userId}>
            <div className={styles.user}>
              <div className={styles.userInfo}>
                <img className={styles.freelancer} src={freelancer} alt="" />
                <div className={styles.user_info}>
                    <div className={styles.user_rating}>
                      <a href="#">{item.lastName} {item.firstName}</a>
                      <div>
                        <img src="/src/assets/icons/star.svg" alt="star"/> 
                        <p>{item.rating}{"4.9"}</p>
                      </div>
                    </div>
                    <p className={styles.title}>{item.title}{"Маркетолог-эксперт со стажем 14 лет практических работ"}</p>
                    <p>{item.region}{"Россия"}</p>
                </div>
              </div>
              <div className={styles.favorite}>
                <div className={favorite1 && indexFavorite === index ? styles.selected_freelancer : ""} onClick={() => favorites(index)}>
                  <div className={`${styles.icon} ${favorite1 && indexFavorite === index ? styles.visible : styles.hidden}`}>
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
                  <div className={`${styles.icon} ${favorite1 && indexFavorite === index ? styles.hidden : styles.visible}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                      <path d="M8 6.2C8 5.08 8 4.52 8.2725 4.092C8.51218 3.71569 8.89462 3.40974 9.365 3.218C9.9 3 10.6 3 12 3H19C20.4 3 21.1 3 21.635 3.218C22.1054 3.40974 22.4878 3.71569 22.7275 4.092C23 4.52 23 5.08 23 6.2V19.505C23 19.991 23 20.234 22.8738 20.367C22.8192 20.4248 22.7496 20.4725 22.6697 20.5067C22.5899 20.5409 22.5017 20.5608 22.4112 20.565C22.2025 20.575 21.95 20.44 21.445 20.171L15.5 17L9.555 20.17C9.05 20.44 8.7975 20.575 8.5875 20.565C8.49729 20.5606 8.40935 20.5407 8.32972 20.5065C8.25009 20.4723 8.18067 20.4247 8.12625 20.367C8 20.234 8 19.991 8 19.505V6.2Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <button>Пригласить</button>
              </div>
            </div>
            <div className={styles.raiting}>
              <p>{item.price}{"~1200₽ за заказ"}</p>
              <div>
                <img src={battery} alt="" /> {item.orders}{"10 заказов в вашей сфере"}
              </div>
              <div>
                <img src={smail} alt="" /> {item.successRate}{"97% успешных заказов"}
              </div>
            </div>
            <p className={styles.user_desc} style={{ color: "gray", marginTop: "12px", fontSize: "14px", lineHeight: "140%"}}>
              {item.description}{"Lorem ipsum dolor sit amet consectetur. Nullam feugiat porttitor arcu magna vel fermentum dictumst morbi. Ut id malesuada nisl sit nunc. Pellentesque tellus dignissim eget praesent tellus. In lacus at venenatis pretium vestibulum rutrum"}
            </p>
            <div className={styles.buttons1}>
                    {/* Максимум 5 навыков */}
                    <button>SEO</button>
                    <button>Интеграция с CRM</button>
                    <button>Настройка аналитики</button>
                    <button>Копирайтинг</button>
                    <button>Интеграция с CRM</button>
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

export default ListPagination;
