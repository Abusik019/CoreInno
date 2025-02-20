import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import questionImg from "../../assets/icons/question.svg";
import arrow from "../../assets/icons/arrow.svg";
import whiteArrow from "../../assets/icons/w-longArrow.svg";
import blackArrow from "../../assets/icons/b-longArrow.svg";
import close from "../../assets/icons/close.svg";
import mockGuide from "../../assets/images/mockGuide.png";
import menu from '../../assets/icons/order-menu.svg';
import edit from '../../assets/icons/edit.svg';
import add from '../../assets/icons/add.svg';
import deleteImg from '../../assets/icons/redDelete.svg';

const mockGuides = [
    ...Array(3)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            title: "Название Гайда",
            description:
                "Lorem ipsum dolor sit amet consectetur. At sodales sed adipiscing tempus est ac. Tempor elit blandittempus.",
        })),
];

export default function MyAnnouncements() {
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdownId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className={styles.myOrders}>
            <section className={styles.myOrdersContent}>
                <div className={styles.myOrdersHeadContent}>
                    <div className={styles.myOrdersTitle}>
                        <h2>Мои объявления</h2>
                        <img
                            src={questionImg}
                            width={24}
                            height={24}
                            alt="question"
                        />
                    </div>
                    <button>
                        <Link to="#">
                            <span>+</span> Добавить объявление
                        </Link>
                    </button>
                </div>
                <ul className={styles.orders}>
                    {[1, 2, 3].map((id) => (
                        <li key={id}>
                            <div className={styles.topOrderBlock}>
                                <div>
                                    <span>Категория</span>
                                    <span>2 декабря, 00:11</span>
                                </div>
                                <button
                                    className={styles.orderMenu}
                                    onClick={() => toggleDropdown(id)}
                                >
                                    <img src={menu} width={18} height={4} alt="menu" />
                                </button>
                            </div>
                            <h2>Создаю сайты</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Dui tortor morbi facilisis phasellus lacus. Diam interdum egestas arcu iaculis amet aenean ut molestie. Lacus laoreet diam vel massa ut. Non gravida mauris tincidunt urna quis mi neque sapien a.</p>
                            <div className={styles.orderStats}>
                                <div>263</div>
                                <div>27 запросов</div>
                            </div>
                            <div
                                className={`${styles.orderDropdown} ${
                                    openDropdownId === id ? styles.visible : ""
                                }`}
                            >
                                <Link to="#">
                                    <img src={edit} width={24} height={24} alt="edit" />
                                    <h2>Редактировать заказ</h2>
                                </Link>
                                <Link to="#">
                                    <img src={add} width={24} height={24} alt="add" />
                                    <h2>Редактировать заказ</h2>
                                </Link>
                                <Link to="#">
                                    <img src={deleteImg} width={24} height={24} alt="delete" />
                                    <h2>Удалить заказ</h2>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className={styles.showAll}>Показать все</button>
            </section>
            <section className={styles.guidesContainer}>
                <ul className={styles.guides}>
                    <li>
                        <div className={styles.guidePinnedTitle}>
                            <h2>Название Гайда</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. At sodales
                            sed adipiscing tempus est ac. Tempor elit
                            blandittempus.
                        </p>
                        <button>
                            <img
                                src={whiteArrow}
                                width={134}
                                height={15}
                                alt="arrow"
                            />
                        </button>
                    </li>
                    {mockGuides.map((guide) => (
                        <li key={guide.id}>
                            <div className={styles.guideTitle}>
                                <h2>Название Гайда</h2>
                                <button>
                                    <img
                                        src={close}
                                        width={29}
                                        height={29}
                                        alt="close button"
                                    />
                                </button>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. At
                                sodales sed adipiscing tempus est ac. Tempor
                                elit blandittempus.
                            </p>
                            <button>
                                <img
                                    src={blackArrow}
                                    width={134}
                                    height={15}
                                    alt="arrow"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.fullGuides}>
                    <div className={styles.bigGuide}>
                        <div className={styles.guideContent}>
                            <div className={styles.guideTitle}>
                                <h2>Название Гайда</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Viverra cursus quam netus bibendum justo
                                    pretium est maecenas cursus.{" "}
                                </p>
                            </div>
                            <button>
                                <Link to="#">
                                    <img
                                        src={arrow}
                                        width={100}
                                        height={15}
                                        alt="arrow"
                                    />
                                </Link>
                            </button>
                        </div>
                        <img
                            src={mockGuide}
                            width={166}
                            height={166}
                            alt="guide image"
                            style={{ borderRadius: "24px" }}
                        />
                    </div>
                    <div className={styles.smallGuides}>
                        <div>
                            <div className={styles.smallGuideContent}>
                                <h2>НазваниеГайда</h2>
                                <p>
                                    Lorem ipsum dolo. Viverra cursus quam netus
                                    bibendum justo.
                                </p>
                            </div>
                            <img
                                src={mockGuide}
                                width={110}
                                height={110}
                                alt="guide image"
                            />
                        </div>
                        <div>
                            <div className={styles.smallGuideContent}>
                                <h2>НазваниеГайда</h2>
                                <p>
                                    Lorem ipsum dolo. Viverra cursus quam netus
                                    bibendum justo.
                                </p>
                            </div>
                            <img
                                src={mockGuide}
                                width={110}
                                height={110}
                                alt="guide image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
