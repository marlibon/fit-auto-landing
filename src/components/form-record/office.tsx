import React, { Dispatch, SetStateAction, useState } from 'react';
import { Maps } from './maps/maps';
import { Location, typeCity, typeSto } from '../../../src/utils/types';
import regions from './regions.json';
import all from './all.json';
import { MapForAddress } from './maps/map-for-address';
import { urlImages } from '../../../src/utils/constants';
import Slider from 'react-slick';

const idCity = '629148fd-b3e7-11e7-ae44-005056991fe0';

interface IProps {
  city: Location;
}
const Office = ({ city }: IProps) => {
  const settingsSlider = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true
  };

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-x-hidden overflow-y-auto"
        style={{ height: window.innerHeight * 0.75 }}
      >
        <div>
          <ul className="address-list custom-scroll">
            <h2 className="text-[#F47D32] text-lg font-medium uppercase mb-6">
              Мы находимся по адресу:
            </h2>
            <li
              className="address-list__item rounded-lg item p-2 cursor-pointer"
              style={{ textDecoration: 'underline' }}
            >
              <p className="text-lg font-medium pb-4">{city.address}</p>
            </li>
            <div className="description__info text-base lg:text-lg font-normal text-[#575757] mb-12">
              <p>У нас:</p>
              <ul>
                <li>Высококлассные специалисты.</li>
                <li>Гарантия на работы и запчасти</li>
                <li>Наблюдение за ходом ремонта из удобной комнаты</li>
                <li>Бесплатные кофе/чай в зоне ожидания</li>
              </ul>
              {/* <div className="slider-container">
                <Slider {...settingsSlider}>
                  {city.images.map((img) => (
                    <img src={`${urlImages + img}`} alt="" width="100%" />
                  ))}
                </Slider>
              </div> */}
            </div>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="maps rounded-lg overflow-hidden">
            <div id="map-wrap">
              <MapForAddress city={city} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Office;
