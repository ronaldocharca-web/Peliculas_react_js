import React, { useEffect, useState } from 'react';
import { LIKED_EVENTS_STORAGE_KEY } from '../../../../utils/constants';
import EventItem from '../../../../components/Events/components/EventItem/index';
import { useNavigate } from 'react-router-dom';

const LikedEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoadig, setIsLoadig] = useState(true);
  const [error, setError] = useState({})
  const navigate = useNavigate();
  useEffect(()=>{
    const fecthEventsDtails=async()=>{
      try{
        const likedEvents= JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];


        const results=[];
        for(const eventId of likedEvents){
            const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`
        );
        
      const data = await response.json();
          results.push(data);
        }
        setEvents(results);

      }
      catch(error){
        setError(error);
      }finally{
        setIsLoadig(false);
      }
      
    }
    fecthEventsDtails();

  },[])
  const handleEventItemClick=(id)=>{  
    navigate(`/detail/${id}`)

  }
  if(Object.keys(error).length>0){
    return <div>HA OCURIDO UN ERROR</div>
  }
  if(isLoadig){
    return <div>Cargando...</div>
  }

  return (
    <div>
      {events.map((event,index)=>(
        <EventItem 
        key={`liked-event-item-${event.id}-${index}`} 
        name={event.name} 
        image={event.images[0].url} 
        info={event.info}
        onEventClick={handleEventItemClick}
        id={event.id}></EventItem>))}
    </div>
  )
}

export default LikedEvents
