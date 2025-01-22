import React, { useState } from "react";
import styles from "./style.module.css";
import search from "../../assets/icons/search.svg";
import right from "../../assets/icons/right.svg";
import bottom from "../../assets/icons/bottom.svg";

import ReactSlider from "react-slider";
import ListPagination from "../../components/ListPagination";

function ListFreelancer() {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [openCategor, setOpenCategor] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [openExecutor, setOpenExecutor] = useState(false);
  const [openWords, setOpenWords] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openOrders1, setOpenOrders1] = useState(false);
  const [subcategorie, setSubcategorie] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [successRate, setSuccessRate] = useState(0);
  const [successRate1, setSuccessRate1] = useState(0);

  const categories = [
    {
      name: "Категория 1 ",
      subcategories: ["Категория 1.1", "Категория 1.2", "Категория 1.3"],
    },
    {
      name: "Категория 2 ",
      subcategories: ["Категория 2.1", "Категория 2.2", "Категория 2.3"],
    },
    {
      name: "Категория 3 ",
      subcategories: ["Категория 3.1", "Категория 3.2", "Категория 3.3"],
    },
    {
      name: "Категория 4 ",
      subcategories: ["Категория 4.1", "Категория 4.2", "Категория 4.3"],
    },
    {
      name: "Категория 5 ",
      subcategories: ["Категория 5.1", "Категория 5.2", "Категория 5.3"],
    },
  ];
  const rows = [5, 4, 3, 2, 1];
  const items = Array(15).fill("Something");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function handleTogleCategor(index) {
    toggleCategory(index);
    setSubcategorie();
  }

  function handleSliderChange([min, max]) {
    setMinPrice(min);
    setMaxPrice(max);
  }

  return (
    <div>
      <header className={styles.content}>
        <h1>Список фрилансеров</h1>
        <img src={search} alt="" />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Поиск"
          type="text"
        />
      </header>
      <main className={styles.main} >
        <div className={styles.left}>
          <div className={styles.sidebar}>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => setOpenCategor(!openCategor)}
            >
              Категории{" "}
              {openCategor ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}
            </h2>
            {openCategor && (
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>
                    <div
                      onClick={() => handleTogleCategor(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {category.name}{" "}
                      {category.subcategories.length > 0 &&
                        (openIndex === index ? (
                          <img src={right} alt="" />
                        ) : (
                          <img src={bottom} alt="" />
                        ))}
                    </div>
                    {openIndex === index &&
                      category.subcategories.length > 0 && (
                        <ul>
                          {category.subcategories.map((sub, subIndex) => (
                            <li
                              onClick={() => setSubcategorie(subIndex)}
                              style={{
                                cursor: "pointer",
                                backgroundColor:
                                  subcategorie === subIndex && "#EAEAEA",
                                borderRadius: "8px",
                                padding: "5px",
                              }}
                              key={subIndex}
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.price}>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => setOpenPrice(!openPrice)}
            >
              Цена, ₽{" "}
              {openPrice ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openPrice && (
              <div className={styles.priceInputs}>
                <div>
                  <label>Мин. цена</label>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <div className={styles.line}></div>
                </div>
                <div>
                  <label>Макс. цена</label>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <div className={styles.line}></div>
                  <div className={styles.sliderContainer}>
                    <ReactSlider
                      className={styles.slider}
                      thumbClassName={styles.thumb}
                      trackClassName={styles.track}
                      min={0}
                      max={1000000}
                      value={[minPrice, maxPrice]}
                      onChange={handleSliderChange}
                      pearling
                      minDistance={10}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.rating}>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => setOpenRating(!openRating)}
            >
              Рейтинг{" "}
              {openRating ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openRating && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {rows.map((filledStars, rowIndex) => (
                    <div key={rowIndex} style={{ display: "flex", gap: "5px" }}>
                      <input
                        style={{
                          position: "relative",
                          top: "8px",
                          borderRadius: "50%",
                          width: "22px",
                          height: "22px",
                        }}
                        type="checkbox"
                      />
                      {/* Рендерим 5 звезд в строке, закрашенные или пустые */}
                      {[...Array(5)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          style={{
                            fontSize: "24px",
                            color:
                              starIndex < filledStars ? "black" : "lightgray", // Закрашенные и пустые звезды
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.executor}>
            <h2 onClick={() => setOpenExecutor(!openExecutor)}>
              Исполнитель{" "}
              {openExecutor ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openExecutor && (
              <div>
                <div className={styles.executors}>
                  <input type="checkbox" />
                  <p>Фрилансер</p>
                </div>
                <div className={styles.executors}>
                  <input type="checkbox" />
                  <p>Студия</p>
                </div>
                <div className={styles.executors}>
                  <input type="checkbox" />
                  <p>Неважно</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.words}>
            <h2 onClick={() => setOpenWords(!openWords)}>
              Ключевые слова{" "}
              {openWords ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openWords && (
              <div className={styles.word}>
                <img src={search} alt="" />
                <input
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
                  placeholder="Поиск"
                  type="text"
                />
                <div className={styles.container}>
                  {items.map((item, index) => (
                    <div className={styles.item}>
                      <input type="checkbox" />
                      <span>{item}</span>
                      <span>99</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.orders}>
            <h2 onClick={() => setOpenOrders(!openOrders)}>
              Успешные заказы{" "}
              {openOrders ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openOrders && (
              <div className={styles.order}>
                <p>%успешных заказов от</p>
                <p>Текущее значение {successRate}%</p>

                <div
                  style={{ width: "265px", border: "1px solid black", marginBottom: "40px" }}
                ></div>
                
                  <ReactSlider
                    className={styles.slider1}
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    min={0}
                    max={100}
                    value={successRate}
                    onChange={(val) => setSuccessRate(val)}
                    pearling
                    minDistance={1}
                  />
                
              </div>
            )}
          </div>
          <div className={styles.orders}>
            <h2 onClick={() => setOpenOrders1(!openOrders1)}>
              Заказов в работе{" "}
              {openOrders1 ? (
                <img src={right} alt="" />
              ) : (
                <img src={bottom} alt="" />
              )}{" "}
            </h2>
            {openOrders1 && (
              <div className={styles.order}>
                <p>Не более</p>
                <p>Текущее значение {successRate1}%</p>

                <div
                  style={{ width: "265px", border: "1px solid black", marginBottom: "40px" }}
                ></div>
                   <ReactSlider
                    className={styles.slider1}
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    min={0}
                    max={100}
                    value={successRate1}
                    onChange={(val) => setSuccessRate1(val)}
                    pearling
                    minDistance={1}
                  />
              </div>
            )}
          </div>
          <div className={styles.buttons}>
            <button>Применить фильтры</button>
            <button>Сбросить фильтры</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.carts}>
          <ListPagination/>
          
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListFreelancer;
