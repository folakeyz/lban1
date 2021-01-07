import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import Applogo from '../../assets/logo.png';
import SortIcon from '@material-ui/icons/Sort';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';


 const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
    return (
        <div className= { scroll ?  styles.navbarActive  :  styles.navbar} >
             <div className={styles.grid}>
             <div className={styles.topNav}>
               <img src={Applogo} alt="Lotus Beta Analytics" />
             </div>
             <div className={styles.bar} onClick={handleClick}>
             { click ?  <CloseIcon fontSize="large" />  :  <SortIcon fontSize="large" />}
             </div>
             <div className={click ? styles.navMenuactive : styles.topNav}>
             <ul>
            <li>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                   ABOUT US
                </Link>
            </li>
            <li>
                <Link to='/properties' className='nav-links' onClick={closeMobileMenu}>
                  OUR SOLUTIONS
                </Link>
            </li>
            <li>
                <Link to='/bookings' className='nav-links' onClick={closeMobileMenu}>
                OUR SERVICES
                </Link>
            </li> 
            <li>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                   EVENTS
                </Link>
            </li>
            <li>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                   CAREERS
                </Link>
            </li>
            <li>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                  BLOG
                </Link>
            </li>
            <li>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                   CONTACT
                </Link>
            </li>
            </ul>
            </div>
        </div>
        </div>
    )
}
export default Navbar;