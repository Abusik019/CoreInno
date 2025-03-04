import styles from "./style.module.css";
import jobifyImg from "../../../assets/icons/logoJobify.svg";
import editImg from '../../../assets/icons/edit2.svg';
import bagImg from '../../../assets/icons/bag.svg';
import bookImg from '../../../assets/icons/book.svg';

export default function CreateProfilePageEight({ setPage, user }) {
    return (
        <div className={styles.createProfile}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <h2>Ваш профиль</h2>
                <p>Вы сможете изменить данные позже в разделе настроек, а пока что Ваш профиль<br />выглядит таким образом</p>
                <div className={styles.details}>
                    <div className={styles.detailsContent}>
                        <img 
                            src={user.userDetails.image}
                            width={90}
                            height={90}
                            alt="avatar" 
                        />
                        <div>
                            <h2>Username</h2>
                            <h3>{user.userDetails.city}, {user.userDetails.country}</h3>
                        </div>
                    </div>
                    <button onClick={() => setPage(7)}>
                        <img 
                            src={editImg}
                            width={24}
                            height={24}
                            alt="edit" 
                        />
                    </button>
                </div>
                <div className={styles.description}>
                    <div>
                        <div className={styles.title}>
                            <h2>Описание</h2>
                            <button onClick={() => setPage(6)}>
                                <img 
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        <p>{user.userDescription}</p>
                    </div>
                    <div>
                        <div className={styles.title}>
                            <h2>Специальность</h2>
                            <button onClick={() => setPage(2)}>
                                <img 
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        <ul className={styles.speciality}>
                            {user.userCategories.map((item) => (
                                <li key={item.id}>{item.rusName}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className={styles.title}>
                            <h2>Навыки</h2>
                            <button>
                                <img 
                                    src={editImg}
                                    width={24}
                                    height={24}
                                    alt="edit" 
                                />
                            </button>
                        </div>
                        <ul className={styles.skills}>
                            <li>навык</li>
                            <li>навык</li>
                            <li>навык</li>
                            <li>навык</li>
                            <li>навык</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.experience}>
                    <div className={styles.title}>
                        <h2>Опыт работы</h2>
                        <button onClick={() => setPage(4)}>
                            <img 
                                src={editImg}
                                width={24}
                                height={24}
                                alt="edit" 
                            />
                        </button>
                    </div>
                    <ul className={styles.experiencesList}>
                        {user.userExperience.map((item, index) => (
                            <li key={index}>
                                <img 
                                    src={bagImg} 
                                    width={58}
                                    height={58}
                                    alt="bag" 
                                />
                                <div>
                                    <h2>{item.name}</h2>
                                    <h3>{item.date.start.month}.{item.date.start.year} - {item.date.finish.month}.{item.date.finish.year}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.education}>
                    <div className={styles.title}>
                        <h2>Образование</h2>
                        <button onClick={() => setPage(5)}>
                            <img 
                                src={editImg}
                                width={24}
                                height={24}
                                alt="edit" 
                            />
                        </button>
                    </div>
                    <ul className={styles.experiencesList}>
                        {user.userEducation.map((item, index) => (
                            <li key={index}>
                                <img 
                                    src={bookImg} 
                                    width={58}
                                    height={58}
                                    alt="bag" 
                                />
                                <div>
                                    <h2>{item.name}</h2>
                                    <h3>{item.date.start.month}.{item.date.start.year} - {item.date.finish.month}.{item.date.finish.year}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum. Sed netus id gravida dui tellus facilisis nullam interdum montes.</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.btns}>
                <button onClick={() => setPage(7)}>Вернуться</button>
                <button onClick={() => setPage(9)}>Сохранить профиль</button>
            </div>
        </div>
    );
}
