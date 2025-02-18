import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import infoMan from "../../assets/icons/infoMen.svg";
import payment from "../../assets/icons/payment.svg";
import security from "../../assets/icons/security.svg";
import settings from "../../assets/icons/settings.svg";
import notice from "../../assets/icons/notice.svg";
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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  fetchSubCategoryId,
} from "../../redux/slices/categorySlice";

function SettingsAccount() {
  const [open, setOpen] = useState(1);
  const [isChecked, setIschecked] = useState(false);
  const [isChecked1, setIschecked1] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalNumber, setModalNumber] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openPassword1, setOpenPassword1] = useState(false);
  const [openPassword2, setOpenPassword2] = useState(false);
  const [balanceTime, setBalanceTime] = useState(null);
  const [methodPayment, setMetodPayment] = useState(false);

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
  });

  const handleCategoryClick = (item) => {
    // Переключение подкатегорий
    if (item.id === openSubCategor) {
      setOpenSubCategor(null);
    } else {
      setOpenSubCategor(item.id);
    }

    // Проверяем, выбраны ли подкатегории этой категории
    const hasSelectedSubcategories = selectedSubCategories[item.id]?.length > 0;

    // Обновление выбора категорий
    if (tempSelectedCategories.includes(item) && !hasSelectedSubcategories) {
      setTempSelectedCategories(
        tempSelectedCategories.filter((cat) => cat.id !== item.id)
      );
    } else if (tempSelectedCategories.length < 4 && !hasSelectedSubcategories) {
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
        if (!tempSelectedCategories.some((cat) => cat.id === categoryId)) {
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
    setMetodPayment(false);
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
    <div
      style={{
        backgroundColor:
          modal || modalNumber || methodPayment ? "#121212" : "#F7F7F7",
        height:
          open === 3 ? "950px" : "830px" || open === 2 ? "1490px" : "830px",
      }}
      className={styles.content}
    >
      <div onClick={() => closeModal()} className={styles.rod}>
        <h1>Настройки</h1>
        <div className={styles.categors}>
          <div className={styles.categor}>
            <img src={infoMan} alt="" />
            <p
              style={{
                color:
                  open === 1
                    ? "Black"
                    : ("gray" && modal) || modalNumber || methodPayment
                    ? "black"
                    : "gray",
              }}
              onClick={() => setOpen(1)}
            >
              Основная информация
            </p>
          </div>
          <div className={styles.categor}>
            <img src={payment} alt="" />
            <p
              style={{
                color:
                  open === 2
                    ? "Black"
                    : ("gray" && modal) || modalNumber || methodPayment
                    ? "black"
                    : "gray",
              }}
              onClick={() => setOpen(2)}
            >
              Счета и оплата
            </p>
          </div>
          <div className={styles.categor}>
            <img src={security} alt="" />
            <p
              style={{
                color:
                  open === 3
                    ? "Black"
                    : ("gray" && modal) || modalNumber || methodPayment
                    ? "black"
                    : "gray",
              }}
              onClick={() => setOpen(3)}
            >
              Безопасность
            </p>
          </div>
          <div className={styles.categor}>
            <img src={settings} alt="" />
            <p
              style={{
                color:
                  open === 4
                    ? "Black"
                    : ("gray" && modal) || modalNumber || methodPayment
                    ? "black"
                    : "gray",
              }}
              onClick={() => setOpen(4)}
            >
              Настройки плана
            </p>
          </div>
          <div className={styles.categor}>
            <img src={notice} alt="" />
            <p
              style={{
                color:
                  open === 5
                    ? "Black"
                    : ("gray" && modal) || modalNumber || methodPayment
                    ? "black"
                    : "gray",
              }}
              onClick={() => setOpen(5)}
            >
              Уведомления
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height:
            (open === 2 && "840px") ||
            (open === 3 && "770px") ||
            (open === 4 && "1240px"),
        }}
        className={styles.line}
      ></div>
      {open === 1 && (
        <div className={styles.rod2}>
          <h2>Основная информация</h2>
          <div className={styles.info}>
            <h4>
              Сведения об аккаунте{" "}
              <img onClick={() => setModal(!modal)} src={pen} alt="" />
            </h4>

            <div className={styles.user}>
              <img src={image} alt="" />
              <div className={styles.user1}>
                <p>Имя пользователя</p>
                <p>Город, Страна</p>
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h4>
              Специализация{" "}
              <img
                onClick={() => setMetodPayment(!methodPayment)}
                src={pen}
                alt=""
              />
            </h4>

            <div className={styles.specialization}>
              {selectedCategories.map((item) => (
                <div key={item.id}>
                  <p>{item.rusName}</p>
                 
                </div>
              ))}
            </div>
            {selectedCategories.map((item) => (
               <div className={styles.subCategories}>
               {selectedSubCategories[item.id]?.map((subId) => {
                 const subcat = subCategory.find(
                   (sub) => sub.id === subId
                 );
                 return (
                   <p key={subId} className={styles.subCategoryTag}>
                     {subcat?.rusName}
                   </p>
                 );
               })}
             </div>
            ) )}
          </div>
          <div className={styles.info2}>
            <h4>Это аккаунт заказчика</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore alias consequuntur accusantium.
            </p>
            <div className={styles.button}>
              <button>Создать новый аккаунт</button>
              <button>Стать фрилансером</button>
              <button>Удалить аккаунт</button>
            </div>
          </div>
          <div className={styles.info2}>
            <h4>Настройки ИИ</h4>
            <p style={{ color: modal ? "black" : "gray" }}>
              ИИ не собирает ваши данные для повышения качества.
            </p>
            <div className={styles.button1}>
              <button>Разрешить</button>
              <button>Отклонить</button>
            </div>
          </div>
          {methodPayment && (
            <div className={styles.spec}>
              <div className={styles.redactir}>
                <div>
                  <h2>Специализация</h2>
                  <p>Выберите не более 4-х категорий</p>
                </div>
                <img onClick={cancelChanges} src={close} alt="" />
              </div>
              <div style={{ margin: "auto" }} className={styles.specialization}>
                {category.map((item) => (
                  <div key={item.id}>
                    <p
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                        backgroundColor:
                          tempSelectedCategories.includes(item) ? "transparent" : "#EAEAEA",
                          border: tempSelectedCategories.includes(item) && "1px solid #000000 " 
                      }}
                      onClick={() => handleCategoryClick(item)}
                    >
                      {item.rusName} {tempSelectedCategories.includes(item) ? <img style={{width: "15px", position: "relative", top: "1px", left: "3px"}} src={close} alt="" /> : "+"}
                    </p>
                  </div>
                ))}

                {/* Подкатегории внизу всех категорий */}
                {category.map(
                  (item) =>
                    openSubCategor === item.id && (
                      <div
                        key={`sub-${item.id}`}
                        className={styles.subCategoryContainer}
                      >
                        {subCategory
                          .filter((subcat) => subcat.categoryId === item.id)
                          .map((subcat) => (
                            <span
                              onClick={() => handleSubCategoryClick(subcat)}
                              style={{
                                cursor: "pointer",
                                color: "#000000",
                                backgroundColor: selectedSubCategories[
                                  item.id
                                ]?.includes(subcat.id)
                                  ? "transparent"
                                  : "#EAEAEA",
                                  border: selectedSubCategories[
                                    item.id
                                  ]?.includes(subcat.id) ? "1px solid #000000" : "none"
                              }}
                              key={subcat.id}
                              className={styles.subCategoryTag}
                            >
                              {subcat.rusName} {selectedSubCategories[
                                    item.id
                                  ]?.includes(subcat.id) ? <img style={{width: "15px", position: "relative", top: "1px", left: "3px"}} src={close} alt="" /> : "+"}
                            </span>
                          ))}
                      </div>
                    )
                )}

                <div style={{ marginTop: "50px" }} className={styles.button4}>
                  <button onClick={cancelChanges}>Отмена</button>
                  <button onClick={saveChanges}>Сохранить изменения</button>
                </div>
              </div>
            </div>
          )}

          {modal && (
            <div className={styles.modal}>
              <div className={styles.redactir}>
                <h2>Редактирование данных</h2>
                <img onClick={() => setModal(!modal)} src={close} alt="" />
              </div>
              <div className={styles.input1}>
                <div>
                  <p>Имя пользователя</p>
                  <input type="text" />
                </div>
                <div>
                  <p>E-mail</p>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.number}>
                <p>Номер телефона</p>
                <input type="text" />
              </div>
              <div className={styles.from}>
                <label htmlFor="">
                  <p>Страна</p>
                  <select name="" id="">
                    <option value="">Россия</option>
                    <option value="">Турция</option>
                  </select>
                </label>
                <label htmlFor="">
                  <p>Город</p>
                  <select name="" id="">
                    <option value="">Москва</option>
                    <option value="">Станбул</option>
                  </select>
                </label>
              </div>
              <div className={styles.button4}>
                <button onClick={() => setModal(false)}>Отмена</button>
                <button onClick={() => setModal(false)}>
                  Сохранить изменения
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {open === 2 && (
        <div className={styles.rod2}>
          <h2>Счета и оплата</h2>
          <div className={styles.balance}>
            <p>Баланс: 112620</p>
            <button onClick={() => setModalNumber(!modalNumber)}>
              Пополнить счет
            </button>
          </div>
          <div className={styles.connect}>
            <p>Доступные коннекты: 12</p>
            <p>
              Коннекты позволяют вам откликаться на задания, 1 коннект = 1
              отклик
            </p>
            <button onClick={() => setModal(!modal)}>Купить коннекты</button>
          </div>
          <div className={styles.paymentMethod}>
            <div className={styles.method}>
              <p>Способ оплаты</p>
              <p>Привязанные способы оплаты</p>
            </div>
            <img src={paymentMethod} alt="" />
            <div className={styles.methodButton}>
              <button>+ Новый способ оплаты</button>
            </div>
          </div>
          <div className={styles.taxInfo}>
            <div className={styles.method}>
              <p>Налоговые сведения</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dui laoreet odio blandit
                neque.
              </p>
            </div>
            <button>+ Добавить</button>
          </div>
          <div className={styles.payoutFrequency}>
            <div className={styles.method}>
              <p>
                Частота выплат <img src={pen} alt="" />
              </p>
              <p>Как часто средства будут переводиться на ваш счёт</p>
              <div className={styles.balanceTime}>
                <span
                  style={{
                    color: balanceTime === 1 && "#4A7358",
                    cursor: "pointer",
                  }}
                  onClick={() => setBalanceTime(1)}
                >
                  Ежемесячно
                </span>
                <span
                  style={{
                    color: balanceTime === 2 && "#4A7358",
                    cursor: "pointer",
                  }}
                  onClick={() => setBalanceTime(2)}
                >
                  Еженедельно
                </span>
                <span
                  style={{
                    color: balanceTime === 3 && "#4A7358",
                    cursor: "pointer",
                  }}
                  onClick={() => setBalanceTime(3)}
                >
                  Ежедневно
                </span>
              </div>
            </div>
          </div>
          <div className={styles.payoutFrequency}>
            <div className={styles.method}>
              <p>История</p>
              <p>Здесь хранятся данные об операциях за N дней </p>
              <div className={styles.operation}>
                <p>dd:mm hh:mm Покупка коннектов 10</p>
                <p>dd:mm hh:mm Пополнение баланса 100 000₽</p>
                <p>dd:mm hh:mm Вывод средств 250.000₽</p>
              </div>
              <button>Показать больше</button>
            </div>
          </div>
          {modal && (
            <div className={styles.modalNumber}>
              <div className={styles.redactir1}>
                <h2>Купить коннекты</h2>
                <img onClick={() => setModal(!modal)} src={close} alt="" />
              </div>
              <div className={styles.inputs}>
                <div>
                  <p>Укажите количество</p>
                  <input type="text" />
                </div>

                <div
                  style={{ marginTop: "0" }}
                  className={styles.methodPayment}
                >
                  <img
                    style={{ position: "relative", top: "65px", left: "10px" }}
                    src={logosMastercard}
                    alt=""
                  />
                  <p>Способ оплаты</p>
                  <input placeholder="      5889-XXXX-XXXX-4023" type="text" />
                  <img
                    onClick={() => setMetodPayment(!methodPayment)}
                    src={InputIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.buttonModalNumber}>
                <button onClick={() => setModal(false)}>Отмена</button>
                <button onClick={() => setModal(false)}>
                  Сохранить изменения
                </button>
              </div>
            </div>
          )}
          {modalNumber && (
            <div className={styles.modalNumber}>
              <div className={styles.redactir1}>
                <h2>Пополнить баланс</h2>
                <img
                  onClick={() => setModalNumber(!modalNumber)}
                  src={close}
                  alt=""
                />
              </div>
              <div className={styles.inputs}>
                <div>
                  <p>Укажите сумму, ₽</p>
                  <input placeholder="Например, 1000₽" type="text" />
                </div>

                <div
                  style={{ marginTop: "0" }}
                  className={styles.methodPayment}
                >
                  <img
                    style={{ position: "relative", top: "65px", left: "10px" }}
                    src={logosMastercard}
                    alt=""
                  />
                  <p>Способ оплаты</p>
                  <input placeholder="      5889-XXXX-XXXX-4023" type="text" />
                  <img
                    onClick={() => setMetodPayment(!methodPayment)}
                    src={InputIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.buttonModalNumber}>
                <button onClick={() => setModal(false)}>Отмена</button>
                <button onClick={() => setModal(false)}>
                  Сохранить изменения
                </button>
              </div>
            </div>
          )}
          {methodPayment && (
            <div className={styles.modalMethodPayment}>
              <div className={styles.redactir2}>
                <h2>Способ оплаты</h2>
                <img
                  onClick={() => setMetodPayment(!methodPayment)}
                  src={close}
                  alt=""
                />
              </div>
              <div className={styles.inputs}>
                <div style={{ width: "545px" }}>
                  <label htmlFor="">
                    <p>Выберите способ оплаты</p>
                    <select name="" id="">
                      <option value="">Банковская карта</option>
                      <option value="">Все</option>
                    </select>
                  </label>
                </div>

                <div
                  style={{ width: "545px", marginBottom: "15px" }}
                  className={styles.methodPayment}
                >
                  <p>Номер карты</p>
                  <input placeholder="0000 0000 0000 0000" type="text" />
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
                  style={{ width: "545px", marginBottom: "60px" }}
                  className={styles.methodPayment}
                >
                  <p>Имя владельца</p>
                  <input placeholder="Ivan Ivanov" type="text" />
                </div>
              </div>
              <div
                style={{ marginTop: "0" }}
                className={styles.buttonModalNumber}
              >
                <button onClick={() => setMetodPayment(false)}>Отмена</button>
                <button onClick={() => setMetodPayment(false)}>
                  Сохранить изменения
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {open === 3 && (
        <div className={styles.rod2}>
          <h2>Безопасность</h2>
          <div className={styles.passwordOfAccount}>
            <p>Пароль от аккаунта</p>
            <p>
              Вы можете изменить пароль, последние изменения — 20 марта 2024
            </p>
            <button onClick={() => setModal(!modal)}>Изменить пароль</button>
          </div>
          <div className={styles.numberOfAccount}>
            <p>Номер телефона</p>
            <p>Вы можете изменить номер, последние изменения — 20 марта 2024</p>
            <button onClick={() => setModalNumber(!modalNumber)}>
              Изменить номер
            </button>
          </div>
          <div className={styles.numberOfAccount}>
            <p>Электронная почта</p>
            <p>Вы можете изменить почту, последние изменения — 20 марта 2024</p>
            <button>Изменить почту</button>
          </div>
          <div className={styles.partyServices}>
            <p className={styles.partyService}>Сторонние сервисы</p>
            <div className={styles.entry}>
              <img src={google} alt="" />
              <div className={styles.entry1}>
                <p>Вход через аккаунт Google</p>
                <p>Ваш аккаунт Google подключен к учетной записи</p>
              </div>
              <button
                style={{
                  color: modal ? "black" : "gray",
                  border: modal ? "1px solid black" : "1px solid gray",
                }}
                className={styles.button2}
              >
                Уже подключен
              </button>
            </div>
            <div className={styles.entry}>
              <img src={vk} alt="" />
              <div className={styles.entry1}>
                <p>Вход через аккаунт ВКонтакте</p>
                <p>Ваш аккаунт ВКонтакте не подключен к учетной записи</p>
              </div>
              <button className={styles.button3}>Подключить</button>
            </div>
          </div>
          <div>
            <div className={styles.partyServices}>
              <p className={styles.partyService}>
                Двухфакторная аутентификация
              </p>
              <div className={styles.entry}>
                <img src={phone1} alt="" />
                <div className={styles.entry1}>
                  <p>Подтверждение входа через SMS-код</p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChecked}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.entry}>
                <img src={sms} alt="" />
                <div className={styles.entry1}>
                  <p>Подтверждение входа почту</p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
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
          </div>
          {modal && (
            <div className={styles.modal1}>
              <div className={styles.redactir1}>
                <h2>Изменить пароль</h2>
                <img onClick={() => setModal(!modal)} src={close} alt="" />
              </div>
              <div className={styles.inputs}>
                <div>
                  <p>Текущий пароль</p>
                  <input type={openPassword ? "text" : "password"} />
                  <img
                    onClick={() => setOpenPassword(!openPassword)}
                    src={openPassword ? hidePasswordImg : showPasswordImg}
                    alt=""
                  />
                </div>
                <div>
                  <p>Новый пароль</p>
                  <input type={openPassword1 ? "text" : "password"} />
                  <img
                    onClick={() => setOpenPassword1(!openPassword1)}
                    src={openPassword1 ? hidePasswordImg : showPasswordImg}
                    alt=""
                  />
                </div>
                <div>
                  <p>Повторите пароль</p>
                  <input type={openPassword2 ? "text" : "password"} />
                  <img
                    onClick={() => setOpenPassword2(!openPassword2)}
                    src={openPassword2 ? hidePasswordImg : showPasswordImg}
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.button5}>
                <button onClick={() => setModal(false)}>Отмена</button>
                <button onClick={() => setModal(false)}>
                  Сохранить изменения
                </button>
              </div>
            </div>
          )}
          {modalNumber && (
            <div className={styles.modalNumber}>
              <div className={styles.redactir1}>
                <h2>Изменить номер</h2>
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
                <button onClick={() => setModalNumber(false)}>Отмена</button>
                <button onClick={() => setModalNumber(false)}>
                  Продолжить
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {open === 4 && (
        <div className={styles.rod2}>
          <h2>Настройки плана</h2>
          <div className={styles.namePlan}>
            <p>Текущий план</p>
            <p>Название плана</p>
            <p>Действует с 12 февраля 2024</p>
            <button>Сменить план</button>
          </div>
          <div className={styles.plusPlan}>
            <p>Преимущества текущего плана</p>
            <div className={styles.lists}>
              <div className={styles.list}>
                <img src={lucide} alt="" />
                <ul>
                  Lorem ipsum dolor
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className={styles.list}>
                <img src={money} alt="" />
                <ul>
                  Lorem ipsum dolor
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className={styles.list}>
                <img src={outline} alt="" />
                <ul>
                  Lorem ipsum dolor
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className={styles.list}>
                <img src={hyper} alt="" />
                <ul>
                  Lorem ipsum dolor
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.plusPlan1}>
            <p>Преимущества "Название" плана</p>
            <div className={styles.lists}>
              <div className={styles.list}>
                <img src={lucide} alt="" />
                <ul>
                  Lorem ipsum dolor
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className={styles.list}>
                <img src={money} alt="" />
                <ul>
                  Lorem ipsum dolor
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className={styles.list}>
                <img src={outline} alt="" />
                <ul>
                  Lorem ipsum dolor
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className={styles.list}>
                <img src={hyper} alt="" />
                <ul>
                  Lorem ipsum dolor
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
            <button>Перейти на "Название" план</button>
          </div>
        </div>
      )}
      {open === 5 && (
        <div className={styles.rod2}>
          <h2>Уведомления</h2>
          <div className={styles.computers}>
            <div className={styles.computer}>
              <img src={computer} alt="" />
              <p>Компьютер</p>
            </div>
            <div className={styles.selects}>
              <div>
                <label htmlFor="">
                  <p>Показывать уведомления:</p>
                  <select name="" id="">
                    <option value="">Важные</option>
                    <option value="">Все</option>
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  <p>Счетчик уведомлений:</p>
                  <select name="" id="">
                    <option value="">Важные</option>
                    <option value="">Все</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.computers}>
            <div className={styles.computer}>
              <img src={phone1} alt="" />
              <p>Телефон</p>
            </div>
            <div className={styles.selects}>
              <div>
                <label htmlFor="">
                  <p>Показывать уведомления:</p>
                  <select name="" id="">
                    <option value="">Важные</option>
                    <option value="">Все</option>
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  <p>Счетчик уведомлений:</p>
                  <select name="" id="">
                    <option value="">Важные</option>
                    <option value="">Все</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.computers}>
            <div className={styles.computer}>
              <img src={sms} alt="" />
              <p>Электронная почта</p>
            </div>
            <p className={styles.neprochit}>Присылать непрочитанные:</p>
            <div className={styles.selects}>
              <div>
                <label htmlFor="">
                  <select name="" id="">
                    <option value="">Все</option>
                    <option value="">Важные</option>
                    <option value="">Никакие</option>
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  <select name="" id="">
                    <option value="">Каждые 15 минут</option>
                    <option value="">Раз в час</option>
                    <option value="">Раз в сутки</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingsAccount;
