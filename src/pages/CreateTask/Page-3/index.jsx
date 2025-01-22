import CreateTaskLoad from "../../../components/CreateTaskLoad";
import styles from "./style.module.css";
import deleteImg from '../../../assets/icons/close.svg';
import addImg from '../../../assets/icons/plus.svg';

const skills = [
    {
        id: 1,
        name: "Графический дизайн",
    },
    {
        id: 2,
        name: "C#",
    },
    {
        id: 3,
        name: "Python",
    },
    {
        id: 4,
        name: "Python",
    },
    {
        id: 5,
        name: "Графический дизайн",
    },
    {
        id: 6,
        name: "C#",
    },
];

export default function CreateTaskPageThree() {
    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskContainer}>
                <div className={styles.titleBlock}>
                    <h2>Какие навыки требуются для работы?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Quis auctor gravida donec cursus ut viverra tellus. Quam posuere proin ut vivamus pellentesque diam. Placerat metus felis nulla quis dolor.</p>
                </div>
                <div className={styles.contentBlock}>
                    <input type="text" placeholder="Поиск"/>
                    <h2>Выберите 3-5 навыков для лучших результатов</h2>
                    <h3>Выбранные навыки</h3>
                    <ul className={styles.choosenSkills}>
                        {skills.map((item) => (
                            <li key={item.id}>
                                <h2>{item.name}</h2>
                                <button>
                                    <img 
                                        src={deleteImg}
                                        width={18}
                                        height={18}
                                        alt="delete" 
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h4>Популярные среди заказчиков</h4>
                    <ul className={styles.popularSkills}>
                        {skills.map((item) => (
                            <li key={item.id}>
                                <h2>{item.name}</h2>
                                <button>
                                    <img 
                                        src={addImg}
                                        width={18}
                                        height={18}
                                        alt="delete" 
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <CreateTaskLoad prevLink="/create-task-1" nextLink="/create-task-3"/>
        </div>
    );
}
