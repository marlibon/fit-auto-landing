import React, { FC } from 'react';

import styles from './promo-default.module.css';
import { Location, Promotion } from '../../utils/types';
import Header from '../header/header';

interface IPromoDefault {
  city: Location;
  onClickButtonOrder: () => void;
}

const PromoDefault: FC<IPromoDefault> = ({ city, onClickButtonOrder }) => {
  return (
    <section className={styles['promo-default'] + ' w-full overflow-hidden'}>
      <div className={styles['promo-default__title-button']}>
        <div className={styles['promo-default__title'] + ' uppercase'}>
          <div className="promo-default__title-line">Проверьте</div>
          <div className="promo-default__title-line">авто за 0 ₽</div>
        </div>
        <button
          className={styles['promo-default__button']}
          onClick={onClickButtonOrder}
        >
          ЗАПИСАТЬСЯ
        </button>
      </div>
      <div className={styles['promo-default__background']}></div>
      <div className={styles['promo-default__wheel']}></div>
    </section>
  );
};

export default PromoDefault;
