import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom';

const Navbar = forwardRef(({ onSearch }, ref) => {


  const [search, setSearch] = useState('');
  const containerRef = useRef();

  useEffect(() => { console.log('Navbar search updated:') }, [search, onSearch]);





  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(search)
    }
  }

  useImperativeHandle(ref, () => ({

    search,
    setSearch
  }));


  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  console.log(containerRef)

  return (

    <div ref={ref} style={{
      margiBottom: 14,
      width: '100%',
      backgroundColor: '#9f2b2b',
      display: 'flex',

    }}>
      <div style={{ flex: 1, display: 'flex' }}>
        <p style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>Mi Boletera</p>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>  <input
        type="text" placeholder='Buscar...'
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleInputKeyDown}
        style={{
          fontSize: 14, padding: "5px 4px", borderRadius: "10px", border: "none"
          , width: "200px"
        }}
      />
      <Link to="/profile/my-info" style={{marginLeft:24,color:"#fff",textDecoration:"none"
       
        }}>MI PERFIL</Link>
       
    </div>

    </div>

  )
})

Navbar.displayName = 'Navbar';
export default Navbar
