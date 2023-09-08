import { Link } from 'react-router-dom';
import styles from './AppNav.module.css';

export default function AppNav() {
  return (
    <div className={styles.nav}>
      <Link to='/app'>Go to the app</Link>
    </div>
  );
}
