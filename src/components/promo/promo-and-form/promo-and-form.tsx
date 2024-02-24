import React from 'react';
import clsx from 'clsx';
import styles from './promo-and-form.module.css';
import FormRecord from '../../form-record/form-record';
import { Promotion, Location } from '../../../utils/types';
import { getEndOfNextWeek } from '../../../utils/utils';

interface Props {
  promo: Promotion;
  city: Location;
}

const PromoAndForm: React.FC<Props> = ({ promo, city }) => {
  return (
    <section className="section max-w-[1280px] mx-auto px-6 mb-4">
      <div className={styles['promo-list-main']}>
        <div className={styles['promo-list-main-inner']}>
          <h1
            className={clsx(
              'text-4xl font-bold font-fact lg:text-5xl ',
              styles['promo-list-main-header']
            )}
          >
            Проверьте авто за&nbsp;0&nbsp;₽
          </h1>
          <FormRecord
            promo={promo}
            city={city}
            isIncludes={true}
            title="Запишитесь по акции"
            text={'Действует до ' + getEndOfNextWeek()}
          />
        </div>
      </div>
    </section>
  );
};

export default PromoAndForm;
