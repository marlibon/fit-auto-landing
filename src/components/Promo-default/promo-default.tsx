import React, { FC } from 'react';

import styles from './promo-default.module.css';

interface IPromoDefault {
  sectionRef?: React.RefObject<HTMLDivElement>
}

const PromoDefault:FC<IPromoDefault> = ({ sectionRef }) => {
  return (
    <section className={ styles['promo-default'] + ' w-full' }>
      
      <div className={ styles['promo-default__title-button'] }>
        <div className={ styles['promo-default__title'] + ' uppercase'}>
          <div className='promo-default__title-line'>
            Проверьте
          </div>
          <div className='promo-default__title-line'>
            авто за 0 ₽
          </div>
        </div>
        <button className={ styles['promo-default__button'] }
                onClick={() =>
                  sectionRef  &&
                  sectionRef.current &&
                  sectionRef.current.scrollIntoView({
                    behavior: 'smooth'
                  })
                }>
          ЗАПИСАТЬСЯ
        </button>
      </div>
      <div className={ styles['promo-default__background'] }></div>
      <div className={ styles['promo-default__wheel'] }></div>

    </section>
    )
}

export default PromoDefault