import styles from './style.module.css';

export const CircleSelect = ({ question, description, options }) => {
  return (
    <div className={styles.selectWrapper}>
        <h2>{question}</h2>
        <p>{description}</p>
        <div className={styles.selectOption}>
            {options.map(item => (
                <div className={styles.checkboxWrapper} key={item.id}>
                    <input type='checkbox'/>
                    <label>
                        {item.name}<br/><span>{item.description}</span>
                    </label>
                </div>
            ))}
        </div>
    </div>
  )
}
