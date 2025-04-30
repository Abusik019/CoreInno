import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import search from "../../assets/icons/search.svg";
import right from "../../assets/icons/right.svg";
import bottom from "../../assets/icons/bottom.svg";
import mockGuide from "../../assets/images/leaderFreelance.png";
import Frame from "../../assets/icons/Frame.png";
import close from "../../assets/icons/close.svg";
import { motion, AnimatePresence } from 'framer-motion';
import arrowImg from "../../assets/icons/arrow.svg";
import FilledStarBlack from '../../assets/icons/filled-star-black.svg';
import FilledStarGray from '../../assets/icons/filled-star-gray.svg';

import ReactSlider from "react-slider";
import ListPaginationOrders from "../../components/ListPaginationOrders";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  fetchSubCategoryId,
} from "../../redux/slices/categorySlice";

function ListOrders() {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [openCategor, setOpenCategor] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [openRating, setOpenRating] = useState(false);
  const [openExecutor, setOpenExecutor] = useState(false);
  const [openWords, setOpenWords] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openOrders1, setOpenOrders1] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [successRate, setSuccessRate] = useState(0);
  const [successRate1, setSuccessRate1] = useState(0);
  const [number, setNumber] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);
  const [indexSubCategor, setIndexSubCategor] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  useEffect(() => {
    dispatch(fetchSubCategoryId());
  }, []);

  const categories = useSelector((state) => state.category.category);
  const subCategory = useSelector((state) => state.category.subCategory);

  const rows = [5, 4, 3, 2, 1];
  const items = Array(15).fill("Something");

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
    setIndexSubCategor(null);
  };

  function handleSliderChange([min, max]) {
    setMinPrice(min);
    setMaxPrice(max);
  }

  const generateStars = () => {
      const result = [];
    
      for (let i = 5; i >= 1; i--) {
        const row = [];
    
        for (let j = 1; j <= 5; j++) {
          if (j <= i) {
            row.push(<img src={FilledStarBlack} alt="black star" key={`b-${j}`} />);
          } else {
            row.push(<img src={FilledStarGray} alt="gray star" key={`g-${j}`} />);
          }
        }
    
        result.push(row);
      }
      
      return result;
  };

  const [stars] = useState(generateStars())
  
