import styles from './style.module.css';
import { Link } from 'react-router-dom';
import arrowImg from "../../../assets/icons/arrowBlackLong.svg";
import projectImg from '../../../assets/images/projectImage.png';

export default function AddNewProjectTwo({ setPage, inputData, files, showImage, setShowImage, imageSrc }) {
    const skills = inputData.skills.split(';');

    console.log(skills);

    const nextImage = () => {
        if (showImage < files.length - 1) {
            setShowImage(prev => prev + 1);
        }
    };

    const prevImage = () => {
        if (showImage > 0) {
            setShowImage(prev => prev - 1);
        }
    };

    return (
        <div className={styles.publishPage}>
            <div className={styles.publishPageContent}>
                <div className={styles.publishPageText}>
                    <h2>{inputData.name}</h2>
                    <p>{inputData.description}</p>
                    <h3>Навыки и инструменты</h3>
                    <ul>
                        {skills.map((item, index) => {
                            if(item){
                                return <li key={index}>{item}</li>;
                            }
                        })}
                    </ul>
                    <h4>Дата публикации: 22 марта 2024</h4>
                    <Link to="#">{inputData.link}</Link>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={imageSrc ? imageSrc : projectImg} alt="Preview"/>
                    <div className={styles.arrowBtns}>
                        <button className={`${styles.prevBtn} ${showImage === 0 ? styles.disabled : ''}`} onClick={prevImage} disabled={showImage === 0}>
                            <img
                                src={arrowImg}
                                width={32}
                                height={12}
                                alt="arrow"
                            />
                        </button>
                        <button className={`${styles.nextBtn} ${showImage === files.length - 1 ? styles.disabled : ''}`} onClick={nextImage} disabled={showImage === files.length - 1}>
                            <img
                                src={arrowImg}
                                width={33}
                                height={12}
                                alt="arrow"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.addNewProjectBtns}>
                <button onClick={() => setPage('add')}>Назад</button>
                <div>
                    <button>В черновики</button>
                    <button onClick={() =>  setPage('publish')}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}
