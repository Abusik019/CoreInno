import { CircleSelect } from "../../../components/CircleSelect";
import CreateTaskLoad from "../../../components/CreateTaskLoad";
import { SquareSelect } from "../../../components/SquareSelect";
import styles from "./style.module.css";

const options = [
    ...Array(3)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            name: "Ipsum dolor sit",
            description: "Lorem ipsum dolor sit amet (описание)",
        })),
];

export default function CreateTaskPageFour({ setPage }) {
    return (
        <div className={styles.createTask}>
            <div className={styles.createTaskContainer}>
                <div className={styles.titleBlock}>
                    <h2>Теперь уточним детали Вашего заказа</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Tincidunt sed
                        placerat erat proin cursus. Sed amet ac congue
                    </p>
                </div>
                <div className={styles.orderDetails}>
                    <SquareSelect
                        question="Lorem ipsum dolor sit amet consectetur. Massa et libero bibendum etiam vel ut sed fermentum vulputate?"
                        description="Lorem ipsum dolor sit amet consectetur (описание)"
                        options={options}
                    />
                    <CircleSelect 
                        question="Lorem ipsum dolor sit amet consectetur. Ultricies a vel quam auctor cras?"
                        description="Lorem ipsum dolor sit amet consectetur (описание)"
                        options={options}
                    />
                    <SquareSelect
                        question="Lorem ipsum dolor sit amet consectetur. Massa et libero bibendum etiam vel ut sed fermentum vulputate?"
                        description="Lorem ipsum dolor sit amet consectetur (описание)"
                        options={options}
                    />
                    <CircleSelect 
                        question="Lorem ipsum dolor sit amet consectetur. Ultricies a vel quam auctor cras?"
                        description="Lorem ipsum dolor sit amet consectetur (описание)"
                        options={options}
                    />
                </div>
            </div>
            <CreateTaskLoad prev={3} next={5} setPage={setPage}/>
        </div>
    );
}
