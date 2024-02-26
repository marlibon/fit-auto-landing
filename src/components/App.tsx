import '../tailwind.css';
import '../styles.css';

import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import SelectOffice from './form-record/select-office';
import Modal from './modal';
import Footer from './footer/footer';
import { Location, Promotion, typeCity, typeSto } from '../utils/types';
import FormRecord from './form-record/form-record';
import Pluses from './pluses';
import promoServices from '../data/services.json';
import cities from '../data/cities.json';
import Office from './form-record/office';
import Products from './Products/products';
import PromoDefault from './Promo-default/promo-default';
import FooterContacts from './footer-contacts/footer-contacts';
import PromoAndForm from './promo/promo-and-form/promo-and-form';
import LogotipsAuto from './logotips-auto/logotips-auto';
import GalleryModal from './gallery/gallery-modal';
import Gallery from './gallery/gallery';
import Header from './header/header';

function App() {
  const [isShowModalSelectOffice, setisShowModalSelectOffice] = useState(false);
  const [isShowModalFormRecord, setisShowModalFormRecord] = useState(false);
  const [isShowModalFormQuestion, setisShowModalFormQuestion] = useState(false);
  const [isShowModalGallery, setisShowModalGallery] = useState(false);
  const [isShowModalAddres, setisShowModalAddress] = useState(false);
  const [isShowPopupOk, setIsShowPopupOk] = useState(false);
  const [isShowPopupFailed, setIsShowPopupFailed] = useState(false);
  const [indexSlideGallery, setIndexSlideGallery] = useState<number>();
  const [selectedOffice, setSelectedOffice] = useState<typeSto>();
  const [city, updateCity] = useState<Location>(
    cities.find((c) => window.location.href.includes(c.slug)) || cities[1]
  );
  const promo: Promotion = promoServices[0];
  document.title = promo.name;

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    if (params.get('utm_content') != null) {
      //@ts-ignore
      const matchResult = params.get('utm_content').match(/\d+/);
      if (matchResult != null && Number(matchResult[0])) {
        updateCity({
          ...city,
          tel: city.phoneNumbers[Number(matchResult[0])] || city.tel
        });
      }
    }
  }, []);

  const openModalGallery = (index: number) => {
    setisShowModalGallery(true);
    setIndexSlideGallery(index);
  };

  return (
    <>
      <div>
        <div id="__layout">
          <div
            id="scroll-container"
            className="font-fact flex flex-col h-screen w-full overflow-x-hidden"
          >
            <div className="main-page flex-grow">
              <Header
                setShowPopupOfficeAddress={setisShowModalAddress}
                city={city}
              />

              <PromoDefault
                city={city}
                onClickButtonOrder={() => {
                  setisShowModalFormRecord(true);
                }}
              />
              <Products
                onClickButtonOrder={() => {
                  setisShowModalFormRecord(true);
                }}
              />
              <LogotipsAuto />
              <Pluses />
              <PromoAndForm
                onShowPopupOk={() => {
                  setIsShowPopupOk(true);
                }}
                onShowPopupFailed={() => {
                  setIsShowPopupFailed(true);
                }}
                promo={promo}
                city={city}
              />
              <Gallery onClick={openModalGallery} city={city} />
              <FooterContacts city={city} />
              <Footer
                setShowPopupOfficeAddress={setisShowModalAddress}
                setisShowModalFormQuestion={setisShowModalFormQuestion}
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
          priority={10}
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
            onClose={() => setisShowModalFormRecord(false)}
            onShowPopupOk={() => {
              setIsShowPopupOk(true);
            }}
            onShowPopupFailed={() => {
              setIsShowPopupFailed(true);
            }}
          />
        </Modal>
      )}
      {isShowModalGallery && (
        <Modal
          isLayout={true}
          onClose={() => setisShowModalGallery(false)}
          priority={20}
          isFull
        >
          <GalleryModal indexSlide={indexSlideGallery} city={city} />
        </Modal>
      )}
      {isShowPopupOk && (
        <Modal
          onClose={() => {
            setIsShowPopupOk(false);
          }}
        >
          <h5 className="text-4xl font-bold mb-6 md:text-2xl titleModal">
            Спасибо за заявку!
          </h5>
          <div className="flex justify-between items-center">
            <h5 className="text-1xl subtitleModal">
              В ближайшее время мы вам перезвоним
            </h5>
          </div>
        </Modal>
      )}
      {isShowPopupFailed && (
        <Modal
          onClose={() => {
            setIsShowPopupFailed(false);
          }}
        >
          <h5 className="text-4xl font-bold mb-6 md:text-2xl titleModal">
            Произошла какая то ошибка. Мы решаем эту проблему.
          </h5>
          <div className="flex justify-between items-center">
            <h5 className="text-1xl subtitleModal">
              Пожалуйста, свяжитесь с нами по телефону {city.tel}
            </h5>
          </div>
        </Modal>
      )}
      {isShowModalFormQuestion && (
        <Modal
          isLayout={false}
          onClose={() => setisShowModalFormQuestion(false)}
          priority={999}
        >
          <FormRecord
            isIncludes={false}
            isModal={true}
            promo={promo}
            city={city}
            isServices={true}
            placeholderServices={'Напишите ваш вопрос'}
            title="Напишите ваш вопрос "
            subTitle="И оставьте контакты, по которым можно связаться для ответа"
            onClose={() => setisShowModalFormQuestion(false)}
            onShowPopupOk={() => {
              setIsShowPopupOk(true);
            }}
            onShowPopupFailed={() => {
              setIsShowPopupFailed(true);
            }}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
