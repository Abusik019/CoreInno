import styles from "./style.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import handleValidateEmail from "../../../utils/emailValidate";
import { GradientText } from '../../../components/GradientText';

import hidePasswordImg from "../../../assets/icons/hidePassword.svg";
import showPasswordImg from "../../../assets/icons/showPassword.svg";
import hidePasswordImgRed from "../../../assets/icons/redHidePassword.svg";
import showPasswordImgRed from "../../../assets/icons/redShowPassword.svg";
import vkImg from "../../../assets/icons/vk.svg";
import jobifyImg from "../../../assets/icons/logoJobify.svg";


export default function MainReg({ setPage }) {
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
    const navigate = useNavigate();
    const token = useSelector((state) => state.authSlice.token);

    const isDisabled = Boolean(emailVaildate && surnameVaildate && nameVaildate && passwordVaildate && firstName && lastName);

    console.log(token);

    async function fetchSignUp() {
        await dispatch(authSignUp({ email, password, firstName, lastName })).unwrap();
        if(token){
            setPage(2)
        }
    }

    function handleValidateName(e, changeState) {
        setFirstname(e.target.value);
        if (e.target.value !== "") {
            const value = /^[a-zA-Zа-яА-я]+$/.test(e.target.value);
            changeState(value);
        } else {
            changeState(true);
        }
    }

    function handleValidateSurName(e, changeState) {
        setLastName(e.target.value);
        if (e.target.value !== "") {
            const value = /^[a-zA-Zа-яА-я]+$/.test(e.target.value);
            changeState(value);
        } else {
            changeState(true);
        }
    }

    function handleValidatePassword(e) {
        setPassword(e.target.value);
        const value = /^(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d)(?=.*[\W_]).{8,}$/.test(e.target.value);
        setPasswordVaildate(value);
    }

    return (
        <div className={styles.loginWrapper}>
            <img 
                src={jobifyImg} 
                width={127}
                height={42}
                alt="jobify" 
            />
            <div className={styles.registration}>
                <h1>Регистрация аккаунта Jobify</h1>
                <form className={styles.regForm}>
                    <div className={styles.formNameData}>
                        <div>
                            <label
                                style={{
                                    color: nameVaildate
                                        ? "#000"
                                        : "#F63939",
                                }}
                                htmlFor="name"
                            >
                                {nameVaildate
                                    ? "Имя"
                                    : "Имя введено некорректно"}
                            </label>
                            <input
                                value={firstName}
                                type="text"
                                id="name"
                                placeholder="Ваше имя"
                                minLength={2}
                                maxLength={30}
                                onChange={(e) =>
                                    handleValidateName(e, setNameVaildate)
                                }
                                style={{
                                    borderColor: nameVaildate
                                        ? "#808080"
                                        : "#F63939",
                                    color: nameVaildate
                                        ? "#000"
                                        : "#F63939",
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    color: surnameVaildate
                                        ? "#000"
                                        : "#F63939",
                                }}
                                htmlFor="surname"
                            >
                                {surnameVaildate
                                    ? "Фамилия"
                                    : "Фамилия введена некорректно"}
                            </label>
                            <input
                                value={lastName}
                                type="text"
                                id="surname"
                                placeholder="Ваша фамилия"
                                minLength={2}
                                maxLength={30}
                                onChange={(e) =>
                                    handleValidateSurName(
                                        e,
                                        setSurnameVaildate
                                    )
                                }
                                style={{
                                    borderColor: surnameVaildate
                                        ? "#808080"
                                        : "#F63939",
                                    color: surnameVaildate
                                        ? "#000"
                                        : "#F63939",
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.emailWrapper}>
                        <label
                            style={{
                                color: emailVaildate ? "#000" : "#F63939",
                            }}
                            htmlFor="email"
                        >
                            {emailVaildate
                                ? "E-mail"
                                : "E-mail введен некорректно"}
                        </label>
                        <input
                            value={email}
                            type="text"
                            id="email"
                            placeholder="Ваша почта"
                            onChange={(e) =>
                                handleValidateEmail(e, setEmailVaildate, setEmail)
                            }
                            style={{
                                borderColor: emailVaildate
                                    ? "#808080"
                                    : "#F63939",
                                color: emailVaildate ? "#000" : "#F63939",
                            }}
                            required
                        />
                    </div>
                    <div className={styles.passwordWrapper}>
                        <label
                            style={{
                                color: passwordVaildate
                                    ? "#000"
                                    : "#F63939",
                            }}
                            htmlFor="password"
                        >
                            {passwordVaildate
                                ? "Пароль"
                                : "Некорректный пароль"}
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
                                color: passwordVaildate
                                    ? "#000"
                                    : "#F63939",
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
                        onClick={fetchSignUp}
                        className={styles.nextBtn}
                        disabled={!isDisabled}
                        style={{opacity: isDisabled ? '1' : '.2'}}
                    >
                        Продолжить
                    </button>
                </form>
                <div className={styles.agree}>Регистрируясь, вы соглашаетесь с <Link to="https://docs.google.com/document/d/1t5rbYrRGtbRtd5YVwtdx14RJ6f5vZMWB/edit?usp=sharing&ouid=105424839330593201083&rtpof=true&sd=true"><GradientText text="политикой конфиденциальности"/></Link> и <Link to="https://docs.google.com/document/d/10JwPGD_cqI6uq_3lviSoyrbKJ4Pxwgj3/edit?usp=sharing&ouid=105424839330593201083&rtpof=true&sd=true"><GradientText text="пользовательским соглашением"/></Link></div>
                <div className={styles.anotherRegistrations}>
                    <button>
                        <img src={vkImg} width={24} height={24} />
                        Войти через аккаунт Вконтакте
                    </button>
                </div>
                <div className={styles.haveAccount}>
                    <a href="#">Уже зарегистрированы?</a>
                    <Link to="/login"><GradientText text="Авторизация"/></Link>
                </div>
            </div>
        </div>
    );
}
