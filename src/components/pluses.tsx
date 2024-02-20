import React from 'react';
import about1 from '../images/about-1.svg';
import about2 from '../images/about-2.svg';
import about3 from '../images/about-3.svg';

const Pluses = () => {
  return (
    <section className="section about bg-zinc-900 lg:rounded-3xl lg:m-5 lg:mb-24">
      <div className="max-w-[1280px] mx-auto py-12 lg:py-28 px-6">
        <h3 className="text-white text-4xl lg:text-5xl font-bold mb-16">
          Преимущества<b className="text-[#F47D32]"> FIT&nbsp;SERVICE</b>
        </h3>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-between items-start w-full lg:w-1/3 mr-0 lg:mr-6 mb-4 lg:mb-0 bg-stone-800 rounded-2xl p-9">
            <img src={about1} alt="" className="w-12 h-12 mb-4" />
            <p className="text-2xl font-medium text-white mb-4">
              Online наблюдение
            </p>
            <p className="text-base font-normal text-white mb-4">
              Ожидая в удобной клиентской зоне с бесплатным чаем/кофе, Вы можете
              наблюдать за ремонтом вашего авто
            </p>{' '}
            <a
              href="https://fitauto.ru/booking/"
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium text-[#F47D32] hidden"
            >
              Подробнее &gt;
            </a>
          </div>
          <div className="flex flex-col justify-between items-start w-full lg:w-1/3 mr-0 lg:mr-6 mb-4 lg:mb-0 bg-stone-800 rounded-2xl p-9">
            <img src={about2} alt="" className="w-12 h-12 mb-4" />
            <p className="text-2xl font-medium text-white mb-4">FIT BONUS</p>
            <p className="text-base font-normal text-white mb-4">
              Для наших клиентов действует бонусная программа. Повышенный кешбэк
              и привилегии.
            </p>{' '}
            <a
              href="https://bonus.fitauto.ru/"
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium text-[#F47D32] hidden"
            >
              Подробнее &gt;
            </a>
          </div>
          <div className="flex flex-col justify-between items-start w-full lg:w-1/3 bg-stone-800 rounded-2xl p-9">
            <img src={about3} alt="" className="w-12 h-12 mb-4" />
            <p className="text-2xl font-medium text-white mb-4">
              Гарантия качества
            </p>
            <p className="text-base font-normal text-white mb-4">
              Все работы осуществляются квалифицированными специалистами. Мы
              предоставляем гарантии на услуги и запчасти.
            </p>{' '}
            <a
              href="https://fitauto.ru/about/"
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium text-[#F47D32] hidden"
            >
              Подробнее &gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pluses;
