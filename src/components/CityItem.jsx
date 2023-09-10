import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';

/* eslint-disable react/prop-types */
export default function CityItem({ city }) {
  const { cityName, date, emoji, id, position } = city;
  const { lat, lng } = position;

  return (
    <li>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <p className={styles.name}>{cityName}</p>
        <p className={styles.date}>({new Date(date).toDateString()})</p>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
