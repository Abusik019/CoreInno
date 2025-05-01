import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import settings from "../../assets/icons/settings.svg";
import image from "../../assets/icons/image.svg";
import pen from "../../assets/icons/pen.svg";
import paymentMethod from "../../assets/icons/paymentMethod.svg";
import logosMastercard from "../../assets/icons/logosMastercard.png";
import google from "../../assets/icons/google.svg";
import vk from "../../assets/icons/vk.svg";
import phone1 from "../../assets/icons/phone1.svg";
import sms from "../../assets/icons/sms.svg";
import lucide from "../../assets/icons/lucide.svg";
import money from "../../assets/icons/money.png";
import outline from "../../assets/icons/outline.svg";
import hyper from "../../assets/icons/hyper.svg";
import computer from "../../assets/icons/computer.svg";
import close from "../../assets/icons/close.svg";
import hidePasswordImg from "../../assets/icons/hidePassword.svg";
import showPasswordImg from "../../assets/icons/showPassword.svg";
import InputIcon from "../../assets/icons/InputIcon.svg";
import PlusIcon from "../../assets/icons/plus.svg"
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCategory,
    fetchSubCategoryId,
} from "../../redux/slices/categorySlice";
import UserIcon from "../../assets/icons/UserIcon.jsx";
import PaymentIcon from "./../../assets/icons/PaymentIcon.jsx";
import SecurityIcon from "./../../assets/icons/SecurityIcon.jsx";
import NotificationIcon from "./../../assets/icons/NotificationIcon.jsx";
import Modal from "../../components/Modal";

