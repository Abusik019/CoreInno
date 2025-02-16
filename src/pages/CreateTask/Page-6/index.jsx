import styles from "./style.module.css";
import CreateTaskLoad from '../../../components/CreateTaskLoad';
import { Link } from "react-router-dom";

import greenArrowImg from '../../../assets/icons/greenArrow.svg';
import warningImg from '../../../assets/icons/warning.svg';
import editImg from '../../../assets/icons/pen.svg';
import deleteImg from '../../../assets/icons/close.svg';
import { Textarea } from "../../../components/Textarea";

export default function CreateTaskPageSix({ setPage }) {
    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskContainer}>
                <div className={styles.titleBlock}>
                    <h2>Опишите Вашу задачу</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tincidunt sed placerat erat proin cursus. Sed amet ac congue.</p>
                    <ul className={styles.titleBlockList}>
                        <li>Lorem ipsum dolor sit amet consectetur. Tincidunt sed placerat erat proin cursus.</li>
                        <li>Lorem ipsum dolor sit amet consectetur. Tincidunt sed placerat erat proin cursus.</li>
                        <li>Lorem ipsum dolor sit amet consectetur. Tincidunt sed placerat erat proin cursus.</li>
                    </ul>
                    <Link to='#'>
                        <span>Примеры описания задачи</span>
                        <img 
                            src={greenArrowImg}
                            width={32}
                            height={20}
                            alt="arrow" 
                        />
                    </Link>
                </div>
                <div className={styles.task}>
                    <div className={styles.taskWarning}>
                        <img 
                            src={warningImg}
                            width={16}
                            height={16}
                            alt="warning" 
                        />
                        <p>Ваше описание задания выглядит довольно коротким, чтобы избежать недопониманий, увеличьте содержимое описания</p>
                    </div>
                    <div className={styles.taskTitleBlock}>
                        <h2>Опишите задачу</h2>
                        <Link to='#'>Сгеренировать с помощью ИИ</Link>
                    </div>
                    <Textarea value="Lorem ipsum dolor sit amet consectetur." maxLength={5000}/>
                    <div className={styles.files}>
                        <button>
                            <img 
                                src={editImg}
                                width={16}
                                height={16}
                                alt="start" 
                            />
                        </button>
                        <h2>Вложения</h2>
                        <h3>Прикрепленные файлы </h3>
                        <ul className={styles.selectFiles}>
                            <li>
                                <h2>фон.jpg</h2>
                                <img 
                                    src={deleteImg}
                                    width={18}
                                    height={18}
                                    alt="delete" 
                                />
                            </li>
                            <li>
                                <h2>логотип.ai</h2>
                                <img 
                                    src={deleteImg}
                                    width={18}
                                    height={18}
                                    alt="delete" 
                                />
                            </li>
                            <li>
                                <h2>логотип.ai</h2>
                                <img 
                                    src={deleteImg}
                                    width={18}
                                    height={18}
                                    alt="delete" 
                                />
                            </li>
                            <li>
                                <h2>логотип.ai</h2>
                                <img 
                                    src={deleteImg}
                                    width={18}
                                    height={18}
                                    alt="delete" 
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CreateTaskLoad prev={5} next={7} setPage={setPage} maxPage={6}/>
        </div>
    );
}
