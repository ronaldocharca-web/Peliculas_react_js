import React from 'react'
import { Link, Outlet, useLocation, useNavigate} from 'react-router-dom'
import styles from './Profile.module.css'
const Profile = () => {
  const  {pathname} = useLocation();
  const navigate=useNavigate();
  const handleTabClikc = (path) => {
    navigate(`/profile/${path}`);
  }
  return (
    <div >
      <Link to='/' className={styles.HomeLink}>INICIO</Link>
      <div className={styles.tabsContaines}>
        <span className={`${pathname.includes('my-info')? styles.active : styles.inactive} ${styles.tab}`}
        onClick={()=>handleTabClikc('my-info')}
        style={{ marginRight:"8px"}}
        >MY informacion</span>
        <span className={`${pathname.includes('liked-events')? styles.active : styles.inactive} ${styles.tab}`}
        onClick={()=>handleTabClikc('liked-events')}
        style={{ marginRight:"8px"}}
        >FABORITOS</span>
      </div>
        Profile
        <Outlet></Outlet>
    </div>
  )
}

export default Profile
