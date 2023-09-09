import styles from './Footer.module.css';

// eslint-disable-next-line react/prop-types
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}
