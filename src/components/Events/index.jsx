import React, { memo,useState } from 'react'
import EventItem from './components/EventItem'
import eventsJSON from '../../data/events.json'
import { useNavigate } from 'react-router-dom'

const Events = ({ searchTerm,events }) => {
  const navigate = useNavigate();
  


  const handleEventItemClick = (eventId) => {
    navigate(`/detail/${eventId}`);
  }

  const renderEvents = () => {
    let eventsFiltered = events;
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((eventItem) => eventItem.name.toLowerCase().includes(searchTerm))
    }

    return eventsFiltered.map((eventItem) =>
    (
      <EventItem 
      key={eventItem.id} 
      name={eventItem.name} 
      image={eventItem.images[0].url}
       info={eventItem.info}
        onEventClick={handleEventItemClick}
        id={eventItem.id}></EventItem>))
  }
  return (
    <div>
      EVENTOS
      {renderEvents()}
    </div>
  )
}

export default memo(Events);
