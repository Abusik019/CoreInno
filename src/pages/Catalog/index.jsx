import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Rectangle from "../../assets/images/Rectangle 55.png";
import Ellipse from "../../assets/images/Ellipse 6.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchSubCategoryId } from "../../redux/slices/categorySlice";
import CardCarousel from "../../components/CardCarousel";

function Catalog() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0); // Хранит выбранный id категории
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(0); // Хранит выбранный id подкатегории
  const [openSubCategor, setOpenSubCategor] = useState(false);

  const category = useSelector((state) => state.category.category);
    const subCategory = useSelector((state) => state.category.subCategory);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  useEffect(() => {
    dispatch(fetchSubCategoryId());
  }, []);
  console.log(category);

  function handleClickCategor(id) {
    if (id === selectedCategoryId) {
      setOpenSubCategor(!openSubCategor);
    } else {
      setSelectedCategoryId(id);
      setOpenSubCategor(true);
    }
  }

  return (
    <div className={styles.rod}>
      <header>
        <h1>Каталог фрилансеров</h1>
        <ul className={styles.categor}>
          {category.map((item) => {
            return (
              <li
                style={{
                  color: item.id === selectedCategoryId ? "#FFFFFF" : "#000000",
                  backgroundColor:
                    item.id === selectedCategoryId ? "#000000" : "#FFFFFF",
                    cursor: "pointer"
                }}
                onClick={() => handleClickCategor(item.id)}
                key={item.id}
              >
                {item.rusName}
              </li>
            );
          })}
        </ul>
        {openSubCategor && <p className={styles.subCat}>Подкатегории</p>}
        <div className={styles.subCategor}>
          {openSubCategor &&
            subCategory
              .filter((subcat) => subcat.categoryId === selectedCategoryId) // Фильтруем по выбранной категории
              .map((subcat) => (
                <span
                  onClick={() => setSelectedSubCategoryId(subcat.id)}
                  style={{
                    cursor: "pointer",
                    color:
                      subcat.id === selectedSubCategoryId
                        ? "#FFFFFF"
                        : "#000000",
                    backgroundColor:
                      subcat.id === selectedSubCategoryId
                        ? "#000000"
                        : "#EAEAEA",
                  }}
                  key={subcat.id}
                  className={styles.subCategoryTag}
                >
                  {subcat.rusName}
                </span>
              ))}
        </div>
      </header>

      <main>
        <h2 className={styles.zagalovok1}>
          Опытные фрилансеры в сфере "Реклама / Маркетинг"{" "}
        </h2>
        <div className={styles.carts}>
          <CardCarousel />
        </div>

        <h2 className={styles.zagalovok1}>Недавно просмотренные</h2>
        <div className={styles.carts}>
          <CardCarousel />
        </div>
      </main>

      <footer>
        <h2 className={styles.zagalovok1}>Объявления "Реклама / Маркетинг" </h2>
        <div className={styles.carts}>
          <div className={styles.cart}>
            <img className={styles.rectange} src={Rectangle} alt="" />
            <div className={styles.block}>
              <div className={styles.reclama}>
                <p>Контекстная реклама любых видов под ключ </p>
                <h4>от 1000₽</h4>
              </div>
              <div className={styles.info1}>
                <img src={Ellipse} alt="" />
                <div className={styles.info2}>
                  <p>Имя Фамилия</p>
                  <p>97% успешных заказов</p>
                </div>
                <p>5.0</p>
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <img className={styles.rectange} src={Rectangle} alt="" />
            <div className={styles.block}>
              <div className={styles.reclama}>
                <p>Контекстная реклама любых видов под ключ </p>
                <h4>от 1000₽</h4>
              </div>
              <div className={styles.info1}>
                <img src={Ellipse} alt="" />
                <div className={styles.info2}>
                  <p>Имя Фамилия</p>
                  <p>97% успешных заказов</p>
                </div>
                <p>5.0</p>
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <img className={styles.rectange} src={Rectangle} alt="" />
            <div className={styles.block}>
              <div className={styles.reclama}>
                <p>Контекстная реклама любых видов под ключ </p>
                <h4>от 1000₽</h4>
              </div>
              <div className={styles.info1}>
                <img src={Ellipse} alt="" />
                <div className={styles.info2}>
                  <p>Имя Фамилия</p>
                  <p>97% успешных заказов</p>
                </div>
                <p>5.0</p>
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <img className={styles.rectange} src={Rectangle} alt="" />
            <div className={styles.block}>
              <div className={styles.reclama}>
                <p>Контекстная реклама любых видов под ключ </p>
                <h4>от 1000₽</h4>
              </div>
              <div className={styles.info1}>
                <img src={Ellipse} alt="" />
                <div className={styles.info2}>
                  <p>Имя Фамилия</p>
                  <p>97% успешных заказов</p>
                </div>
                <p>5.0</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Catalog;
