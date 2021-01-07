import React from 'react'
import styles from './styles.module.css'
import lag from '../../assets/lagos.jpg'

const Count = () => {
    return(
<div className={styles.count}>
        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles.grids}>
                    <div className={styles.cards}>
                        <h4>Customers</h4>
                        <h1 className={styles.purple}>50+</h1>
                        <h5 className={styles.purple}>Happy Customers</h5>
                    </div>

                    <div className={styles.cards}>
                        <h4>Projects</h4>
                        <h1 className={styles.magenta}>20+</h1>
                        <h5 className={styles.magenta}>Projects Completed</h5>
                    </div>

                    <div className={styles.cards}>
                        <h4>Experience</h4>
                        <h1 className={styles.green}>10+</h1>
                        <h5 className={styles.green}>years of Experience</h5>
                    </div>

                    <div className={styles.cards}>
                        <h4>Business Process Automation</h4>
                        <h1 className={styles.gold}>30+</h1>
                        <h5 className={styles.gold}>Deployed Applications</h5>
                    </div>

                </div>
            </div>
            <div className={`${styles.card} ${styles.center}`}>
            <img src={lag} alt="Lagos" className={styles.two} />
                  
                   
                </div>
        </div>
</div>
    )
}
export default Count;