import styles from "./style.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

import hidePasswordImg from "../../assets/icons/hidePassword.svg";
import showPasswordImg from "../../assets/icons/showPassword.svg";
import hidePasswordImgRed from "../../assets/icons/redHidePassword.svg";
import showPasswordImgRed from "../../assets/icons/redShowPassword.svg";
import vkImg from "../../assets/icons/vk.svg";
import googleImg from "../../assets/icons/google.svg";

export default function Registration() {
  const [hidePassword, setHidePassword] = useState(true);
  const [nameVaildate, setNameVaildate] = useState(true);
  const [surnameVaildate, setSurnameVaildate] = useState(true);
  const [emailVaildate, setEmailVaildate] = useState(true);
  const [passwordVaildate, setPasswordVaildate] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  function fetchSignUp() {
    dispatch(authSignUp({ email, password, firstName, lastName }));
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastName("");
  }

  function handleValidateName(e, changeState) {
    setFirstname(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "") {
      const value = /^[a-zA-Zа-яА-я]+$/.test(e.target.value);
      changeState(value);
    } else {
      changeState(true);
    }
  }
  function handleValidateSurName(e, changeState) {
    setLastName(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "") {
      const value = /^[a-zA-Zа-яА-я]+$/.test(e.target.value);
      changeState(value);
    } else {
      changeState(true);
    }
  }

  function handleValidateEmail(e, changeState) {
    setEmail(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "") {
      const value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
      changeState(value);
    } else {
      changeState(true);
    }
  }
  function handleValidatePassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordVaildate(false);
    } else {
      setPasswordVaildate(true);
    }
  }

  return (
    <div className={styles.registration}>
      <h1>Зарегистрируйтесь, чтобы найти исполнителя</h1>
      <form className={styles.regForm}>
        <div className={styles.formNameData}>
          <div>
            <label
              style={{ color: nameVaildate ? "#000" : "#F63939" }}
              htmlFor="name"
            >
              {nameVaildate ? "Имя" : "Имя введено некорректно"}
            </label>
            <input
              value={firstName}
              type="text"
              id="name"
              placeholder="Ваше имя"
              minLength={2}
              maxLength={30}
              onChange={(e) => handleValidateName(e, setNameVaildate)}
              style={{
                borderColor: nameVaildate ? "#808080" : "#F63939",
                color: nameVaildate ? "#000" : "#F63939",
              }}
              required
            />
          </div>
          <div>
            <label
              style={{ color: surnameVaildate ? "#000" : "#F63939" }}
              htmlFor="surname"
            >
              {surnameVaildate ? "Фамилия" : "Фамилия введена некорректно"}
            </label>
            <input
              value={lastName}
              type="text"
              id="surname"
              placeholder="Ваша фамилия"
              minLength={2}
              maxLength={30}
              onChange={(e) => handleValidateSurName(e, setSurnameVaildate)}
              style={{
                borderColor: surnameVaildate ? "#808080" : "#F63939",
                color: surnameVaildate ? "#000" : "#F63939",
              }}
              required
            />
          </div>
        </div>
        <div className={styles.emailWrapper}>
          <label
            style={{ color: emailVaildate ? "#000" : "#F63939" }}
            htmlFor="email"
          >
            {emailVaildate ? "E-mail" : "E-mail введен некорректно"}
          </label>
          <input
            value={email}
            type="text"
            id="email"
            placeholder="Ваша почта"
            onChange={(e) => handleValidateEmail(e, setEmailVaildate)}
            style={{
              borderColor: emailVaildate ? "#808080" : "#F63939",
              color: emailVaildate ? "#000" : "#F63939",
            }}
            required
          />
        </div>
        <div className={styles.passwordWrapper}>
          <label
            style={{ color: passwordVaildate ? "#000" : "#F63939" }}
            htmlFor="password"
          >
            {passwordVaildate
              ? "Пароль"
              : "Пароль должен содержать минимум 8 символов"}
          </label>
          <input
            value={password}
            type={hidePassword ? "password" : "text"}
            id="password"
            placeholder="Ваш пароль"
            onChange={(e) => handleValidatePassword(e)}
            style={{
              borderColor: passwordVaildate ? "#808080" : "#F63939",
              color: passwordVaildate ? "#000" : "#F63939",
            }}
            required
          />
          <button
            className={styles.passwordVisible}
            onClick={(e) => {
              e.preventDefault();
              setHidePassword((prevState) => !prevState);
            }}
          >
            <img
              src={
                hidePassword
                  ? passwordVaildate
                    ? showPasswordImg
                    : showPasswordImgRed
                  : passwordVaildate
                  ? hidePasswordImg
                  : hidePasswordImgRed
              }
            />
          </button>
        </div>
        <button type="button" onClick={fetchSignUp} className={styles.nextBtn}>
          Продолжить
        </button>
        <label>
          <input type="checkbox" required />Я согласен с условиями политики
          конфиденциальности
        </label>
      </form>
      <div className={styles.anotherRegistrations}>
        <button>
          <img src={vkImg} width={24} height={24} />
          Войти через аккаунт Вконтакте
        </button>
        <button>
          <img src={googleImg} width={24} height={24} />
          Войти через аккаунт Google
        </button>
      </div>
      <div className={styles.haveAccount}>
        <a href="#">Уже зарегистрированы?</a>
        <Link to="/login">Войти в аккаунт</Link>
      </div>
      <div className={styles.freelanceRegistration}>
        <a href="#">Зарегистрироваться как фрилансер</a>
      </div>
    </div>
  );
}
