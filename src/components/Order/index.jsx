import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import menu from '../../assets/icons/order-menu.svg';
import edit from '../../assets/icons/edit.svg';
import add from '../../assets/icons/add.svg';
import deleteImg from '../../assets/icons/redDelete.svg';

export const Order = ({ title, desc, theme, date, status, views, response, price }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <li className={styles.orderItem}>
      <div className={styles.orderTitleBlock}>
        <h2>{title}</h2>
        <h3>{price} ₽</h3>
      </div>
      <p>{desc}</p>
      <div className={styles.orderInfo}>
        <div className={styles.orderInfoLeft}>
          <h2>Тема: {theme}</h2>
          <h3>{date}</h3>
          <h4>{status}</h4>
        </div>
        <div className={styles.orderInfoRight}>
          <div>{views}</div>
          <div>{response}</div>
          <div><Link to="#">Перейти к откликам</Link></div>
        </div>
      </div>
      <button 
        className={styles.orderMenu} 
        onClick={toggleDropdown}
      > 
        <img src={menu} width={18} height={4} alt="menu" />
      </button>
      <div 
        className={`${styles.orderDropdown} ${isDropdownVisible ? styles.visible : ''}`}
      >
        <Link to="#">
          <img src={edit} width={24} height={24} alt="edit" />
          <h2>Редактировать заказ</h2>
        </Link>
        <Link to="#">
          <img src={add} width={24} height={24} alt="add" />
          <h2>Редактировать заказ</h2>
        </Link>
        <Link to="#">
          <img src={deleteImg} width={24} height={24} alt="delete" />
          <h2>Удалить заказ</h2>
        </Link>
      </div>
    </li>
  );
};
