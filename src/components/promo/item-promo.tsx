import React from 'react';
import other1 from '../images/other1.jpeg';
import other2 from '../images/other2.png';
import other3 from '../images/other3.jpeg';
import { Promotion } from '../../../src/utils/types';
import { Link, useNavigate } from 'react-router-dom';
import { urlImages } from '../../../src/utils/constants';
interface Props {
  promo: Promotion;
}

const ItemPromo: React.FC<Props> = ({ promo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (promo.slug) {
      setTimeout(() => {
        const head = document.querySelector('.main-page');
        if (head) {
          head.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 0);
      navigate(promo.slug === '/' ? '/' : `/${promo.slug}`, {
        replace: false
      });
    }
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="rounded-2xl p-6 md:p-9 bg-cover flex flex-col relative md:h-auto cursor-pointer h-[480px] md:row-[auto_/_span_2] itemPromo"
      >
        <img
          src={other3}
          alt=""
          className="absolute z-0 inset-0 w-full h-full object-cover object-center rounded-2xl"
        />{' '}
        <img
          src={urlImages + promo.mainImagePromo}
          alt="Проверьте авто за 0 ₽"
          className="absolute z-[1] max-h-80 max-w-80 -top-10 md:top-9 -left-0 md:left-1/2 md:-translate-x-1/2"
        />{' '}
        <div className="flex flex-col gap-6 items-start h-full relative z-[2] md:justify-end justify-end">
          <div className="flex items-center flex-wrap gap-x-6 gap-y-2 hidden">
            <span className="text-xs md:text-sm font-medium leading-[17px] md:leading-[14px] whitespace-nowrap text-white bg-white/20 rounded py-1 px-2">
              Бесплатные
            </span>{' '}
            <span className="text-xs md:text-sm font-normal leading-[16px] md:leading-[17px] text-white/50">
              Акция действует до 29.02.2024 г.
            </span>
          </div>{' '}
          <div className="flex flex-col gap-3">
            <h5
              className="action-list__action-name text-2xl md:text-4xl leading-none font-bold text-white"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              {promo.name}
            </h5>{' '}
            <p
              className="text-base text-white font-normal"
              style={{ color: 'rgb(0, 0, 0)' }}
            />
            <p>
              <br />
            </p>
            <p />
          </div>{' '}
          <button
            type="button"
            className="text-base leading-[22px] font-medium text-[#F47D32]"
          >
            Подробнее ›
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemPromo;
