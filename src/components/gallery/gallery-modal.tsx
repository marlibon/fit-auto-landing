import React from 'react';
import clsx from 'clsx';
import Slider, { LazyLoadTypes } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsSliderGalleryModal, urlImages } from '../../utils/constants';
import styles from './gallery-modal.module.css';
import { Location } from '../../utils/types';
interface Props {
  city: Location;
  indexSlide?: number;
}
const GalleryModal: React.FC<Props> = ({ city, indexSlide }) => {
  const settings = {
    ...settingsSliderGalleryModal,
    initialSlide: indexSlide ?? 0
  };
  return (
    <div className={clsx('slider-container', styles.container)}>
      <Slider {...settings}>
        {city.images.map((img, key) => (
          <img
            key={key}
            src={urlImages + 'sto/' + img}
            className={styles.img}
          />
        ))}
      </Slider>
    </div>
  );
};

export default GalleryModal;
