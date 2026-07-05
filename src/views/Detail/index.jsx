import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Detail/Detail.module.css';
import useEevntsResults from '../../state/events-results';

const Detail = () => {
  const { data} = useEevntsResults();
  const [eventdata, setEventData] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`
        );

        const data = await response.json();
        setEventData(data);
      } catch (error) {
        setEventData(null);
      }
    };

    fetchEventData();
  }, [eventId]);

  console.log(eventdata)
  if (!eventdata) return <p>Cargando...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.mainInfoContaines}>
        <img
          src={eventdata.images?.[0]?.url}
          alt="event"
          className={styles.eventImage}
        />

        <h4 className={styles.eventName}>{eventdata.name}</h4>

        <p className={styles.infoParagraph}>
          {eventdata.info}
        </p>

        {eventdata.dates?.start?.dateTime ? (
          <p className={styles.dateParagraph}>
            {eventdata.dates.start.dateTime}
          </p>
        ) : null}
      </div>
      <div className={styles.seatInfoContainer}>
        <h6>MAPA DE EVENTO</h6>
        <img src={eventdata.seatmap?.staticUrl} alt ="no hya img "></img>
        <p>{eventdata.pleaseNote}</p>
        <p>{eventdata.priceRanges?.[0].min}-{eventdata.priceRanges?.[0].max}</p>

      </div>
    </div>
  );
};

export default Detail;