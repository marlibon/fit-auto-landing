import React from 'react';
import { Location } from 'src/utils/types';
import { MapForAddress } from '../form-record/maps/map-for-address';
import styles from './footer-contacts.module.css';

// interface Props {
//   city: Location;
// }
const FooterContacts = ({ city }) => {
  return (
    <section className="section <!--max-w-[1280px]--> mx-auto">
      <div className="actions pt-0 px-4 md:px-5">
        <div className="mb-6 md:mb-12 p-4 md:p-0 lg:pb-5">
          <h2 className="text-4xl lg:text-5xl font-bold pb-4">
            Наши
            <span className="text-[#F47D32]">&nbsp;контакты</span>
          </h2>
        </div>
        <div className="md:flex">
          {/* <div className={styles.block}>
            <h2 className={styles.title}>Контакты</h2>
            <p className={styles.subtitle}>
              Ваш текст о контактах здесь. Это описание ваших контактов или
              адрес компании.
            </p>
          </div> */}
          <div className={styles.map}>
            <div className={styles.mapsContent}>
              <MapForAddress
                height={`${window.innerHeight * 0.4}px`}
                city={city}
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:grid gap-6 md:gap-8 md:auto-rows-[minmax(auto,392px)] md:grid-flow-dense md:grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] mb-8">
          контент
        </div> */}
      </div>
    </section>
  );
};

export default FooterContacts;
