import React from 'react';
import logoFooter from '../images/logo-footer.svg';
import telegram2 from '../images/telegram2.0deae27.svg';
import viber from '../images/viber.c8c5409.svg';
import wsup from '../images/wsup.9f9fbd3.svg';
import telegram from '../images/telegram.e0c40e1.svg';
import tiktok from '../images/tik-tok.7721b78.svg';
import vk from '../images/vk.1b88caa.svg';
import ok from '../images/ok.67761cd.svg';
import { Location } from './../../src/utils/types';
interface Props {
  city: Location;
  setShowPopupOfficeAddress: React.Dispatch<React.SetStateAction<boolean>>;
}
const Footer: React.FC<Props> = ({ city, setShowPopupOfficeAddress }) => {
  return (
    <footer className="footer bg-[#F2F6F7]">
      <div className="footer__inner max-w-[1280px] w-full mx-auto py-4 lg:py-9 px-4">
        <div className="footer__top lg:border-b border-[rgba(#90979C, 0.2)] flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 mb-6">
          <div className="mb-9 lg:mb-0">
            <a href="/" className="nuxt-link-active">
              <img
                src={logoFooter}
                alt="Fitservice Logo"
                className="w-40 lg:w-36 logoBig"
              />
            </a>
          </div>
          <div className="w-auto mb-4 lg:mb-0">
            <ul className="flex flex-col lg:flex-row items-start lg:items-center">
              <li className="w-full text-lg lg:text-left lg:text-sm xl:text-lg font-medium text-[#586066] mb-4 lg:mb-0 min-w-[130px]">
                <p
                  onClick={() => setShowPopupOfficeAddress(true)}
                  className="cursor-pointer lg:px-4 py-2 bg-transparent text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline cityAddress "
                >
                  {city.address}
                </p>
              </li>
            </ul>
          </div>
          <div className="hidden">
            <ul className="flex items-center">
              <li className="mr-10 lg:mr-6">
                <a
                  href="https://www.youtube.com/channel/UCH_tSjkwIYaGJW4lGkZOuIA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAzMCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi43Mzc5IDEuMTQyMzVDMjguMDIyOSAxLjQ4ODI0IDI5LjAzNjEgMi41MDExOCAyOS4zODIxIDMuNzg1ODhDMzAuMDI0NiA2LjEzMjk0IDI5Ljk5OTkgMTEuMDI0NyAyOS45OTk5IDExLjAyNDdDMjkuOTk5OSAxMS4wMjQ3IDI5Ljk5OTkgMTUuODkxOCAyOS4zODIxIDE4LjIzODhDMjkuMDM2MSAxOS41MjM1IDI4LjAyMjkgMjAuNTM2NSAyNi43Mzc5IDIwLjg4MjRDMjQuMzkwMyAyMS41IDE0Ljk5OTkgMjEuNSAxNC45OTk5IDIxLjVDMTQuOTk5OSAyMS41IDUuNjM0MjQgMjEuNSAzLjI2MTkzIDIwLjg1NzZDMS45NzY5MyAyMC41MTE4IDAuOTYzNzUyIDE5LjQ5ODggMC42MTc3OSAxOC4yMTQxQzAgMTUuODkxOCAwIDExIDAgMTFDMCAxMSAwIDYuMTMyOTQgMC42MTc3OSAzLjc4NTg4QzAuOTYzNzUyIDIuNTAxMTggMi4wMDE2NCAxLjQ2MzUzIDMuMjYxOTMgMS4xMTc2NUM1LjYwOTUzIDAuNSAxNC45OTk5IDAuNSAxNC45OTk5IDAuNUMxNC45OTk5IDAuNSAyNC4zOTAzIDAuNSAyNi43Mzc5IDEuMTQyMzVaTTE5LjgxODYgMTEuMDAyM0wxMi4wMDk3IDE1LjQ5ODhWNi41MDU4NkwxOS44MTg2IDExLjAwMjNaIiBmaWxsPSIjQzRDQkQxIi8+Cjwvc3ZnPgo="
                    alt=""
                  />
                </a>
              </li>
              <li className="mr-10 lg:mr-6">
                <a
                  href="https://t.me/fitservice_official"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegram} alt="" />
                </a>
              </li>
              <li className="mr-10 lg:mr-6">
                <a
                  href="https://www.tiktok.com/@fitservice_official"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tiktok} alt="" />
                </a>
              </li>
              <li className="mr-10 lg:mr-6">
                <a
                  href="https://vk.com/fit_service"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={vk} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://ok.ru/group/54078179442879"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ok} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full lg:w-3/12 order-3 lg:order-1">
            <p className="text-xs text-[#90979C]">
              2024 © ООО «ФИТ Автосервис»
            </p>
          </div>
          <div className="w-full lg:w-3/6 order-2 lg:order-2 mb-6 lg:mb-0">
            <p className="text-xs text-[#90979C] mb-4">
              Все цены, указанные на сайте, приведены как справочная информация
              и не являются публичной офертой, определяемой положениями статьи
              437 Гражданского кодекса Российской Федерации и могут быть
              изменены в любое время без предупреждения.
            </p>{' '}
            <a
              href="https://fitauto.ru/new/assets/files/politika-konfidencialnosti-ooo.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-normal underline text-[#90979C]"
            >
              Политика обработки персональных данных
            </a>
          </div>
          <div className="w-full lg:w-3/12 order-1 lg:order-3 pb-6 lg:pb-0 mb-6 lg:mb-0 border-b lg:border-b-0 border-gray-200">
            <ul className="flex items-center justify-start ml-0 lg:ml-[90px]  hidden">
              <li className="mr-6">
                <a
                  href="https://chats.viber.com/fitservice/ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={viber} alt="" />
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="https://telegram.im/@FiTServiceK_bot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegram2} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=79059458308&text=%d0%94%d0%be%d0%b1%d1%80%d1%8b%d0%b9%20%d0%b4%d0%b5%d0%bd%d1%8c%21%20%d0%9c%d0%b5%d0%bd%d1%8f%20%d0%b8%d0%bd%d1%82%d0%b5%d1%80%d0%b5%d1%81%d1%83%d0%b5%d1%82&source=&data=&app_absent="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={wsup} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
