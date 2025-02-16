import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import jobifyImg from "../../../assets/icons/logoJobify.svg";
import avatarImg from "../../../assets/images/createTaskAvatar.png";
import { Textarea } from '../../../components/Textarea';
import { useEffect, useState } from "react";

export default function CreateProfilePageSix({ setPage, setUser, user }) {
    const [aboutMe, setAboutMe] = useState("");
    const disabledBtn = aboutMe ? true : false;

    useEffect(() => {
        setAboutMe(user.userDescription);
    }, [user.userDescription]);

    return (
        <div className={styles.createProfile}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <div className={styles.createProfileContent}>
                    <h2>Расскажите немного о себе</h2>
                    <p>Заказчики хотят знать, с кем имеют дело, поэтому для привлечения клинетов рекомендуем указать описание</p>
                    <Textarea 
                        value="Начните рассказывать здесь, а вдохновение польется само собой" 
                        maxLength="5000" 
                        onChange={(e) => setAboutMe(e.target.value)}
                    />
                </div>
                <div className={styles.createProfileQuote}>
                    <p>
                        «Создав свой профиль, я смогла найти много интересных
                        проектов и расширить свою клиентскую базу на бирже»
                    </p>
                    <h2>Анна Петрова, графический дизайнер</h2>
                    <div>
                        <img
                            src={avatarImg}
                            width={78}
                            height={78}
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
            <CreateTaskLoad
                prev={5}
                next={7}
                setPage={setPage}
                maxPage={8}
                disabled={!disabledBtn}
                onNext={
                    () => {
                        setUser((prev) => ({
                            ...prev,
                            userDescription: aboutMe
                        }));
                    }
                }
            />
        </div>
    );
}
