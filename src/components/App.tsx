import '../tailwind.css';
import '../styles.css';

import React, {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ruLocale from 'date-fns/locale/ru';
import SelectOffice from './form-record/select-office';
import Modal from './modal';
import Footer from './footer';
import Promo from './promo/promo';
import { Location, Promotion, typeCity, typeSto } from '../utils/types';
import FormRecord from './form-record/form-record';
import Timer from './old/timer';
import Pluses from './pluses';
import OtherPromo from './other-promo';
import OldModals from './old/old-modals';
import DescriptionPromo from './promo/description-promo';
import { Route, Routes, useLocation } from 'react-router';
import promoServices from '../data/services.json';
import cities from '../data/cities.json';
import ItemPromo from './promo/item-promo';
import Office from './form-record/office';
import FooterContacts from './footer-contacts/footer-contacts';
import PromoAndForm from './promo/promo-and-form/promo-and-form';
import LogotipsAuto from './logotips-auto/logotips-auto';

function App() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isShowModalSelectOffice, setisShowModalSelectOffice] = useState(false);
  const [isShowModalFormRecord, setisShowModalFormRecord] = useState(false);
  const [isShowModalAddres, setisShowModalAddress] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<typeSto>();
  const [selectedCity, setSelectCity] = useState<typeCity>();
  const [showPopupSelectCity, setshowPopupSelectCity] =
    useState<boolean>(false);
  const location = useLocation();
  const promo: Promotion =
    promoServices.find((p) => '/' + p.slug === location.pathname) ||
    promoServices[0];
  document.title = promo.name;
  const city: Location =
    cities.find((p) => window.location.href.includes(p.slug)) || cities[1];
  return (
    <>
      <div>
        <div id="__layout">
          <div
            id="scroll-container"
            className="font-fact flex flex-col h-screen w-full overflow-x-hidden"
          >
            <div className="main-page flex-grow">
              <Promo
                sectionRef={sectionRef}
                selectedCity={selectedCity}
                setSelectCity={setSelectCity}
                showPopupSelectCity={showPopupSelectCity}
                setShowPopupOfficeAddress={setisShowModalAddress}
                setshowPopupSelectCity={setshowPopupSelectCity}
                promo={promo}
                city={city}
              />
              <FormRecord promo={promo} isIncludes={false} city={city} />
              <LogotipsAuto />
              {/* <DescriptionPromo promo={promo} city={city} /> */}
              <PromoAndForm promo={promo} city={city} />
              {/* <Timer /> */}
              <Pluses />
              {/* <OtherPromo>
                {promoServices
                  .filter((p) => p.slug !== promo.slug)
                  .map((pr) => (
                    <ItemPromo promo={pr} />
                  ))}
              </OtherPromo> */}
              {/* <OldModals /> */}
              <FooterContacts city={city} />
              <Footer
                setShowPopupOfficeAddress={setisShowModalAddress}
                city={city}
              />
            </div>
          </div>
        </div>
      </div>
      {isShowModalSelectOffice && (
        <Modal
          onClose={() => {
            setisShowModalSelectOffice(false);
          }}
        >
          <SelectOffice
            selectedOffice={selectedOffice}
            setSelectedOffice={setSelectedOffice}
            onClose={() => {
              setisShowModalSelectOffice(false);
            }}
          />
        </Modal>
      )}
      {isShowModalAddres && (
        <Modal
          onClose={() => {
            setisShowModalAddress(false);
          }}
        >
          <Office city={city} />
        </Modal>
      )}
      {isShowModalFormRecord && (
        <Modal
          isLayout={false}
          onClose={() => setisShowModalFormRecord(false)}
          priority={999}
        >
          <FormRecord
            isIncludes={false}
            isModal={true}
            promo={promo}
            city={city}
            isServices={true}
            title="Оставьте заявку на звонок"
            subTitle="И получите точный расчет стоимости ремонта и запчастей"
          />
        </Modal>
      )}
    </>
  );
}

export default App;
