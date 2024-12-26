import React from "react";
import styles from "./style.module.css";
import Rectangle from "../../assets/Rectangle 95.svg";
import favorite from "../../assets/icons8.svg";

function Catalog() {
  return (
    <div className={styles.rod}>
      <header>
        <h1>Каталог фрилансеров</h1>
        <ul className={styles.categor}>
          <li>Разработка и it</li>
          <li>Дизайн</li>
          <li>Реклама / Маркетинг</li>
          <li>Переводы</li>
          <li>SMM</li>
        </ul>
      </header>

      <main>
        <h2 className={styles.zagalovok1}>
          Опытные фрилансеры в сфере "Реклама / Маркетинг"{" "}
        </h2>
        <div className={styles.carts}>
          <div className={styles.cart}>
            <div className={styles.info}>
              <img src={Rectangle} alt="" />
              <div className={styles.name}>
                <p>Жанна Кондратьева</p>
                <p>Стаж 14 лет</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.grade}>
              <div className={styles.percent}>
                <div>97% успешных заказов</div>
                <p>*5.0</p>
              </div>

              <div className={styles.percent}>
                <div>12000₽</div>
                <p>-1200₽ на заказ</p>
              </div>
            </div>
            <div className={styles.button}>
              <button>Обратиться</button>
              <img src={favorite} alt="" />
            </div>
          </div>
          <div className={styles.cart}>
            <div className={styles.info}>
              <img src={Rectangle} alt="" />
              <div className={styles.name}>
                <p>Жанна Кондратьева</p>
                <p>Стаж 14 лет</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.grade}>
              <div className={styles.percent}>
                <div>97% успешных заказов</div>
                <p>*5.0</p>
              </div>

              <div className={styles.percent}>
                <div>12000₽</div>
                <p>-1200₽ на заказ</p>
              </div>
            </div>
            <div className={styles.button}>
              <button>Обратиться</button>
              <img src={favorite} alt="" />
            </div>
          </div>
          <div className={styles.cart}>
            <div className={styles.info}>
              <img src={Rectangle} alt="" />
              <div className={styles.name}>
                <p>Жанна Кондратьева</p>
                <p>Стаж 14 лет</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.grade}>
              <div className={styles.percent}>
                <div>97% успешных заказов</div>
                <p>*5.0</p>
              </div>

              <div className={styles.percent}>
                <div>12000₽</div>
                <p>-1200₽ на заказ</p>
              </div>
            </div>
            <div className={styles.button}>
              <button>Обратиться</button>
              <img src={favorite} alt="" />
            </div>
          </div>
        </div>

        <h2 className={styles.zagalovok1}>Недавно просмотренные</h2>
        <div className={styles.carts}>
          <div className={styles.cart}>
            <div className={styles.info}>
              <img src={Rectangle} alt="" />
              <div className={styles.name}>
                <p>Жанна Кондратьева</p>
                <p>Стаж 14 лет</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.grade}>
              <div className={styles.percent}>
                <div>97% успешных заказов</div>
                <p>*5.0</p>
              </div>

              <div className={styles.percent}>
                <div>12000₽</div>
                <p>-1200₽ на заказ</p>
              </div>
            </div>
            <div className={styles.button}>
              <button>Обратиться</button>
              <img src={favorite} alt="" />
            </div>
          </div>
          <div className={styles.cart}>
            <div className={styles.info}>
              <img src={Rectangle} alt="" />
              <div className={styles.name}>
                <p>Жанна Кондратьева</p>
                <p>Стаж 14 лет</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.grade}>
              <div className={styles.percent}>
                <div>97% успешных заказов</div>
                <p>*5.0</p>
              </div>

              <div className={styles.percent}>
                <div>12000₽</div>
                <p>-1200₽ на заказ</p>
              </div>
            </div>
            <div className={styles.button}>
              <button>Обратиться</button>
              <img src={favorite} alt="" />
            </div>
          </div>
          <div className={styles.cart}>
            <div className={styles.info}>
              <img src={Rectangle} alt="" />
              <div className={styles.name}>
                <p>Жанна Кондратьева</p>
                <p>Стаж 14 лет</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.grade}>
              <div className={styles.percent}>
                <div>97% успешных заказов</div>
                <p>*5.0</p>
              </div>

              <div className={styles.percent}>
                <div>12000₽</div>
                <p>-1200₽ на заказ</p>
              </div>
            </div>
            <div className={styles.button}>
              <button>Обратиться</button>
              <img src={favorite} alt="" />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <h2 className={styles.zagalovok1}>Объявления "Реклама / Маркетинг" </h2>
        <div className={styles.carts}>
          <div>
            <img className={styles.rectange} src={Rectangle} alt="" />
            <div className={styles.block}>
              <div className={styles.reclama}>
                <p>Контекстная реклама любых видов под ключ </p>
                <h4>от 1000₽</h4>
              </div>
              <div className={styles.info1}>
                <img src={Rectangle} alt="" />
                <div className={styles.info2}>
                  <p>Имя Фамилия</p>
                  <p>97% успешных заказов</p>
                </div>
                <p>*5.0</p>
              </div>
            </div>
          </div>
          <div>
            <img className={styles.rectange} src={Rectangle} alt="" />
            <div className={styles.block}>
              <div className={styles.reclama}>
                <p>Контекстная реклама любых видов под ключ </p>
                <h4>от 1000₽</h4>
              </div>
              <div className={styles.info1}>
                <img src={Rectangle} alt="" />
                <div className={styles.info2}>
                  <p>Имя Фамилия</p>
                  <p>97% успешных заказов</p>
                </div>
                <p>*5.0</p>
              </div>
            </div>
          </div>
          <div>
            <img className={styles.rectange} src={Rectangle} alt="" />
            <div className={styles.block}>
              <div className={styles.reclama}>
                <p>Контекстная реклама любых видов под ключ </p>
                <h4>от 1000₽</h4>
              </div>
              <div className={styles.info1}>
                <img src={Rectangle} alt="" />
                <div className={styles.info2}>
                  <p>Имя Фамилия</p>
                  <p>97% успешных заказов</p>
                </div>
                <p>*5.0</p>
              </div>
            </div>
          </div>
          <div>
            <img className={styles.rectange} src={Rectangle} alt="" />
            <div className={styles.block}>
              <div className={styles.reclama}>
                <p>Контекстная реклама любых видов под ключ </p>
                <h4>от 1000₽</h4>
              </div>
              <div className={styles.info1}>
                <img src={Rectangle} alt="" />
                <div className={styles.info2}>
                  <p>Имя Фамилия</p>
                  <p>97% успешных заказов</p>
                </div>
                <p>*5.0</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Catalog;
