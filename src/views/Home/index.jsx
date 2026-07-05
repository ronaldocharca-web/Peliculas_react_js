import React, { useEffect, useRef, useState ,useMemo} from 'react'
import SignupForm from '../../components/SignupForm';
import Navbar from '../../components/Navbar/Index';
import Events from '../../components/Events';
import useEventsResults from '../../state/events-results';
import styles from './Home.module.css'
const Home = () => {
  const { data, isLoading, error, fetchEvents } = useEventsResults();
  const events=useMemo(()=> data?._embedded?.events || [],[data?._embedded?.events])
  const page =useMemo(()=> data?.page || [],[data?.page])
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef();
 
  // throw new Error("123");
 
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents])

  const handleNavbarSearch = (searchTerm) => {
    console.log(containerRef.current)
    setSearchTerm(searchTerm)
    fetchEvents(`&keyword=${searchTerm}`)
  }
 

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando...</div>
    }
    if (error) {
      return <div>Ha ocurrido un error: {error.message}</div>
    }
    return (
      <div>
        <Events searchTerm={searchTerm} events={events}></Events>
      </div>)
  }
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef}></Navbar>
      {renderEvents()}
    </>
  )
}

export default Home
