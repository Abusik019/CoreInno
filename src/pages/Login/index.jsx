import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

import styles from "./style.module.css";

import hidePasswordImg from "../../assets/icons/hidePassword.svg";
import showPasswordImg from "../../assets/icons/showPassword.svg";
import hidePasswordImgRed from "../../assets/icons/redHidePassword.svg";
import showPasswordImgRed from "../../assets/icons/redShowPassword.svg";
import vkImg from "../../assets/icons/vk.svg";

function Login() {
    const [hidePassword, setHidePassword] = useState(true);
    const [emailVaildate, setEmailVaildate] = useState(true);
    const [passwordVaildate, setPasswordVaildate] = useState(true);

    const token = useSelector((state) => state.authSlice.token);
    console.log(token);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function fetchSignIn() {
        dispatch(authSignIn({ email, password }));
    }
    if (token) {
        navigate("/");
    }

    function handleValidateEmail(e, changeState) {
        setEmail(e.target.value);
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
            <h1>Вход в аккаунт Giglink</h1>
            <form className={styles.regForm}>
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
                        onChange={(e) =>
                            handleValidateEmail(e, setEmailVaildate)
                        }
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
                            borderColor: passwordVaildate
                                ? "#808080"
                                : "#F63939",
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
                <button
                    type="button"
                    onClick={fetchSignIn}
                    className={styles.nextBtn}
                >
                    Продолжить
                </button>
            </form>
            <div className={styles.anotherRegistrations}>
                <button>
                    <img src={vkImg} width={24} height={24} />
                    Войти через аккаунт Вконтакте
                </button>
            </div>
            <div className={styles.haveAccount}>
                <a href="#">Нет аккаунта?</a>
                <Link to="/registration">Зарегистрироваться</Link>
            </div>
        </div>
    );
}

export default Login;
