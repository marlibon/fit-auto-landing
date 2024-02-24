import React, { FC } from 'react';

import styles from './products.module.css';

import products from '../../data/products.json';
import { urlProductsImages } from '../../utils/constants';

const Products: FC = () => {
  return (
    <section className="section max-w-[1280px] mx-auto lg:mb-24">
      <div className="products mb-20 pt-0 px-4 md:px-5">
        <div className="mb-6 md:mb-12 p-4 md:p-0 lg:pb-5">
          <h2
            className={
              styles['products__title'] + ' text-4xl lg:text-5xl font-bold pb-4'
            }
          >
            Услуги
          </h2>

          <div className="products__subtitle flex">
            <p>
              Мы даём гарантию 1 год на все услуги и запчасти!{' '}
              <span className="lg pl-1 text-[#F47D32]" title="Гарантия">
                Подробнее
              </span>
            </p>
          </div>

          <ul className={styles['product-list'] + ' grid'}>
            {products.map((product, index) => (
              <li
                key={index}
                className={
                  styles['product-list-item'] +
                  ' relative flex flex-col justify-start'
                }
              >
                <div
                  className={
                    styles['product-list-item__image'] + ' flex items-center'
                  }
                >
                  <img
                    src={urlProductsImages + product.image}
                    alt={product.name}
                  />
                </div>

                <p className={styles['product-list-item__title']}>
                  {product.name}
                </p>

                {product.count > 0 && (
                  <p className={styles['product-list-item__count']}>
                    {product.count} услуг
                  </p>
                )}
                {product.count === 0 && <div className="grow"></div>}

                <span className="absolute inset-0" title={product.name}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
