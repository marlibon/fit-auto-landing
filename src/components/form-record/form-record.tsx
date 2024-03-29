import React, { useState } from 'react';
import clsx from 'clsx';
import Modal from '../modal';
import sendOrder from '../../../src/utils/sendOrder';
import { Location, Promotion } from '../../../src/utils/types';
import SelectOptions from './select-options';
import Office from './office';
import Preloader from '../preloader/Preloader';
interface Props {
  isIncludes: boolean;
  isModal?: boolean;
  promo: Promotion;
  city: Location;
  title?: string;
  subTitle?: string;
  text?: string;
  isServices?: boolean;
  onClose?: () => void;
  onShowPopupFailed: () => void;
  onShowPopupOk: () => void;
  placeholderServices?: string;
}
const FormRecord: React.FC<Props> = ({
  isIncludes,
  isModal,
  promo,
  city,
  title,
  subTitle,
  text,
  isServices,
  onClose,
  onShowPopupFailed,
  onShowPopupOk,
  placeholderServices
}) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [serviceText, setServiceText] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = () => {
    setLoading(true);

    sendOrder(
      `Имя: ${name};%0AТелефон ${tel};%0AПромо: ${promo.name};${selected.length ? '%0AУточнение: %0A' + selected.join(';%0A') : ''};${serviceText ? '%0AЖелаемые услуги: %0A' + serviceText : ''};${'%0A%0AГород:' + city.name}`,
      () => {
        onShowPopupOk();
        setLoading(false);
        onClose?.();
      },
      () => {
        onShowPopupFailed();
        setLoading(false);
        onClose?.();
      },
      city.slug
    );
    setName('');
    setTel('');
    setServiceText('');
    setSelected([]);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <div
        className={`w-full ${isModal ? ' ' : 'md:w-[700px]'} bg-white mx-auto shadow rounded-2xl border-t-2 border-[#F47D32] p-8 ${isIncludes ? 'isIncludes ' : 'relative top-[-20px] md:top-[-150px] '}`}
        style={isModal ? { top: '0' } : {}}
      >
        <div className="flex justify-between items-center">
          <h5
            className={clsx('text-4xl font-bold mb-6 md:text-2xl titleModal')}
          >
            {title ? title : 'Оставьте заявку на звонок'}
          </h5>
        </div>
        {subTitle && (
          <div className="flex justify-between items-center">
            <h5 className={clsx('text-2xl mb-4 subtitleModal')}>{subTitle}</h5>
          </div>
        )}
        {text && (
          <div className="flex justify-between items-center">
            <h5 className="text-1xl">{text}</h5>
          </div>
        )}
        <div>
          <form className="bg-white w-full flex flex-col">
            <div className="flex flex-col items-center mb-4 flex-wrap gap-4 md:flex-row" />
            <div className="flex flex-col items-center mb-4 md:flex-row">
              <div className="w-full flex justify-between items-center md:w-1/2 md:ml-2">
                <div className="form-item w-1/2 mr-2 relative hidden">
                  <input
                    id="timepicker"
                    type="text"
                    placeholder="Дата"
                    readOnly={true}
                    className="custom-scroll text-[#ababab] border border-transparent h-[58px] rounded-lg bg-[#fafafa] appearance-none w-full p-4 leading-tight cursor-pointer focus:outline-none focus:bg-orange-50 focus:border-gray-200"
                  />

                  <span className="pointer-events-none icon-calendar w-[24px] h-[24px] absolute top-[16px] right-[16px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mb-4 md:flex-row">
              <div className="form-item w-full md:w-1/2 mb-4 md:mb-0 md:mr-2">
                <input
                  maxLength={70}
                  type="text"
                  placeholder="Имя"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="rounded-lg border border-transparent bg-[#fafafa] appearance-none w-full p-4 text-[#ababab] leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-50 focus:border-gray-200"
                />
              </div>
              <div className="form-item w-full md:w-1/2 md:ml-2">
                <div className="relative">
                  <input
                    id="tel"
                    type="tel"
                    placeholder="Номер телефона"
                    maxLength={18}
                    minLength={7}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const cleanedValue = inputValue.replace(/[^0-9+-]/g, '');
                      setTel(cleanedValue);
                    }}
                    value={tel}
                    className="rounded-lg text-[#ababab] focus:text-[#000] border border-transparent bg-[#fafafa] appearance-none w-full p-4 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-50 focus:border-gray-200"
                  />
                </div>
              </div>
            </div>
            {isServices && (
              <div className="flex flex-col items-center mb-4">
                <div className="w-full relative">
                  <input
                    id="services"
                    onChange={(e) => setServiceText(e.target.value)}
                    type="text"
                    placeholder={
                      placeholderServices ?? 'Напишите желаемые услуги'
                    }
                    className="text-base text-[#ababab] w-full truncate cursor-pointer border border-transparent h-[58px] rounded-lg bg-[#fafafa] p-4 leading-tight focus:outline-none focus:bg-orange-50 focus:border-gray-200"
                  />{' '}
                </div>
              </div>
            )}
            <div className="flex flex-col items-center pt-4 border-t border-gray-300 md:flex-row">
              <p className="text-sm font-normal text-gray-400 pr-6 order-2 md:order-1">
                Нажимая на кнопку Отправить, вы принимаете{' '}
                <a
                  href="https://fitauto.ru/new/assets/files/politika-konfidencialnosti-ooo.pdf"
                  target="_blank"
                  rel="noreferrer"
                  title="Политика конфиденциальности ООО «ФИТ АВТОСЕРВИС»"
                  className="underline"
                >
                  политику обработки персональных данных
                </a>{' '}
                2024 © ООО «ФИТ Автосервис».
              </p>
              <button
                disabled={!tel || !name || tel.length < 9}
                onClick={handleSubmit}
                className="h-[58px] w-full rounded-lg bg-[#F47D32] text-white font-medium md:w-[200px] mb-4 md:mb-0 order-1 md:order-2 button"
              >
                Отправить
              </button>
            </div>
          </form>
          {/* <div className="modal-backdrop flex justify-center p-4 overflow-hidden items-center hidden">
            <div className="w-full md:w-[70%] bg-white mx-auto shadow rounded-2xl border-t-2 border-[#F47D32] p-4 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <ul className="address-list custom-scroll overflow-y-auto max-h-[600px]">
                    <li className="address-list__item rounded-lg item p-2">
                      <p className="text-lg font-medium pb-4">
                        Уфа, Сипайловская, 7
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-default bg-[#F47D32] h-[54px] w-full text-white font-medium rounded-lg mr-0 lg:mr-6 mb-2 lg:mb-0 hover:bg-orange-600"
                    style={{ width: '100%' }}
                  >
                    Выбрать
                  </button>
                </div>
              </div>{' '}
              <span className="btn-close-map w-[40px] h-[40px] ml-2 mt-0.5 cursor-pointer absolute top-[20px] right-[20px]" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FormRecord;
