import styles from "./style.module.css";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { Link } from 'react-router-dom';

import rubleImg from '../../../assets/icons/ruble.svg';
import plusImg from '../../../assets/icons/plus.svg';

export default function CreateTaskPageFive() {

    const handleAddStage = () => {
        const li = document.createElement('li');
    
        li.innerHTML = `
            <input type="text" class="${styles.stageName}" placeholder="Название этапа" required/>
            <input type="text" class="${styles.stagePrice}" placeholder="Цена" required/>
            <img
                src="${rubleImg}"
                width="11"
                height="20"
                alt="ruble"
            />
        `;
        
        document.getElementById('stages').appendChild(li);
    }

    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskContainer}>
                <div className={styles.titleBlock}>
                    <h2>Определим Ваш бюджет</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Tincidunt sed placerat erat proin cursus. Sed amet ac congue
                    </p>
                </div>
                <div className={styles.yourBudget}>
                   <div className={styles.selectPaymentMethod}>
                        <div>
                            <label htmlFor="payment1">Оплата по этапам</label>
                            <input id="payment1" type="checkbox" />
                        </div>
                        <div>
                            <label htmlFor="payment2">Фиксированная оплата</label>
                            <input id="payment2" type="checkbox" />
                        </div>
                   </div>
                   <p>Lorem ipsum dolor sit amet consectetur. Tincidunt sed placerat erat proin cursus. Sed amet ac congue</p>
                   <h2>Оплата по этапам</h2>
                   <p>Lorem ipsum dolor sit amet consectetur. Tincidunt sed placerat erat proin cursus. Sed amet ac congue</p>
                   <div className={styles.paymentStages}>
                        <button className={styles.generateWithAI}>Сгенерировать с помощью ИИ</button>
                        <ul className={styles.stages} id="stages">
                            <li>
                                <input type="text" className={styles.stageName} placeholder="Название этапа" required/>
                                <input type="text" className={styles.stagePrice} placeholder="Цена" required/>
                                <img
                                    src={rubleImg}
                                    width={11}
                                    height={20}
                                    alt="ruble" 
                                />
                            </li>
                            <li>
                                <input type="text" className={styles.stageName} placeholder="Название этапа" required/>
                                <input type="number" className={styles.stagePrice} placeholder="Цена" required/>
                                <img 
                                    src={rubleImg}
                                    width={11}
                                    height={20}
                                    alt="ruble" 
                                />
                            </li>
                        </ul>
                        <button className={styles.addStage} onClick={handleAddStage}>
                            <span>Добавить этап</span>
                            <img 
                                src={plusImg}
                                width={18}
                                height={18}
                                alt="plus" 
                            />
                        </button>
                        <Link to="#">Руководство по способу оплаты</Link>
                   </div>
                </div>
            </div>
            <CreateTaskLoad prevLink="/create-task-3" nextLink="/create-task-5"/>
        </div>
    );
}
