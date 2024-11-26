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
        <div className={styles['promo-default__subtitle'] + ' uppercase'}>
          <div className="promo-default__title-line">
            <strong>Мы знаем как продлить службу</strong>{' '}
          </div>
          <div className="promo-default__title-line">
            <strong>вашего авто на долгие годы.</strong>
          </div>
        </div>
        <div className={styles['promo-default__title'] + ' uppercase'}>
          <div className={styles['promo-default__title-line']}>Диагностика</div>
          <div
            className="promo-default__title-line"
            style={{ textDecoration: 'underline' }}
          >
            за 0 ₽
          </div>
        </div>
        <button
          className={styles['promo-default__button']}
          onClick={onClickButtonOrder}
        >
          ЗАПИСАТЬСЯ
        </button>
        <div className={styles['promo-default__description'] + ' uppercase'}>
          <div className="promo-default__title-line">Скидка на работы</div>
          <div className="promo-default__title-line">
            по рекомендации <strong>-20%</strong>
          </div>
        </div>
      </div>
      <div className={styles['promo-default__background']}></div>
      <div className={styles['promo-default__wheel']}></div>
    </section>
  );
};

export default PromoDefault;
