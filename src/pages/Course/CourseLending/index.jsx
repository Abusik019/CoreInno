import styles from './style.module.css';
import copy from '../../../assets/icons/copy.svg';
import share from '../../../assets/icons/share.svg';
import darkStar from '../../../assets/icons/filled-star-black.svg';
import check from '../../../assets/icons/checkmark.svg';
import stepik from '../../../assets/icons/stepik.svg';
import vkontakte from '../../../assets/icons/vkontakte.svg';
import telegram from '../../../assets/icons/tg-white.svg';
import { useState } from "react";

export default function CourseLending() {
    const [textToCopy] = useState("https://jobi-fy.ru/course");
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(textToCopy);
          setCopied(true); // меняем иконку на "успех"

          setTimeout(() => {
            setCopied(false); // возвращаем обратно через 2 секунды
          }, 2000);
        } catch (err) {
            console.error("Ошибка копирования: ", err);
        }
    };

    const handleShare = async () => {
        try {
          await navigator.share({
            title: "Jobify",
            text: "Посмотри этот курс!",
            url: "https://jobi-fy.ru/course",
          });
        } catch (error) {
          console.error("Ошибка при попытке поделиться: ", error);
        }
    };

    return (
        <div className={styles.course_lending}>
            <div className={styles.content}>
                <div className={styles.first_block}>
                    <div className={styles.first_block__top}>
                        <div className={styles.info_title}>
                            <div className={styles.info_title__text}>
                                <h1>Обучающий курс по нейросетям</h1>
                                <div className={styles.info_title__text_description}>
                                    <p>Длительность: 32 часа</p>
                                    {/* <div>
                                        <div>
                                            <img src={darkStar} alt="star"/>
                                            <img src={darkStar} alt="star"/>
                                            <img src={darkStar} alt="star"/>
                                            <img src={darkStar} alt="star"/>
                                            <img src={darkStar} alt="star"/>
                                        </div>
                                        <a href='#'>12 отзывов</a>
                                    </div> */}
                                </div>
                            </div>
                            <div className={styles.info_title__price}>
                                <h4>1290 ₽</h4>
                                <p>1890 ₽</p>
                            </div>
                        </div>
                        <div className={styles.img_block}></div>
                        <div className={styles.about}>
                            <h2>О курсе</h2>
                            <div>
                                <p>Хотите разобраться, как работают нейросети и научиться применять их в реальных задачах? Этот курс поможет вам шаг за шагом освоить современные AI-инструменты: от работы с текстами и изображениями до генерации музыки и создания сайтов.</p>
                                <p>Мы будем не просто разбирать теорию, а сразу пробовать всё на практике: научимся обрабатывать фото, создавать сайты и презентации, выполнять текстовые работы, генерировать звуки - работать с разными типами нейросетей и даже разберёмся, как монетизировать свои знания.</p>
                                <p>Курс подходит как новичкам, так и тем, кто уже знаком с нейросетями, но хочет выйти на новый уровень. Простым языком, с понятными примерами и полезными домашними заданиями.</p>
                                <p>Обучение прошло лицензирование, и по завершении курса вы получите удостоверение о повышении квалификации</p>
                            </div>
                        </div>
                        <div className={styles.modules}>
                            <h2>Уроки курса</h2>
                            <div>
                                <p>№1. Введение в курс</p>
                                <p>№2. Работа с текстовой информацией</p>
                                <p>№3. Нейросети, работающие с аудиозаписями и музыкой</p>
                                <p>№4. Генерация контента. Часть 1.</p>
                                <p>№5. Генерация контента. Часть 2.</p>
                                <p>№6. Графический дизайн</p>
                                <p>№7. Создание сайтов и презентаций</p>
                                <p>№8. Обработка фото</p>
                                <p>№9. Разные нейросети.</p>
                                <p>№10. Поиск клиентов и монетизация своих знаний</p>
                            </div>
                        </div>
                        <div className={styles.how}>
                            <h2>Как проходит обучение?</h2>
                            <div>
                                <p>Обучение на нашем видеокурсе по нейросетям включает интересные видеоуроки с наглядными примерами и практическими заданиями. После каждого урока вы выполняете упражнения и домашние задания, что способствует углублению знаний и развитию навыков в этой области. Этот курс позволит вам уверенно применять изученное на практике и расширить профессиональные возможности</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.first_block__bottom}>
                        <h2>Расскажите о курсе друзьям</h2>
                        <div className={styles.copy_block}>
                            <p>{textToCopy}</p>
                            <div className={copied ? styles.isCopied : ""} onClick={handleCopy}><img src={copied ? check : copy} alt="copy"/></div>
                            <div onClick={handleShare}><img src={share} alt="share"/></div>
                        </div>
                    </div>
                </div>

                <div className={styles.second_block}>
                    <div className={styles.buttons}>
                        <button disabled>Скоро в продаже</button>
                        <button>Узнать больше</button>
                    </div>
                    <div className={styles.what_include}>
                        <h2>Что входит в курс?</h2>
                        <div>
                            <p>10 модулей</p>
                            <p>4 часа видео</p>
                            <p>32 домашних работы</p>
                        </div>
                    </div>
                    <div className={styles.platforms}>
                        <h2>Мы на платформах</h2>
                        <div className={styles.platforms_list}>
                            <a href="#"><img src={stepik} alt="stepik" /></a>
                            <a href="#"><img src={vkontakte} alt="getCourse" /></a>
                            <a href="#"><img src={telegram} alt="telegram" /></a>
                        </div>
                    </div>
                    <p>Последнее обновление 31.01.2025</p>
                </div>
            </div>
        </div>
    )
}