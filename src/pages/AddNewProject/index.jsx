import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { Textarea } from '../../components/Textarea';
import DragDrop from '../../components/DragAndDrop';
import { useState } from 'react';
import arrowImg from "../../assets/icons/arrowBlackLong.svg";
import trashImg from "../../assets/icons/trash.svg";
import SmallDragDrop from '../../components/SmallDragAndDrop';
import Modal from '../../components/Modal';
import AddNewProjectTwo from './AddNewProject2';

export default function AddNewProject() {
    const [files, setFiles] = useState([]);
    const [showImage, setShowImage] = useState(0); 
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isCover, setIsCover] = useState(null);
    const [page, setPage] = useState('add');
    const [inputData, setInputData] = useState({
        name: "",
        role: "",
        skills: "",
        link: "",
        description: "Расскажите о проекте"
    })

    const imageSrc = files.length > 0 ? URL.createObjectURL(files[showImage]) : null;

    const removeFile = (index) => {
        setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
        setShowImage(0); 
    };

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

    const handleChageInputState = (e, name) => {
        setInputData((prev) => ({
            ...prev,
            [name]: e.target.value
        }));

    }
    
    console.log(inputData);
    return (
        <>
            {page === "add" ? ( 
                <div className={styles.addNewProject}>
                    <h1>Добавить новый проект</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Condimentum nulla lectus bibendum nulla risus fermentum.</p>
                    <div className={styles.addNewProjectContainer}>
                        <div className={styles.inputs}>
                            <div>
                                <label htmlFor="name">Название проекта</label>
                                <input value={inputData.name} type="text" id="name" placeholder="Введите название проекта" onChange={(e) => handleChageInputState(e, 'name')}/>
                            </div>
                            <div>
                                <label htmlFor="role">Ваша роль в проекте</label>
                                <input value={inputData.role} type="text" id="role" placeholder="UI/UX Дизайнер" onChange={(e) => handleChageInputState(e, 'role')}/>
                            </div>
                            <div>
                                <label htmlFor="skills">Какие навыки применялись?</label>
                                <input value={inputData.skills} type="text" id="skills" placeholder="UX-аналитика; Figma; Photoshop" onChange={(e) => handleChageInputState(e, 'skills')}/>
                                <h4>Перечислите навыки, разделяя их точкой с запятой (;)</h4>
                            </div>
                            <div>
                                <label htmlFor="link">Ссылка на проект <span>(если есть)</span></label>
                                <input value={inputData.link} type="text" id="link" placeholder="example.com" onChange={(e) => handleChageInputState(e, 'link')}/>
                            </div>
                            <div>
                                <h2>Описание</h2>
                                <Textarea maxLength={1000} value={inputData.description} onChange={(e) => handleChageInputState(e, 'description')}/>
                            </div>
                        </div>
                        <div className={styles.dragAndDrop}>
                            {files.length > 0 ? (
                                <div className={styles.imageContainer}>
                                    <div className={styles.imageWrapper}>
                                        <img src={imageSrc} alt="Preview" className={styles.previewImage} />
                                        <button onClick={() => removeFile(showImage)}>
                                            <img
                                                src={trashImg}
                                                width={24}
                                                height={24}
                                                alt="trash" 
                                            />
                                        </button>
                                        <h2>{showImage + 1} из {files.length}</h2>
                                        <button onClick={() => setIsOpenModal(true)}>Установить как обложку</button>
                                    </div>
                                    <SmallDragDrop setFiles={setFiles} />
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
                            ) : (
                                <DragDrop setFiles={setFiles} />
                            )}
                        </div>
                    </div>
                    <div className={styles.addNewProjectBtns}>
                        <Link to="#">Назад</Link>
                        <div>
                            <button>В черновики</button>
                            <button onClick={() =>  setPage('publish')}>Продолжить</button>
                        </div>
                    </div>
                    <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
                        <div className={styles.modalContent}>
                            <h2>Обложка проекта</h2>
                            <img src={imageSrc} alt="review image"/>
                            <ul className={styles.imageslist}>
                                {files.map((file, index) => (
                                    <li key={index} onClick={() => setShowImage(index)}>
                                        <img src={URL.createObjectURL(file)} width={100} height={100} alt={`Preview ${index + 1}`} />
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <button onClick={() => setIsOpenModal(false)}>Назад</button>
                                <button onClick={() => {
                                    setIsCover(showImage);
                                    setIsOpenModal(false);
                                }}>Сохранить обложку</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            )
            : <AddNewProjectTwo setPage={setPage} inputData={inputData} files={files} showImage={showImage} setShowImage={setShowImage} imageSrc={imageSrc}/>
            }
        </>
    );
}
