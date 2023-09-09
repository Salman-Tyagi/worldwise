import PageNav from '../components/PageNav';
import styles from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <PageNav />
      <h1>Page not found! 😢</h1>
    </div>
  );
}
