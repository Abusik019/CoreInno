import React, { useState } from "react";
import styles from "./style.module.css";
import infoMan from "../../assets/icons/infoMen.svg";
import payment from "../../assets/icons/payment.svg";
import security from "../../assets/icons/security.svg";
import settings from "../../assets/icons/settings.svg";
import notice from "../../assets/icons/notice.svg";
import image from "../../assets/icons/image.svg";
import pen from "../../assets/icons/pen.svg";
import paymentMethod from "../../assets/icons/paymentMethod.svg";
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


function SettingsAccount() {
  const [open, setOpen] = useState(1);
  const [isChecked, setIschecked] = useState(false);
  const [isChecked1, setIschecked1] = useState(false);
  const [modal, setModal] = useState(false);
  const [openPassword, setOpenPassword] = useState(false)
  const [openPassword1, setOpenPassword1] = useState(false)
  const [openPassword2, setOpenPassword2] = useState(false)



  function handleChecked() {
    setIschecked(!isChecked);
  }
  function handleChecked1() {
    setIschecked1(!isChecked1);
  }
  return (
    <div
      style={{ backgroundColor: modal ? "#121212" : "#F7F7F7" , height: open === 3 ? "950px" : "830px" }}
      className={styles.content}
    >
      <div onClick={() => setModal(false)} className={styles.rod}>
        <h1>Настройки</h1>
        <div className={styles.categors}>
          <div className={styles.categor}>
            <img src={infoMan} alt="" />
            <p
              style={{ color: open === 1 ? "Black" : "gray" && modal ? "black" : "gray" }}
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
                  open === 2 ? "Black" : "gray" && modal ? "black" : "gray",
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
                  open === 3 ? "Black" : "gray" && modal ? "black" : "gray",
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
                  open === 4 ? "Black" : "gray" && modal ? "black" : "gray",
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
                  open === 5 ? "Black" : "gray" && modal ? "black" : "gray",
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
          <div className={styles.info2}>
            <h4>Это аккаунт заказчика</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore alias consequuntur accusantium.
            </p>
            <div className={styles.button}>
              <button>Создать новый аккаунт</button>
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
                <button onClick={() => setModal(false)}>Сохранить изменения</button>
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
            <button>Пополнить счет</button>
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
              <p>Еженедельно</p>
            </div>
          </div>
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
          <div className={styles.partyServices}>
            <p className={styles.partyService}>Сторонние сервисы</p>
            <div className={styles.entry}>
              <img src={google} alt="" />
              <div className={styles.entry1}>
                <p>Вход через аккаунт Google</p>
                <p>Ваш аккаунт Google подключен к учетной записи</p>
              </div>
              <button style={{color: modal ? "black" : "gray", border: modal ? "1px solid black" : "1px solid gray" }} className={styles.button2}>Уже подключен</button>
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
              <div className={styles.inputs} >
                <div>
                  <p>Текущий пароль</p>
                  <input type={openPassword ? "text" : "password"} />
                  <img onClick={() => setOpenPassword(!openPassword)} src={openPassword ? hidePasswordImg : showPasswordImg} alt="" />
                </div>
                <div>
                  <p>Новый пароль</p>
                  <input type={openPassword1 ? "text" : "password"} />
                  <img onClick={() => setOpenPassword1(!openPassword1)} src={openPassword1 ? hidePasswordImg : showPasswordImg} alt="" />

                </div>
                <div>
                  <p>Повторите пароль</p>
                  <input type={openPassword2 ? "text" : "password"}  />
                  <img onClick={() => setOpenPassword2(!openPassword2)} src={openPassword2 ? hidePasswordImg : showPasswordImg} alt="" />

                </div>
              </div>
              <div className={styles.button5}>
                <button onClick={() => setModal(false)}>Отмена</button>
                <button onClick={() => setModal(false)}>Сохранить изменения</button>
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
