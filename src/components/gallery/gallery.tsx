import React from 'react';
import clsx from 'clsx';
import Slider, { LazyLoadTypes } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsSliderGallery, urlImages } from '../../utils/constants';
import styles from './gallery.module.css';
import { Location } from '../../utils/types';

interface Props {
  city: Location;
  onClick: (index: number) => void;
}

const Gallery: React.FC<Props> = ({ city, onClick }) => {
  return (
    <section className="section mb-16 max-w-[1280px] mx-auto lg:mb-24">
      {/* section  about lg:rounded-3xl lg:m-5 lg:mb-24 */}
      <div className="actions pt-0 px-4 md:px-5">
        <div className="mb-6 md:mb-12 p-4 md:p-0 lg:pb-5">
          <h2 className="text-4xl lg:text-5xl font-bold pb-4">
            Фото<span className="text-[#F47D32]">&nbsp;галерея</span>
          </h2>
        </div>
        <div className={clsx('slider-container', styles.container)}>
          <Slider {...settingsSliderGallery}>
            {city.images.map((img, index) => (
              <img
                key={index}
                src={urlImages + 'sto/small/' + img}
                className={clsx(
                  styles.img,
                  index === 0 && styles.first,
                  'cursor-pointer'
                )}
                onClick={() => onClick(index)}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
