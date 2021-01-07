import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import serv1 from '../../assets/professional.png';
import serv2 from '../../assets/biz.jpg';
import serv3 from '../../assets/security.png';
import serv4 from '../../assets/check.webp';
import serv5 from '../../assets/web.png';
import serv6 from '../../assets/secure.jpeg';

const ServicesCard = () => {
    return(
        <div className={styles.services}>
            <h1>Our Services</h1><hr />
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.imgCard}>
                        <img src={serv1} alt="Professional Services" />
                    </div>
                    <div className={styles.textCard}>
                    <h3>Professional Services</h3>
                    <p>Our Professional Services assist enterprises to conquer the challenges ... 
                        We offer Desktop Support for a variety of IT services......</p>
                    </div>
                    <div className={styles.btnCard}>
                    <Link to="/" className={styles.btn}>Read More...</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgCard}>
                        <img src={serv2} alt="Business Consulting" />
                    </div>
                    <div className={styles.textCard}>
                    <h3>Business Consulting</h3>
                    <p>With the aim to provide world-class IT business consulting solutions, 
                        Lotus Beta Analytics Nigeria has done well in its service offerings ...</p>
                    </div>
                    <div className={styles.btnCard}>
                    <Link to="/" className={styles.btn}>Read More...</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgCard}>
                        <img src={serv4} alt="IT Assurance" />
                    </div>
                    <div className={styles.textCard}>
                    <h3>IT Assurance</h3>
                    <p>We manage IT risks in our client’s organizations ensuring that their investments in IT controls are effective.....</p>
                        
                    </div>
                    <div className={styles.btnCard}>
                    <Link to="/" className={styles.btn}>Read More...</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgCard}>
                        <img src={serv3} alt="IT Risk Assessments" />
                    </div>
                    <div className={styles.textCard}>
                    <h3>IT Risk Assessments</h3>
                    <p>We offer risk assessment solutions. This helps us identify any potential hazards and associated risks, so we can offer .....</p>
                    </div>
                    <div className={styles.btnCard}>
                    <Link to="/" className={styles.btn}>Read More...</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgCard}>
                        <img src={serv5} alt="Application Development" />
                    </div>
                    <div className={styles.textCard}>
                    <h3>Application Development</h3>
                    <p>As an IT company, Lotus Beta Analytics Nigeria using cutting edge technology deploys solutions aimed at driving business to success......</p>
                    </div>
                    <div className={styles.btnCard}>
                    <Link to="/" className={styles.btn}>Read More...</Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imgCard}>
                        <img src={serv6} alt="IT Security" />
                    </div>
                    <div className={styles.textCard}>
                    <h3>IT Security</h3>
                    <p>We offer complete Cyber Security Solutions:</p>
                    <ul>
                        <li>Sophos</li>
                        <li>Baracuda</li>
                        <li>Paloalto</li>
                    </ul>
                    </div>
                    <div className={styles.btnCard}>
                    <Link to="/" className={styles.btn}>Read More...</Link>
                    </div>
                </div>




            </div>
        </div>
    )
}
export default ServicesCard;