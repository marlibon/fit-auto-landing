import React, { Dispatch, SetStateAction, useState } from 'react';
import logowhite from '../../images/logo-white.svg';
import cityImg from '../../images/city.svg';
import SelectCity from '../old/select-city';
import { Location, Promotion, typeCity } from '../../../src/utils/types';
import { urlImages } from '../../../src/utils/constants';
import Header from '../header/header';

interface props {
  sectionRef: React.RefObject<HTMLDivElement>;
  setSelectCity: Dispatch<SetStateAction<typeCity | undefined>>;
  selectedCity: typeCity | undefined;
  setshowPopupSelectCity: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPopupOfficeAddress: React.Dispatch<React.SetStateAction<boolean>>;
  showPopupSelectCity: boolean;
  promo: Promotion;
  city: Location;
}
const Promo = ({
  sectionRef,
  setSelectCity,
  selectedCity,
  showPopupSelectCity,
  setshowPopupSelectCity,
  setShowPopupOfficeAddress,
  promo,
  city
}: props) => {
  return (
    <section
      className="section lg:mb-24"
      style={{
        backgroundImage: `url(${urlImages}${promo.backgroundImagePromo})`,
        backgroundSize: '100% 100%'
      }}
    >
      <div className="max-w-[1280px] mx-auto h-full pb-9 lg:pb-0 px-6">
        <div className="flex flex-col md:flex-row justify-between h-full md:py-40 relative">
          <div className="lg:w-2/3 flex flex-col justify-center order-2 md:order-1 text-center md:text-left lg:text-left">
            <div className="mb-8 hidden">
              <span
                className="card__action rounded text-sm text-white font-normal py-1 px-2 mr-6"
                style={{ background: 'hsla(0,0%,100%,.2)' }}
              >
                Бесплатные
              </span>{' '}
              <span className="text-xs text-slate-200 font-normal">
                До 22.10.2023 г.
              </span>
            </div>
            <div className="mb-8">
              <h1
                className="font-bold text-4xl lg:text-7xl text-white font-medium mb-3"
                style={{ color: promo.colorTitle }}
              >
                {promo.name}
              </h1>
              <p
                className="font-bold text-base lg:text-xl text-white font-normal"
                style={{ color: 'rgb(255, 255, 255)' }}
              ></p>
              <p style={{ color: promo.colorTitle, fontSize: 20 }}>
                {promo.subtitle}
              </p>
              <p />
            </div>
            <div className="">
              <button
                onClick={() =>
                  sectionRef.current &&
                  sectionRef.current.scrollIntoView({
                    behavior: 'smooth'
                  })
                }
                type="button"
                className="btn btn-default bg-[#F47D32] h-[54px] w-full lg:w-[158px] text-white font-medium rounded-lg mr-0 lg:mr-6 mb-2 lg:mb-0 hover:bg-orange-600"
              >
                Записаться
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 order-1 md:order-2 z-10">
            <img
              src={`${urlImages + promo.mainImagePromo}`}
              alt=" Бесплатная диагностика ходовой части"
              className="w-full mx-auto mb-4 lg:mb-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
