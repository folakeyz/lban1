import React from 'react'
import styles from './styles.module.css'
import intro from '../../assets/intro.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import csp from '../../assets/CSP.jpg'

const Overlay = () => {
    return(
<div className={styles.overlay}>
<div className={styles.color}>
<div className={styles.item1}>
        <div className={styles.grid}>
            <div className={styles.cons}>
            <h1>Lotus Beta Analytics Nig. Ltd. </h1>
                                  <p>We are focused on the provision of Information Technology Solutions and Services that are built on a world-class, secure, resilient infrastructure, delivered according to global best practices in partnership with the world’s leading technology vendor
                                  </p>
                                  <Link to="/" class="btn btn-sm btn-success bing">Learn More</Link>
            </div>
            <div className={styles.cons}>
  <img src={csp} alt="Microsoft Gold Partner" className={styles.one} />
            </div>
        </div>
</div>
<div className={styles.item2}>
<div className={styles.cons}>
            <h1>C | S C U</h1>
                                  <p>Secure Yourself, Your Staff, Become Skilled and Knowledgeable. Be a CERTIFIED SECURE COMPUTER USER
                                  </p><Link to="/" class="btn btn-sm btn-success bing">Learn More</Link>
            </div>
</div>
<div className={styles.item3}>
<div className={styles.cons}>
<h1>COVID-19 impact on Business and working remotely with Microsoft Teams to stay productive</h1>
                                  <p>What could COVID-19 impact mean for companies? Are they better prepared to stay productive, efficient and better effective? Going by events, small businesses are in no way prepared or have any plan on ground to stay productive during these trying times
                                  </p><Link to="/" class="btn btn-sm btn-success bing">Register Now</Link>
            </div>
</div>
</div>
<div className={styles.video}>
<video autoPlay loop muted controlsList="nodownload">
              <source src={intro} />
          </video>
</div>
</div>
    )
}
export default Overlay;