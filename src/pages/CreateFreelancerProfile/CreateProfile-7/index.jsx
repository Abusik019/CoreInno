import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import jobifyImg from "../../../assets/icons/logoJobify.svg";
import plusImg from '../../../assets/icons/plusWithBg.svg';
import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import editImg from '../../../assets/icons/pen.svg';
import deleteImg from '../../../assets/icons/delete.svg';
import mockImg from '../../../assets/images/mockImage2.png';
import DatePickerItem from '../../../components/DatePicker';

export default function CreateProfilePageSeven({ setPage, setUser, user }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [myProperties, setMyProperties] = useState({
        image: null,
        country: '',
        city: '',
        dateOfBirth: ''
    });

    const isSaveDisabled = !myProperties.country || !myProperties.city || !myProperties.image || !myProperties.dateOfBirth;
    
    useEffect(() => {
        setMyProperties(user.userDetails);
    }, [user.userDetails]);
    
    const handleSetData = (e, item) => {
        setMyProperties((prev) => ({
            ...prev,
            [item]: e.target.value
        }));
    }

    const handleCloseModal = () => {
        setMyProperties({
            image: null,
            country: '',
            city: '',
            dateOfBirth: ''
        });
        setIsOpenModal(false);
    };

    const handleEdit = () => {
        setIsOpenModal(true);
    };

    const handleDelete = () => {
        setMyProperties({
            image: null,
            country: '',
            city: '',
            dateOfBirth: ''
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => setMyProperties((prev) => ({
            ...prev,
            image: e.target.result
          }));
          reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.createProfile}>
            <img src={jobifyImg} width={102} height={42} alt="Jobify logo" />
            <div className={styles.createProfileContainer}>
                <h2>Осталось совсем чуть-чуть</h2>
                <h3>На этом этапе укажите необходимые детали о себе такие как фотография, локация и дата рождения</h3>
                {isSaveDisabled ? (
                    <button className={styles.addExperience} onClick={() => setIsOpenModal(true)}>
                        <img 
                            src={plusImg}
                            width={20}
                            height={20}
                            alt="plus"
                        />
                        <span>Указать детали</span>
                    </button> 
                ) :
                    <div className={styles.aboutMeBlock}>
                        <img 
                            src={myProperties.image}
                            width={88}
                            height={88}
                            alt="your image" 
                        />
                        <div className={styles.aboutMeContent}>
                            <div>
                                <h2>Username</h2>
                                <div>
                                    <button onClick={handleEdit}>
                                        <img 
                                            src={editImg}
                                            width={24}
                                            height={24}
                                            alt="edit" 
                                        />
                                    </button>
                                    <button onClick={handleDelete}>
                                        <img 
                                            src={deleteImg}
                                            width={24}
                                            height={24}
                                            alt="edit" 
                                        />
                                    </button>
                                </div>
                            </div>
                            <h3>{myProperties.country}, {myProperties.city}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Massa et id faucibus id fermentum. Sed netus id gravida dui tellus facilisis nullam interdum montes.</p>
                        </div>
                    </div>
                }
            </div>
            <CreateTaskLoad prev={6} next={8} setPage={setPage} maxPage={8} disabled={isSaveDisabled} onNext={
                () => {
                    setUser((prev) => ({
                        ...prev,
                        userDetails: myProperties
                    }));
                }
            }/>
            <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
                <div className={styles.modalContainer}>
                    <h2>Указать детали</h2>
                    <form>
                        <div className={styles.formImage}>
                            <img 
                                src={myProperties.image || mockImg}
                                width={88}
                                height={88}
                                alt="your photo" 
                            />
                             <label>
                                Выбрать фотографию
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                        <div className={styles.formLocation}>
                            <div>
                                <label htmlFor="country">Страна *</label>
                                <input type="text" id="country" value={myProperties.country} placeholder="Россия" required onInput={(e) => handleSetData(e, 'country')}/>
                            </div>
                            <div>
                                <label htmlFor="city">Город *</label>
                                <input type="text" id="city" value={myProperties.city} placeholder="Москва" required onInput={(e) => handleSetData(e, 'city')}/>
                            </div>
                        </div>
                        <div className={styles.formDatePicker}>
                            <h2>Дата рождения *</h2>
                            <DatePickerItem value={myProperties.dateOfBirth} onChange={(date, dateString) => {
                                setMyProperties((prev) => ({
                                    ...prev,
                                    dateOfBirth: date ? dateString : "" 
                                }));
                            }}/>
                        </div>
                        <div className={styles.formBtns}>
                            <button onClick={handleCloseModal}>Назад</button>
                            <button onClick={() =>  setIsOpenModal(false)} style={{opacity: isSaveDisabled ? '0.2' : '1'}} disabled={isSaveDisabled}>Сохранить</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
