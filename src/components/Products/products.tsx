import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './products.module.css';

import products from '../../data/products.json';
import { urlProdctsImages } from '../../utils/constants';

const Products: FC = () => {
    return (
    
      <section className="section max-w-[1280px] mx-auto">
        <div className="products mb-20 pt-0 px-4 md:px-5">
          <div className="mb-6 md:mb-12 p-4 md:p-0 lg:pb-5">
            
            <h2 className={ styles['products__title'] + ' text-4xl lg:text-5xl font-bold pb-4' }>
              Услуги
            </h2>
            
            <div className="products__subtitle flex">
              <p>
                Мы даём гарантию 1 год на все услуги и запчасти! <a className="lg pl-1 text-[#F47D32]" href="https://fitauto.ru/guarantee/" title="Гарантия">Подробнее</a>
              </p>              
            </div>            
            
            <ul className={ styles['product-list'] + ' grid' }>
              { 
                products.map(product => (

                      <li key={uuid()} className={ styles['product-list-item'] + ' relative flex flex-col justify-start' }>
                        <div className={ styles['product-list-item__image'] + ' flex items-center' }>
                          <img src={ urlProdctsImages + product.image } alt={ product.name }/>
                        </div>
                        
                        <p className={ styles['product-list-item__title'] }>
                          { product.name  }
                        </p>
                        
                        { 
                          product.count > 0 &&
                            <p className={ styles['product-list-item__count'] }>
                              { product.count } услуг
                            </p>
                        }
                        {
                          product.count === 0 &&
                            <div className="grow"></div>                    
                        }
                        
                        <a className="absolute inset-0" 
                          href={ product.link }
                          title={ product.name }>
                        </a>
                      </li>

                ))
              }
            </ul>

          </div>
        </div>
      </section>

    );
}

export default Products