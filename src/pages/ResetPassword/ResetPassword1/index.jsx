import styles from "./style.module.css";
import { useEffect, useState } from "react";
import jobifyLogo from '../../../assets/icons/logoJobify.svg';
import handleValidateEmail from '../../../utils/emailValidate';

export default function ResetPasswordOne({ setPage, setIsEmailType }) {
    const [isEmailReset, setIsEmailReset] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    function validatePhoneNumber(input) {
        setIsTouched(true);
        setNumber(input);
        const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        setIsValid(regex.test(input));
    }

    useEffect(() => {
        setIsEmailType(isEmailReset)
    }, [isEmailReset]);
    
    return (
        <div className={styles.resetPassword}>
            <img src={jobifyLogo} width={119} height={38} alt="logo Jobify" />
            <div className={styles.resetPasswordContent}>
                <h2>Восстановление пароля</h2>
                <p>Пожалуйста, укажите {isEmailReset ? 'адрес электронной почты' : 'номер телефона'}, связанный с вашей учетной записью, и мы отправим вам инструкции для сброса пароля.</p>
                {isEmailReset ? 
                    <input 
                        type="text"
                        placeholder="Ваша почта"
                        onChange={(e) => {
                            handleValidateEmail(e, setIsValid, setEmail);
                        }}
                        onBlur={() => setIsTouched(true)}
                        onFocus={() => setIsTouched(true)}
                        style={{
                            borderColor: isTouched && !isValid && email ? "#F63939" : "#808080",
                            color: isTouched && !isValid && email ? "#F63939" : "#000",
                        }}
                    />
                    :
                    <input 
                        type="text"
                        placeholder="+7 (999) 999 99-99"
                        onChange={(e) => {
                            validatePhoneNumber(e.target.value);
                        }}
                        onBlur={() => setIsTouched(true)}
                        onFocus={() => setIsTouched(true)}
                        style={{
                            borderColor: isTouched && !isValid && number ? "#F63939" : "#808080",
                            color: isTouched && !isValid && number ? "#F63939" : "#000",
                        }}
                    />
                }
                {isEmailReset 
                    ? isTouched && email && !isValid && <h3>Убедитесь в правильности введенной почты</h3>
                    : isTouched && number && !isValid && <h3>Убедитесь в правильности введенного номера</h3>
                }
                <button onClick={() => {
                    setIsEmailReset((prev) => !prev);
                }}>Восстановление {isEmailReset ? 'по номеру телефона' : 'через почту'}</button>
            </div>
            <div className={styles.resetPasswordBtns}>
                <button>Назад</button>
                <button
                    disabled={!isValid}
                    style={{
                        opacity: !isValid ? "0.2" : "1",
                        cursor: !isValid ? "default" : "pointer",
                    }}
                    onClick={() => setPage(2)}
                >
                    Продолжить
                </button>
            </div>
        </div>
    );
}
