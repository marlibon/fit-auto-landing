import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsSlider } from 'src/utils/constants';

interface Props {
  children: React.ReactNode;
}
const OtherPromo: React.FC<Props> = ({ children }) => {
  return (
    <section className="section max-w-[1280px] mx-auto">
      <div className="actions mb-20 pt-0 px-4 md:px-5">
        <div className="mb-6 md:mb-12 p-4 md:p-0 lg:pb-5">
          <h2 className="text-4xl lg:text-5xl font-bold pb-4">
            Другие акции{' '}
            <span className="text-[#F47D32]">FIT&nbsp;SERVICE</span>
          </h2>
        </div>
        <div className="slider-container">
          <Slider {...settingsSlider}>{children}</Slider>
        </div>
        <div className="flex flex-col md:grid gap-6 md:gap-8 md:auto-rows-[minmax(auto,392px)] md:grid-flow-dense md:grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] mb-8"></div>
      </div>
    </section>
  );
};

export default OtherPromo;
