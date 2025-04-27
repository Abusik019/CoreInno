import styles from './style.module.css';
import crossImg from '../../assets/icons/cross.svg';

export default function Modal({ isOpen, onClose, showClose = true, children }) {
    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ""}`} onClick={onClose}>
            <div className={`${styles.modalContent} ${isOpen ? styles.open : ""}`} onClick={(e) => e.stopPropagation()}>
                {showClose && 
                    <button className={styles.closeButton} onClick={onClose}>
                        <img 
                            src={crossImg}
                            width={20}
                            height={20}
                            alt="close" 
                        />
                    </button>
                }
                {children}
            </div>
        </div>
    );
}