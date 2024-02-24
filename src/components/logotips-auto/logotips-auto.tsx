import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsSliderLogotips } from '../../utils/constants';
import Img1 from './images/brands1.svg';
import Img2 from './images/brands2.svg';
import Img3 from './images/brands3.svg';
import Img4 from './images/brands4.svg';
import Img5 from './images/brands5.svg';
import Img6 from './images/brands6.svg';
import Img7 from './images/brands7.svg';
import styles from './logotips-auto.module.css';
const LogotipsAuto = () => {
  return (
    <section className="section mb-4 about lg:rounded-3xl lg:m-5 lg:mb-24">
      <div className={clsx('slider-container', styles.container)}>
        <Slider {...settingsSliderLogotips}>
          <img src={Img1} className={styles.img} />
          <img src={Img2} className={styles.img} />
          <img src={Img3} className={styles.img} />
          <img src={Img4} className={styles.img} />
          <img src={Img5} className={styles.img} />
          <img src={Img6} className={styles.img} />
          <img src={Img7} className={styles.img} />
        </Slider>
      </div>
    </section>
  );
};

export default LogotipsAuto;
