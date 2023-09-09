import Logo from './Logo';
import AppNav from './AppNav';
import Footer from './Footer';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>Some places lists</p>
      <Footer />
    </div>
  );
}
