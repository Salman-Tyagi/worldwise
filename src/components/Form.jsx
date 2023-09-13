// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from 'react';
import { useUrlPosition } from '../hooks/useUrlPosition';
import { useCitites } from '../contexts/CititesContext';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Button from './Button';
import BackButton from './BackButton';
import Message from './Message';
import Spinner from './Spinner';
import styles from './Form.module.css';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

export function convertToEmoji(countryCode) {
  if (countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }
}

function Form() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [isGeoLocationLoading, setIsGeocodingLoading] = useState(false);
  const [error, setError] = useState('');
  const [emoji, setEmoji] = useState('');
  const { createCity } = useCitites();
  const navigate = useNavigate();

  const [lat, lng] = useUrlPosition();

  useEffect(() => {
    async function fetchGeocodingCity() {
      try {
        setIsGeocodingLoading(true);
        setError('');

        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        if (!res.ok)
          throw new Error('Error in fetching data! Please click again');

        const data = await res.json();
        if (!data.countryCode)
          throw new Error(
            'No city or country found, please click somewhere else'
          );

        setCityName(data.city || data.locality || '');
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsGeocodingLoading(false);
      }
    }

    fetchGeocodingCity();
  }, [lat, lng]);

  if (isGeoLocationLoading) return <Spinner />;
  if (!lat || !lng) return;
  if (error) return <Message message={error} />;

  function submitHandler(e) {
    e.preventDefault();

    const newCity = {
      cityName,
      country,
      emoji,
      position: { lat, lng },
      date,
      notes,
    };

    createCity(newCity);
    navigate('/app/cities');
  }

  return (
    <form className={`${styles.form}`} onSubmit={submitHandler}>
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input
          id='cityName'
          onChange={e => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        {/* <input id='date' onChange={e => setDate(e.target.value)} value={date} /> */}
        <DatePicker
          id='date'
          onChange={date => setDate(date)}
          selected={date}
          dateFormat='dd/MM/yyyy'
        />
      </div>

      <div className={styles.row}>
        <label htmlFor='notes'>Notes about your trip to {cityName}</label>
        <textarea
          id='notes'
          onChange={e => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'>Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
