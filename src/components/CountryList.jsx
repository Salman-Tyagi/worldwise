import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';
import styles from './CountryList.module.css';
import { useCitites } from '../contexts/CititesContext';

export default function CountryList() {
  // 3. CONSUME CONTEXTAPI FOR PROPS
  const { cities, isLoading } = useCitites();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message='Add your first city by clicking on the map' />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={Math.random()} />
      ))}
    </ul>
  );
}
