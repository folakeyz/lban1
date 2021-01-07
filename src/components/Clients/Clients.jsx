import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../../assets/pp1.jpg";
import p2 from "../../assets/pp2.jpg";
import p3 from "../../assets/pp3.jpg";
import p4 from "../../assets/pp4.jpg";
import p5 from "../../assets/pp5.jpg";
import p6 from "../../assets/pp6.jpg";
import p7 from "../../assets/pp7.jpg";
import p8 from "../../assets/pp8.jpg";
import p9 from "../../assets/pp9.jpg";
import p10 from "../../assets/pp10.jpg";
import p11 from "../../assets/pp11.jpg";

export default class Gallery extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <div className={styles.slides}>
        <h2>Our Partners</h2>
        <Slider {...settings}>
          <div className={styles.gallery}>
            <img src={p1} alt="LBAN Partners" className={styles.img} />
          </div>

          <div className={styles.gallery}>
            <img src={p2} alt="LBAN Partners" className={styles.img} />
          </div>

          <div className={styles.gallery}>
            <img src={p3} alt="LBAN Partners" className={styles.img} />
          </div>
          <div className={styles.gallery}>
            <img src={p4} alt="LBAN Partners" className={styles.img} />
          </div>
          <div className={styles.gallery}>
            <img src={p5} alt="LBAN Partners" className={styles.img} />
          </div>
          <div className={styles.gallery}>
            <img src={p6} alt="LBAN Partners" className={styles.img} />
          </div>
          <div className={styles.gallery}>
            <img src={p7} alt="LBAN Partners" className={styles.img} />
          </div>
          <div className={styles.gallery}>
            <img src={p8} alt="LBAN Partners" className={styles.img} />
          </div>
          <div className={styles.gallery}>
            <img src={p9} alt="LBAN Partners" className={styles.img} />
          </div>
          <div className={styles.gallery}>
            <img src={p10} alt="LBAN Partners" className={styles.img} />
          </div>
          <div className={styles.gallery}>
            <img src={p11} alt="LBAN Partners" className={styles.img} />
          </div>
        </Slider>
      </div>
    );
  }
}