return (
    <div className={styles.listOrders}>
      <header className={styles.content}>
        <h1>Раздел заказов</h1>
        <div className={styles.banner}>
          {/* <button className={styles.close}>
            <img src={close} width={24} height={24} alt="close" />
          </button> */}
          <div className={styles.banner_content}>
            <div className={styles.banner1}>
              <div>
                <p>Полезные советы</p>
                <h2>Как стать лидером на бирже и увеличить своё влияние</h2> 
              </div>
              <button><img src={arrowImg} width={48} height={15} alt="" /></button>
            </div>
            <img className={styles.mockGuide} src={mockGuide} alt="" />
          </div>
        </div>
        <img  src={search} alt="" />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Поиск"
          type="text"
        />
        <div className={styles.list}>
          <p
            style={{
              color: number === 1 ? "#000000" : "gray",
              cursor: "pointer",
            }}
            onClick={() => setNumber(1)}
          >
            Все заказы
          </p>
          <p
            style={{
              color: number === 2 ? "#000000" : "gray",
              cursor: "pointer",
            }}
            onClick={() => setNumber(2)}
          >
            Рекомендуемые
          </p>
          <p
            style={{
              color: number === 3 ? "#000000" : "gray",
              cursor: "pointer",
            }}
            onClick={() => setNumber(3)}
          >
            Недавно просмотренные
          </p>
          <p
            style={{
              color: number === 4 ? "#000000" : "gray",
              cursor: "pointer",
            }}
            onClick={() => setNumber(4)}
          >
            Сохраненные заказы
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.left__content}>
            <div className={styles.sidebar}>
              <h2 style={{ cursor: "pointer", marginBottom: openCategor ? "20px" : 0 }} onClick={() => setOpenCategor(!openCategor)}>
                Категории{" "}
                <img src={right} alt="" className={openCategor ? styles.active_category : ""}/>
              </h2>
              {openCategor && (
                <ul
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: "500px" }}  // Указываем большое значение для maxHeight
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{overflow: "hidden"}}
                >
                  {categories.map((category, index) => (
                    <li key={category.id}>
                      <div onClick={() => toggleCategory(index)} style={{ cursor: "pointer", opacity: activeCategory===index ? 1 : 0.8 }}>
                        {category.rusName}{" "}
                        <img src={right} alt="" className={activeCategory === index ? styles.active_subcategory : ""}/>
                      </div>
                      {activeCategory === index && (
                        <ul className={styles.subcategories}>
                          {subCategory
                            .filter(
                              (sub) => sub.categoryId === category.id // Match subcategories to category
                            )
                            .map((sub, subIndex) => (
                              <li
                                onClick={() => setIndexSubCategor(subIndex)}
                                style={{
                                  cursor: "pointer",
                                  backgroundColor:
                                    indexSubCategor === subIndex && "#EAEAEA",
                                  opacity:
                                    indexSubCategor === subIndex && 1,
                                  padding: "10px 12px",
                                  height: "36px",
                                  display: "flex",
                                  alignItems: "center",
                                  borderRadius: "8px",
                                  paddingLeft: "8px",
                                }}
                                key={sub.id}
                              >
                              {sub.rusName}
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
              <h2 style={{ cursor: "pointer", marginBottom: openPrice ? "20px" : 0  }} onClick={() => setOpenPrice(!openPrice)}>Бюджет, ₽{" "}
                <img src={right} alt="" className={openPrice ? styles.active_category : ""}/>
              </h2>
              {openPrice && (
                <div className={styles.prices}>
                  <div className={styles.priceInputs}>
                    <div>
                        <label>Мин. цена</label>
                        <input
                          type="number"
                          style={{color: "#000000", fontSize: "16px"}}
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <div className={styles.line}></div>
                    </div>
                    <div>
                      <label>Макс. цена</label>
                      <input
                        type="number"
                        style={{color: "#000000", fontSize: "16px"}}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                      <div className={styles.line}></div>
                    </div>
                  </div>
                  <ReactSlider className={styles.slider}
                        thumbClassName={styles.thumb}
                        trackClassName={styles.track}
                        min={0}
                        max={100000}
                        value={[minPrice, maxPrice]}
                        onChange={handleSliderChange}
                        pearling
                        step={100}
                        minDistance={10}
                        renderTrack={(props, state) => (
                          <div
                            {...props}
                            className={`${styles.track} ${
                              state.index === 1 ? styles.activeTrack : ""
                            }`}
                          />
                        )}
                      />
                </div>
              )}
            </div>
            <div className={styles.rating}>
              <h2 style={{ cursor: "pointer", marginBottom: openRating ? "20px" : 0   }} onClick={() => setOpenRating(!openRating)}>
                Рейтинг{" "}
                <img src={right} alt="" className={openRating ? styles.active_category : ""}/>
              </h2>
              {openRating && (
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    {
                    rows.map((filledStars, rowIndex) => (
                      <div key={rowIndex} style={{ display: "flex", gap: "5px" }} className={styles.rowStars}>
                        <input
                          style={{
                            top: "8px",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                          }}  
                          type="checkbox"
                        />
                        <div>{stars[rowIndex]}</div>
                        {/* Рендерим 5 звезд в строке, закрашенные или пустые */}
                        {/* <div>
                          {generateStars().map((line, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '4px' }}>
                              {line}
                            </div>
                          ))}
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.buttons}>
            <button>Применить фильтры</button>
            <button>Сбросить фильтры</button>
          </div>
        </div>
        <div className={styles.right}>
            <ListPaginationOrders />
        </div>
      </main>
    </div>
  );
}

export default ListOrders;
