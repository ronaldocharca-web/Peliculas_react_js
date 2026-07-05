

import { Link } from 'react-router-dom';
import styles from './EventItem.module.css'
import HearthFilled from '../../../../assets/corazon.png';
import HearthUnFilled from '../../../../assets/corazon-n.png';
import useLikeEvents from '../../../../hooks/useLikeEvents';

const EventItem = ({ info, id, name, image, onEventClick }) => {
 const { isEventLiked, toggleEventLike } = useLikeEvents(id);
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  }
  const handleHeartClick = (e) => {
  toggleEventLike();
};
  return (
    <div className={styles.eventItemContainer} onClick={() => console.log('click en el evento')}>
      <div className={styles.imageContainer}>
        <img src={isEventLiked ? HearthUnFilled : HearthFilled } alt="no hay img" className={styles.heartImage} onClick={handleHeartClick}></img>

        <img src={image} alt={name} width={200} height={200} />


      </div>
      <div className={styles.eventItemInfo}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreButton}
          onClick={handleSeeMoreClick}
        >
          {/* <Link to={`/detail/${id}`} className={styles.seeMoreLink}>Ver más</Link>*/}
          VER MAS
        </button>
      </div>

    </div>
  )
}

export default EventItem