function SettingsAccount() {
    const [open, setOpen] = useState(1);
    const [isChecked, setIschecked] = useState(false);
    const [isChecked1, setIschecked1] = useState(false);
    const [modalNumber, setModalNumber] = useState(false);
    const [openPassword, setOpenPassword] = useState(false);
    const [openPassword1, setOpenPassword1] = useState(false);
    const [openPassword2, setOpenPassword2] = useState(false);
    const [balanceTime, setBalanceTime] = useState(null);
    const [methodPayment, setMetodPayment] = useState(false);

    const   [editDataModal, setEditDataModal] = useState(false),
            [skillsModal, setSkillsModal] = useState(false),
            [balanceModal, setBalanceModal] = useState(false);

    const category = useSelector((state) => state.category.category);
    const subCategory = useSelector((state) => state.category.subCategory);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [tempSelectedCategories, setTempSelectedCategories] = useState([]);

    const [openSubCategor, setOpenSubCategor] = useState(null);

    // Выбранные подкатегории по категориям
    const [selectedSubCategories, setSelectedSubCategories] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategory());
    }, []);
    useEffect(() => {
        dispatch(fetchSubCategoryId());
    }, []);

    const handleCategoryClick = (item) => {
        // Переключение подкатегорий
        if (item.id === openSubCategor) {
            setOpenSubCategor(null);
        } else {
            setOpenSubCategor(item.id);
        }

        // Проверяем, выбраны ли подкатегории этой категории
        const hasSelectedSubcategories =
            selectedSubCategories[item.id]?.length > 0;

        // Обновление выбора категорий
        if (
            tempSelectedCategories.includes(item) &&
            !hasSelectedSubcategories
        ) {
            setTempSelectedCategories(
                tempSelectedCategories.filter((cat) => cat.id !== item.id)
            );
        } else if (
            tempSelectedCategories.length < 4 &&
            !hasSelectedSubcategories
        ) {
            setTempSelectedCategories([...tempSelectedCategories, item]);
        }
    };

    const handleSubCategoryClick = (subcat) => {
        const categoryId = subcat.categoryId;

        setSelectedSubCategories((prev) => {
            const currentSelected = prev[categoryId] || [];

            // Если подкатегория уже выбрана, убираем её
            if (currentSelected.includes(subcat.id)) {
                const updatedSelected = currentSelected.filter(
                    (id) => id !== subcat.id
                );
                // Если после удаления подкатегорий больше нет, убираем категорию
                if (updatedSelected.length === 0) {
                    setTempSelectedCategories((prevCategories) =>
                        prevCategories.filter((cat) => cat.id !== categoryId)
                    );
                }
                return {
                    ...prev,
                    [categoryId]: updatedSelected,
                };
            } else if (currentSelected.length < 10) {
                // Добавляем подкатегорию, если лимит не превышен
                if (
                    !tempSelectedCategories.some((cat) => cat.id === categoryId)
                ) {
                    setTempSelectedCategories((prevCategories) => [
                        ...prevCategories,
                        category.find((cat) => cat.id === categoryId),
                    ]);
                }
                return {
                    ...prev,
                    [categoryId]: [...currentSelected, subcat.id],
                };
            }
            return prev;
        });
    };

    // Сохранение изменений
    const saveChanges = () => {
        setSelectedCategories(tempSelectedCategories);
        setSelectedSubCategories(selectedSubCategories);
        setSkillsModal(false);
    };

    // Отмена изменений
    const cancelChanges = () => {
        setTempSelectedCategories([]);
        setSelectedSubCategories({});
        setMetodPayment(false);
    };

    function handleChecked() {
        setIschecked(!isChecked);
    }
    function handleChecked1() {
        setIschecked1(!isChecked1);
    }
    function closeModal() {
        setModal(false);
        setModalNumber(false);
    }
    return (
        <div className={styles.content}>
            <div className={styles.content_inner}>
                <div onClick={() => closeModal()} className={styles.rod}>
                    <h1>Настройки</h1>
                    <div className={styles.categors}>
                        <div className={`${styles.categor} ${open === 1 ? styles.open_categor : ""}`} onClick={() => setOpen(1)}>
                            <UserIcon fillColor="#000" />
                            <p>
                                Основная информация
                            </p>
                        </div>
                        <div className={`${styles.categor} ${open === 2 ? styles.open_categor : ""}`} onClick={() => setOpen(2)}>
                            <PaymentIcon
                                fillColor="#000"
                            />
                            <p>
                                Счета и оплата
                            </p>
                        </div>
                        <div className={`${styles.categor} ${open === 3 ? styles.open_categor : ""}`} onClick={() => setOpen(3)}>
                            <SecurityIcon
                                fillColor="#000"
                            />
                            <p>Безопасность</p>
                        </div>
                        <div className={`${styles.categor} ${open === 5 ? styles.open_categor : ""}`} onClick={() => setOpen(5)}>
                            <NotificationIcon
                                fillColor="#000"
                            />
                            <p>
                                Уведомления
                            </p>
                        </div>
                    </div>
                </div>

                {open === 1 && (
                    <div className={styles.rod2}>
                        <h2>Основная информация</h2>
                        <div className={styles.info}>
                            <div>
                                <h2>Сведения об аккаунте</h2>
                                <img
                                    onClick={() => setEditDataModal(true)}
                                    src={pen}
                                    width={16}
                                    height={16}
                                    alt="pen"
                                />
                            </div>
                            <Modal isOpen={editDataModal} onClose={() => setEditDataModal(false)} showClose={false}>
                                <div className={styles.modal}>
                                    <div className={styles.redactir}>
                                        <h2>
                                            Редактирование данных
                                        </h2>
                                        <img
                                            onClick={() => setEditDataModal(false)}
                                            src={close}
                                            width={30}
                                            height={30}
                                            alt="close"
                                        /> 
                                    </div>
                                    <div className={styles.input1}>
                                        <div>
                                            <p>Имя пользователя</p>
                                            <input type="text" placeholder="Жанна"/>
                                        </div>
                                        <div>
                                            <p>Фамилия</p>
                                            <input type="text" placeholder="Кондратьева"/>
                                        </div>
                                    </div>
                                    <div className={styles.input1}>
                                        <div>
                                            <p>Номер телефона</p>
                                            <input type="text" placeholder="+7 *** *** 84-91" disabled style={{backgroundColor: "rgb(244 244 244 / 68%)", border: "none"}}/>
                                        </div>
                                        <div>
                                            <p>E-mail</p>
                                            <input type="text" placeholder="example@mail.com" disabled style={{backgroundColor: "rgb(244 244 244 / 68%)", border: "none"}}/>
                                        </div>
                                    </div>
                                    <div className={styles.from}>
                                        <div className={styles.country}>
                                            <p>Страна</p>
                                            <select name="" id="">
                                                <option value="">Россия</option>
                                                <option value="">Турция</option>
                                            </select>
                                        </div>
                                        <div className={styles.city}>
                                            <p>Город</p>
                                            <select name="" id="">
                                                <option value="">Москва</option>
                                                <option value="">Станбул</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles.button4}>
                                        <button onClick={() => setEditDataModal(false)}>Отмена</button>
                                        <button onClick={() => setEditDataModal(false)}>Сохранить изменения</button>
                                    </div>
                                </div>
                            </Modal>
                            <div className={styles.user}>
                                <img src={image} width={80} height={80} alt="user image" />
                                <div className={styles.user1}>
                                    <h2>Имя пользователя</h2>
                                    <h3>Город, Страна</h3>
                                    <h4>example@gmail.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div>
                                <h2>Сферы деятельности</h2>
                                <img
                                    onClick={() => setSkillsModal(true)}
                                    src={pen}
                                    width={16}
                                    height={16}
                                    alt="pen"
                                />
                            </div>
                            <Modal isOpen={skillsModal} onClose={() => setSkillsModal(false)} showClose={false} className={styles.spec_modal}>
                                <div className={styles.spec}>
                                    <div className={styles.specInfo}>
                                        <div>
                                            <h2>Специализация</h2>
                                            <p>Выберите не более 4-х категорий</p>
                                        </div>
                                        <img
                                            onClick={() => setSkillsModal(false)}
                                            src={close}
                                            width={30}
                                            height={30}
                                            alt="close"
                                        />
                                    </div>
                                    <div className={styles.specialization}>
                                        {category.map((item) => (
                                            <div key={item.id}>
                                                
                                                <p
                                                    style={{
                                                        opacity: tempSelectedCategories.includes(item) ? "1" : ".7",
                                                        backgroundColor:tempSelectedCategories.includes(item) ? "transparent" : "#EAEAEA",
                                                        border: tempSelectedCategories.includes(item) ? "1px solid #000000" : "1px solid transparent",
                                                    }}
                                                    onClick={() =>
                                                        handleCategoryClick(item)
                                                    }
                                                >
                                                    {item.rusName}{" "}
                                                    <img
                                                        style={{
                                                            transform: !tempSelectedCategories.includes(item) ? "rotate(-45deg)" : ""
                                                        }}
                                                        src={close}
                                                        alt=""
                                                    />
                                                    
                                                </p>
                                            </div>
                                        ))}

                                        {/* Подкатегории внизу всех категорий */}
                                        {category.map(
                                            (item) =>
                                                openSubCategor === item.id && (
                                                    <div key={`sub-${item.id}`}
                                                        className={styles.subCategoryContainer}>
                                                        {subCategory
                                                            .filter((subcat) =>subcat.categoryId === item.id)
                                                            .map((subcat) => (
                                                                <span onClick={() => handleSubCategoryClick(subcat)}
                                                                    style={{
                                                                        cursor: "pointer",
                                                                        color: "#000000",
                                                                        backgroundColor: selectedSubCategories[item.id]?.includes(subcat.id) ? "transparent" : "#EAEAEA",
                                                                        border: selectedSubCategories[item.id]?.includes(subcat.id) ? "1px solid #000000" : "1px solid transparent",
                                                                        opacity: selectedSubCategories[item.id]?.includes(subcat.id) && 1
                                                                    }}
                                                                    key={subcat.id}
                                                                    className={styles.subCategoryTag}
                                                                >
                                                                    {subcat.rusName}{" "}
                                                                    <img
                                                                        style={{transform: !selectedSubCategories[item.id]?.includes(subcat.id) ? "rotate(-45deg)" : ""}}
                                                                        src={close}
                                                                        alt=""
                                                                    />
                                                                </span>
                                                            ))}
                                                    </div>
                                                )
                                        )}

                                        <div
                                            style={{ marginTop: "50px" }}
                                            className={styles.button4}
                                        >
                                            <button
                                                style={{ color: "#000000" }}
                                                onClick={cancelChanges}
                                            >
                                                Отмена
                                            </button>
                                            <button onClick={saveChanges}>
                                                Сохранить изменения
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                            {selectedCategories.length > 0 ?
                            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                <div className={styles.specialization} style={{marginTop: 0}}>
                                    {selectedCategories.slice(0, 4).map((item) => (
                                        <div key={item.id} style={{width: "fit-content"}}>
                                            <p style={{ color: "#000000", opacity: 0.8 }}>
                                                {item.rusName}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.subs}>
                                    {selectedCategories.map((item) => {
                                        console.log("h",item)
                                        return (
                                            <div className={styles.subCategories} style={{marginTop: 0, width: "fit-content"}}>
                                            {selectedSubCategories[item.id]?.map(
                                                (subId) => {
                                                    const subcat = subCategory.find(
                                                        (sub) => sub.id === subId
                                                    );
                                                    return (
                                                        <p 
                                                            key={subId}
                                                            className={
                                                                styles.subCategoryTag
                                                            }
                                                            style={{opacity: 0.8}}
                                                        >
                                                            {subcat?.rusName}
                                                        </p>
                                                    );
                                                }
                                            )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div> :
                                <h4>Вы не выбрали сферы деятельности</h4>
                            }
                            
                        </div>
                        <div className={styles.info2}>
                            <h4 style={{ fontWeight: "400", fontSize: "22px" }}>
                                Это аккаунт заказчика
                            </h4>
                            <p>
                                Просматривайте фрилансеров и управляйте заказами, следите за статусом выполнения задач и оставляйте отзывы
                            </p>
                            <div className={styles.button}>
                                {/* <button>Создать новый аккаунт</button> */}
                                <button>Стать фрилансером</button>
                            </div>
                        </div>
                        <div className={styles.info2}>
                            <h4>Настройки ИИ</h4>
                            <p>
                                Вы можете разрешить ИИ собирать данные о вашей активности для повышения качества
                            </p>
                            <div>
                                <p className={styles.buttonII}>
                                    Функция в разработке
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {open === 2 && (
                    <div className={styles.rod2}>
                        <h2>Счета и оплата</h2>
                        <div className={styles.balance}>
                            <p>Баланс: 112620₽</p>
                            <button onClick={() => setBalanceModal(true)}>Пополнить счет</button>
                            <button>Вывод средств</button>
                        </div>

                        <div className={styles.paymentMethod}>
                            <div className={styles.method}>
                                <p>Способ оплаты</p>
                                <p>Привязанные способы оплаты</p>
                            </div>
                            <img src={paymentMethod} alt="" />
                            <div className={styles.methodButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C9.41421 3 9.75 3.33579 9.75 3.75V8.25L14.25 8.25C14.6642 8.25 15 8.58579 15 9C15 9.41421 14.6642 9.75 14.25 9.75L9.75 9.75L9.75 14.25C9.75 14.6642 9.41421 15 9 15C8.58579 15 8.25 14.6642 8.25 14.25L8.25 9.75H3.75C3.33579 9.75 3 9.41421 3 9C3 8.58579 3.33579 8.25 3.75 8.25H8.25V3.75C8.25 3.33579 8.58579 3 9 3Z" fill="white"/>
                                </svg>
                                <p>Добавить способ оплаты</p>
                            </div>
                        </div>

                        <div className={styles.payoutFrequency}>
                            <div className={styles.method}>
                                <p>История</p>
                                <p>Здесь хранятся данные об операциях за N дней </p>
                                <div className={styles.operation}>
                                    <h4>17.12 13:45 Покупка коннектов 10</h4>
                                    <h4>12.01 21:09 Пополнение баланса 100 000₽</h4>
                                    <h4>16.03 22:00 Вывод средств 250.000₽</h4>
                                </div>
                                <button>Показать больше</button>
                            </div>
                        </div>

                        <Modal isOpen={balanceModal} onClose={() => setBalanceModal(false)} showClose={false} className={styles.spec_modal}>
                                <div className={styles.modalBalance}>
                                    <div className={styles.redactir}>
                                        <h2>Пополнить баланс</h2>
                                        <img onClick={() => setBalanceModal(false)}
                                            src={close}
                                            width={30}
                                            height={30}
                                            alt="close"
                                        /> 
                                    </div>
                                    <div className={styles.input_sum}>
                                        <p>Укажите сумму, ₽</p>
                                        <input placeholder="Например, 1000₽" type="text"/>
                                    </div>
                                    <div className={styles.methodPayment} style={{ marginTop: "0" }}>
                                        <img
                                            style={{
                                                position: "relative",
                                                top: "65px",
                                                left: "10px",
                                            }}
                                            src={logosMastercard}
                                            alt=""
                                        />
                                        <p>Способ оплаты</p>
                                        <input placeholder="5889-XXXX-XXXX-4023" type="text"/>
                                        <img onClick={() => setMetodPayment(!methodPayment)} src={InputIcon} alt=""/>
                                    </div>
                                    <div className={styles.button4}>
                                        <button onClick={() => setBalanceModal(false)}>Отмена</button>
                                        <button onClick={() => setBalanceModal(false)}>Пополнить</button>
                                    </div>
                                </div>
                        </Modal>
                        {/* {modalNumber && (
                            <div className={styles.modalNumber}>
                                <div className={styles.redactir1}>
                                    <h2 style={{ border: "none", padding: "0" }}>
                                        Пополнить баланс
                                    </h2>
                                    <img
                                        onClick={() => setModalNumber(!modalNumber)}
                                        src={close}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.inputs}>
                                    <div>
                                        <p>Укажите сумму, ₽</p>
                                        <input
                                            placeholder="Например, 1000₽"
                                            type="text"
                                        />
                                    </div>

                                    <div
                                        style={{ marginTop: "0" }}
                                        className={styles.methodPayment}
                                    >
                                        <img
                                            style={{
                                                position: "relative",
                                                top: "65px",
                                                left: "10px",
                                            }}
                                            src={logosMastercard}
                                            alt=""
                                        />
                                        <p>Способ оплаты</p>
                                        <input
                                            placeholder="      5889-XXXX-XXXX-4023"
                                            type="text"
                                        />
                                        <img
                                            onClick={() =>
                                                setMetodPayment(!methodPayment)
                                            }
                                            src={InputIcon}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{ marginTop: "60px" }}
                                    className={styles.buttonModalNumber}
                                >
                                    <button
                                        style={{ color: "#000000" }}
                                        onClick={() => setModal(false)}
                                    >
                                        Отмена
                                    </button>
                                    <button onClick={() => setModal(false)}>
                                        Пополнить
                                    </button>
                                </div>
                            </div>
                        )}
                        {methodPayment && (
                            <div className={styles.modalMethodPayment}>
                                <div className={styles.redactir2}>
                                    <h2 style={{ border: "none", padding: "0" }}>
                                        Способ оплаты
                                    </h2>
                                    <img
                                        onClick={() =>
                                            setMetodPayment(!methodPayment)
                                        }
                                        src={close}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.inputs}>
                                    <div style={{ width: "545px" }}>
                                        <label htmlFor="">
                                            <p>Выберите способ оплаты</p>
                                            <select name="" id="">
                                                <option value="">
                                                    Банковская карта
                                                </option>
                                                <option value="">Все</option>
                                            </select>
                                        </label>
                                    </div>

                                    <div
                                        style={{
                                            width: "545px",
                                            marginBottom: "15px",
                                        }}
                                        className={styles.methodPayment}
                                    >
                                        <p>Номер карты</p>
                                        <input
                                            placeholder="0000 0000 0000 0000"
                                            type="text"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            width: "545px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginBottom: "15px",
                                        }}
                                        className={styles.methodPayment}
                                    >
                                        <div style={{ width: "190px" }}>
                                            <p>Срок действия</p>
                                            <div
                                                style={{
                                                    width: "190px",
                                                    display: "flex",
                                                    marginTop: "0px",
                                                    gap: "15px",
                                                }}
                                            >
                                                <input
                                                    placeholder="MM"
                                                    style={{ width: "80px" }}
                                                    type="text"
                                                />
                                                <input
                                                    placeholder="ГГ"
                                                    style={{ width: "80px" }}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div style={{ width: "134px" }}>
                                            <p>CVC-код</p>
                                            <input
                                                style={{ width: "134px" }}
                                                placeholder="CVC"
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            width: "545px",
                                            marginBottom: "60px",
                                        }}
                                        className={styles.methodPayment}
                                    >
                                        <p>Имя владельца</p>
                                        <input
                                            placeholder="Ivan Ivanov"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{ marginTop: "0", width: "545px" }}
                                    className={styles.buttonModalNumber}
                                >
                                    <button
                                        style={{ width: "242px", color: "#000000" }}
                                        onClick={() => setMetodPayment(false)}
                                    >
                                        Отмена
                                    </button>
                                    <button
                                        style={{ width: "242px" }}
                                        onClick={() => setMetodPayment(false)}
                                    >
                                        Сохранить изменения
                                    </button>
                                </div>
                            </div>
                        )} */}
                    </div>
                )}
                {open === 3 && (
                    <div className={styles.rod2}>
                        <h2>Безопасность</h2>
                        <div className={styles.passwordOfAccount}>
                            <p>Пароль от аккаунта</p>
                            <p>
                                Вы можете изменить пароль, последние изменения — 20
                                марта 2024
                            </p>
                            <button style={{ color: "#000000" }} onClick={() => setModal(!modal)}>
                                Изменить пароль
                            </button>
                        </div>
                        <div className={styles.numberOfAccount}>
                            <p>Номер телефона</p>
                            <p>
                                Вы можете изменить номер, последние изменения — 20
                                марта 2024
                            </p>
                            <button
                                style={{ color: "#000000" }}
                                onClick={() => setModalNumber(!modalNumber)}
                            >
                                Изменить номер
                            </button>
                        </div>
                        <div className={styles.numberOfAccount}>
                            <p>Электронная почта</p>
                            <p>
                                Вы можете изменить почту, последние изменения — 20
                                марта 2024
                            </p>
                            <button style={{ color: "#000000" }}>
                                Изменить почту
                            </button>
                        </div>
                        <div className={styles.partyServices}>
                            <p className={styles.partyService}>Сторонние сервисы</p>

                            <div className={styles.entry}>
                                <div>
                                    <img src={vk} alt="" />
                                    <div className={styles.entry1}>
                                        <p>Вход через аккаунт ВКонтакте</p>
                                        <p>Ваш аккаунт ВКонтакте не подключен к учетной записи</p>
                                    </div>
                                </div>
                                <button className={styles.button3}>
                                    Подключить
                                </button>
                            </div>
                        </div>
                        <div className={styles.partyServices}>
                                <p className={styles.partyService}>
                                    Двухфакторная аутентификация
                                </p>

                                <div className={styles.entry}>
                                    <div>
                                        <img src={sms} alt="" />
                                        <div className={styles.entry1}>
                                            <p>Подтверждение входа почту</p>
                                            <p>
                                                Для входа в аккаунт нужно будет ввести код с почты
                                            </p>
                                        </div>
                                    </div>
                                    <label className={styles.switch}>
                                        <input
                                            type="checkbox"
                                            checked={isChecked1}
                                            onChange={handleChecked1}
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                        </div>
                        <div className={styles.passwordOfAccount}>
                            <p>Удалить аккаунт</p>
                            <p>
                                Если в этом есть необходимость, вы можете
                                сделать это здесь
                            </p>
                            <button style={{ color: "#000000" }}>
                                Удалить аккаунт
                            </button>
                        </div>
                        {modalNumber && (
                            <div className={styles.modal1}>
                                <div className={styles.redactir1}>
                                    <h2 style={{ border: "none", padding: "0" }}>
                                        Изменить пароль
                                    </h2>
                                    <img
                                        onClick={() => setModal(!modal)}
                                        src={close}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.inputs}>
                                    <div>
                                        <p>Текущий пароль</p>
                                        <input
                                            type={
                                                openPassword ? "text" : "password"
                                            }
                                        />
                                        <img
                                            onClick={() =>
                                                setOpenPassword(!openPassword)
                                            }
                                            src={
                                                openPassword
                                                    ? hidePasswordImg
                                                    : showPasswordImg
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <p>Новый пароль</p>
                                        <input
                                            type={
                                                openPassword1 ? "text" : "password"
                                            }
                                        />
                                        <img
                                            onClick={() =>
                                                setOpenPassword1(!openPassword1)
                                            }
                                            src={
                                                openPassword1
                                                    ? hidePasswordImg
                                                    : showPasswordImg
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <p>Повторите пароль</p>
                                        <input
                                            type={
                                                openPassword2 ? "text" : "password"
                                            }
                                        />
                                        <img
                                            onClick={() =>
                                                setOpenPassword2(!openPassword2)
                                            }
                                            src={
                                                openPassword2
                                                    ? hidePasswordImg
                                                    : showPasswordImg
                                            }
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={styles.button5}>
                                    <button
                                        style={{ color: "#000000" }}
                                        onClick={() => setModal(false)}
                                    >
                                        Отмена
                                    </button>
                                    <button onClick={() => setModal(false)}>
                                        Сохранить изменения
                                    </button>
                                </div>
                            </div>
                        )}
                        {modalNumber && (
                            <div className={styles.modalNumber}>
                                <div className={styles.redactir1}>
                                    <h2 style={{ border: "none", padding: "0" }}>
                                        Изменить номер
                                    </h2>
                                    <img
                                        onClick={() => setModalNumber(!modalNumber)}
                                        src={close}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.inputs}>
                                    <div>
                                        <p>Номер телефона</p>
                                        <input type="text" />
                                    </div>

                                    <div>
                                        <p>Новый номер телефона</p>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className={styles.buttonModalNumber}>
                                    <button
                                        style={{ color: "#000000" }}
                                        onClick={() => setModalNumber(false)}
                                    >
                                        Отмена
                                    </button>
                                    <button onClick={() => setModalNumber(false)}>
                                        Продолжить
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {open === 5 && (
                    <div className={styles.rod2}>
                        <h2>Уведомления</h2>
                        <div className={styles.computers}>
                            <div className={styles.computer}>
                                <img src={computer} alt="" />
                                <p style={{ fontSize: "22px" }}>Компьютер</p>
                            </div>
                            <p className={styles.neprochit}>
                                Звуковой сигнал при получении уведомлений
                            </p>
                            <button style={{ color: "#000000" }}>
                                Отключить уведомления
                            </button>
                        </div>

                        <div className={styles.computers}>
                            <div className={styles.computer}>
                                <img src={sms} alt="" />
                                <p style={{ fontSize: "22px" }}>
                                    Электронная почта
                                </p>
                            </div>
                            <p className={styles.neprochit}>
                                Присылает уведомления по электронной почте
                            </p>
                            <button
                                style={{
                                    backgroundColor: "#000000",
                                    color: "#FFFFFF",
                                }}
                            >
                                Присылать уведомления
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SettingsAccount;
