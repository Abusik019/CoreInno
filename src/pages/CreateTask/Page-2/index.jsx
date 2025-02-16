import CreateTaskLoad from '../../../components/CreateTaskLoad';
import styles from './style.module.css';

export default function CreateTaskPageTwo({ setPage }) {
  return (
    <div className={styles.createTask}>
        <div className={styles.createTaskTitleBlock}>
            <h2>Введите название вашего задания</h2>
            <p>Чтобы избежать недоразумений и привлечь правильных исполнителей, сформулируйте название задания максимально точно и понятно</p>
            <input type="text" placeholder='Ваше задание'/>
            <h3>Например:</h3>
            <ul className={styles.taskExmaples}>
                <li>Lorem ipsum dolor sit amet consectetur tetur</li>
                <li>Doloem ipsum dolor sit amet consectetur sit amet consectetur</li>
            </ul>
        </div>
        <CreateTaskLoad prev={1} next={3} setPage={setPage} maxPage={6}/>
    </div>
  )
}
