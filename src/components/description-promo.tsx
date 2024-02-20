import React from 'react';
import imgAkcia from '../images/img-akcia.png';
import imgAkcia2 from '../images/img-akcia2.png';
import FormRecord from './form-record/form-record';
import { Promotion, Location } from 'src/utils/types';
import { urlImages } from 'src/utils/constants';
interface Props {
  promo: Promotion;
  city: Location;
}
const DescriptionPromo: React.FC<Props> = ({ promo, city }) => {
  return (
    <section className="section description bg-[#fafafa] rounded-3xl md:m-5 lg:mb-4 overflow-hidden relative lg:top-[-70px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row py-14">
          <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
            <div className="text-[#F47D32] text-lg font-medium uppercase mb-6">
              Описание акции
            </div>
            <div dangerouslySetInnerHTML={{ __html: promo.htmlCode }} />

            <div className="hidden">
              <button
                type="button"
                className="text-base font-medium text-[#F47D32] underline"
              >
                Подробные условия акции
              </button>
            </div>
            <FormRecord promo={promo} isIncludes={true} city={city} />
          </div>
          <div
            className="w-full lg:w-1/2 order-1 lg:order-2 relative h-[380px] lg:h-auto"
            style={{ height: 'auto' }}
          >
            <img
              src={urlImages + promo.promoImg1}
              alt=" Бесплатная диагностика ходовой части"
              className="description__img relative lg:absolute top-[50px] lg:top-[0px] left-[0px] lg:left-[80px] w-3/4 lg:w-[400px]"
            />{' '}
            <img
              src={urlImages + promo.promoImg2}
              alt=" Бесплатная диагностика ходовой части"
              className="description__img relative lg:absolute top-[-150px] lg:top-[200px] left-[94px] lg:left-[200px] w-3/4 md:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionPromo;
