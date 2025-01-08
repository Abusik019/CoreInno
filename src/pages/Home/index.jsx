import { Navbar } from "../../components/Navbar";
import styles from './style.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
    </div>
  )
}