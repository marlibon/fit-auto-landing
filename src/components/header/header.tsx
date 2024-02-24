import React, { FC } from 'react';
import clsx from 'clsx';
import phoneIcon from '../../images/phone_icon.svg';
import logoOrange from '../../images/logo-orange.svg';
import cityImg from '../../images/city.svg';
import { Location, Promotion } from '../../utils/types';
import styles from './header.module.css';

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
  promo: Promotion;
  city: Location;
  setShowPopupOfficeAddress: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: FC<Props> = ({ promo, city, setShowPopupOfficeAddress }) => {
  return (
    <section className="section mb-4 about lg:rounded-3xl lg:m-5 lg:mb-24">
      <nav
        id="navbar"
        className="relative z-10 w-full mb-0 lg:mb-12 light-theme"
      >
        <div className="navbar__inner max-w-[1280px] xs:w-full mx-auto py-4 px-4 relative">
          <div
            className={clsx(
              'flex justify-between items-center',
              styles.headerMobile
            )}
          >
            <a href="/" className="nuxt-link-active">
              <img
                src={logoOrange}
                alt="Fitservice Logo"
                className={clsx('w-24 md:w-64 ', styles.headerLogo)}
              />
            </a>
            <div className={styles.telAndButton}>
              <div
                className="flex justify-end items-center relative"
                onClick={() => setShowPopupOfficeAddress(true)}
              >
                <span className="pointer-events-none icon-map-form w-[24px] h-[24px]" />
                <span
                  className={clsx('pl-2 cursor-pointer ', styles.cityAddress)}
                >
                  {city.address}
                </span>
              </div>
              {/* <button
                type="button"
                className={clsx(
                  'btn btn-default bg-[#F47D32] h-[54px] w-full lg:w-[158px] text-white font-medium rounded-lg mr-0 lg:mr-6 mb-2 lg:mb-0 hover:bg-orange-600',
                  styles.button
                )}
              >
                Записаться
              </button> */}
            </div>
            <a href={'tel:' + city.tel} className={styles.tel}>
              {city.tel}
            </a>
            <div className={styles.iconTel}>
              <img src={phoneIcon} alt="" />
            </div>

            {/* <div className="flex justify-end items-center relative hidden">
            <img src={cityImg} alt="" className="w-4 h-4" />{' '}
            <span
              className="pl-2 cursor-pointer text-[#F47D32] "
              onClick={() => {
                setshowPopupSelectCity(true);
              }}
            >
              {selectedCity?.name ?? 'Выберите город'}
            </span>
          </div> */}
          </div>
          {/* {showPopupSelectCity && (
          <SelectCity
            setSelectCity={setSelectCity}
            setshowPopupSelectCity={setshowPopupSelectCity}
          />
        )} */}
        </div>
      </nav>
    </section>
  );
};

export default Header;
