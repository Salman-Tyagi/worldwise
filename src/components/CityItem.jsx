import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { useCitites } from '../contexts/CititesContext';

export default function CityItem({ city }) {
  const { cityName, date, emoji, id, position } = city;
  const { lat, lng } = position;
  const { currentCity, deleteCity } = useCitites();

  const deleteHandler = e => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        to={`${id}?lat=${lat}&lng=${lng}`}
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles['cityItem--active'] : ''
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <p className={styles.name}>{cityName}</p>
        <p className={styles.date}>({new Date(date).toDateString()})</p>
        <button className={styles.deleteBtn} onClick={deleteHandler}>
          &times;
        </button>
      </Link>
    </li>
  );
}
