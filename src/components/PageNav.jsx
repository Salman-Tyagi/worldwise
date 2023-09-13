import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PageNav() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function logoutHandler() {
    logout();
    navigate('/');
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          {!isAuthenticated ? (
            <NavLink to='/login' className={styles.ctaLink}>
              Login
            </NavLink>
          ) : (
            <NavLink to='/' className={styles.ctaLink} onClick={logoutHandler}>
              Logout
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
