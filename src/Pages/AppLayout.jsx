import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import User from '../components/User';
import styles from './AppLayout.module.css';

export default function AppLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.app}>
      {isAuthenticated && (
        <>
          <Sidebar />
          <Map />
          <User />
        </>
      )}
    </div>
  );
}
