import React, { FC } from 'react';
import clsx from 'clsx';
import phoneIcon from '../../images/phone_icon.svg';
import logoOrange from '../../images/logo-orange.svg';
import { Location } from '../../utils/types';
import styles from './header.module.css';
import { cleanTelNumber } from '../../utils/utils';

interface Props {
  city: Location;
  setShowPopupOfficeAddress: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: FC<Props> = ({ city, setShowPopupOfficeAddress }) => {
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
            <img
              src={logoOrange}
              alt="Fitservice Logo"
              className={clsx('w-24 md:w-64 ', styles.headerLogo)}
            />
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
            </div>
            <a href={'tel:' + cleanTelNumber(city.tel)} className={styles.tel}>
              {city.tel}
            </a>
            <a
              href={'tel:' + cleanTelNumber(city.tel)}
              className={styles.iconTel}
            >
              <img src={phoneIcon} alt="" />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
