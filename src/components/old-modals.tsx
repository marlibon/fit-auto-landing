import React from 'react';
import cardSuccess from '../images/card-success.png';
import telegram from '../images/telegram.e0c40e1.svg';
import tiktok from '../images/tik-tok.7721b78.svg';
import vk from '../images/vk.1b88caa.svg';
import ok from '../images/ok.67761cd.svg';

const OldModals = () => {
  return (
    <>
      <div className="modal-backdrop flex justify-center p-4 overflow-hidden items-center hidden">
        <div className="w-full md:w-[700px] bg-white mx-auto shadow rounded-2xl border-t-2 border-[#F47D32] p-8 relative">
          <h5 className="text-2xl md:text-4xl font-bold w-[40%] md:w-auto mb-9">
            Подтвердите мобильный телефон
          </h5>
          <form className="bg-white w-full flex flex-col">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="text-lg font-normal mb-4">
                Код подтверждения мы отправили на ваш номер:
              </div>
              <div className="text-lg font-normal mb-6">+ () --</div>
              <div className="w-full md:w-[234px] mb-6 relative">
                <label
                  htmlFor="passConfirm"
                  className="select-label font-normal text-[#b1b1b1]"
                >
                  Код из смс
                </label>
                <input
                  id="passConfirm"
                  maxLength={5}
                  type="text"
                  placeholder="•••••"
                  className="rounded-lg border border-transparent bg-[#fafafa] appearance-none w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-50 focus:border-gray-200"
                />
              </div>
              <div className="text-base font-normal text-[#575757] underline mb-6">
                Отправить код повторно (через 00:30)
              </div>
              <div>
                <button
                  type="button"
                  className="text-base font-normal bg-transparent text-[#F47D32] underline"
                >
                  Изменить номер
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-backdrop flex justify-center p-4 overflow-hidden items-center hidden">
        <div className="w-full md:w-[700px] bg-white mx-auto shadow rounded-2xl border-t-2 border-[#05A046] p-8 relative">
          <h5 className="text-2xl md:text-4xl font-bold w-[40%] md:w-auto mb-9">
            Подтвердите мобильный телефон
          </h5>
          <form className="bg-white w-full flex flex-col">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="text-lg font-normal mb-4">
                Укажите, на какой номер вам прислать код подтверждения
              </div>
              <div className="w-full md:w-[234px] mb-6 relative">
                <input
                  id="tel"
                  maxLength={70}
                  type="text"
                  placeholder="Номер телефона"
                  className="rounded-lg border border-transparent bg-[#fafafa] appearance-none w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-50 focus:border-gray-200"
                />
              </div>
              <div className="mb-9">
                <button className="w-full md:w-[240px] h-[54px] bg-[#F47D32] text-white font-medium rounded mb-2 md:mb-0">
                  Подтвердить
                </button>
              </div>
              <button
                type="button"
                className="text-base font-normal text-[#F47D32] bg-transparent underline"
              >
                Вернуться к вводу кода
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-backdrop flex justify-center p-4 overflow-hidden items-center hidden">
        <div className="form-success__wrap w-full md:w-[640px] bg-white mx-auto shadow rounded-2xl border-t-2 border-[#F47D32] p-8 relative">
          <div className="form-success__title-block flex justify-between items-center mb-6">
            <h5 className="form-success__title text-2xl md:text-4xl font-bold w-[40%] md:w-auto">
              Запись подтверждена
            </h5>
          </div>
          <form
            data-v-00612317=""
            className="form-success bg-white w-full flex flex-col"
          >
            <div
              data-v-00612317=""
              className="form-success__form-container flex flex-col justify-start mb-4"
            >
              <div
                data-v-00612317=""
                className="form-success__to-phone text-lg font-normal mb-6"
              >
                Мы отправили всю необходимую информацию на ваш номер
                <br data-v-00612317="" />+ () --
              </div>
              <div
                data-v-00612317=""
                className="form-success__addr-date flex flex-col mb-9"
              >
                <div
                  data-v-00612317=""
                  className="form-success__addr-date-addr flex flex-row items-center justify-start mb-6"
                >
                  <span
                    data-v-00612317=""
                    className="icon-point w-[40px] h-[40px] rounded-lg mr-4"
                  />{' '}
                  <span data-v-00612317="" className="text-base font-normal" />
                </div>
                <div
                  data-v-00612317=""
                  className="flex flex-row items-center justify-start"
                >
                  <span
                    data-v-00612317=""
                    className="icon-calendar w-[40px] h-[40px] rounded-lg mr-4"
                  />{' '}
                  <span data-v-00612317="" className="text-base font-normal">
                    {' '}
                    (),{' '}
                  </span>
                </div>
              </div>
              <div
                data-v-00612317=""
                className="form-success__bonus flex flex-col bg-[#FAFAFA] rounded-lg mb-12 px-4 py-6"
              >
                <div
                  data-v-00612317=""
                  className="form-success__bonus-title md:text-4xl text-2xl md:text-left text-center font-bold text-black mb-2"
                >
                  Подключиться{' '}
                  <span data-v-00612317="" className="text-[#F47D32]">
                    к бонусной
                    <br data-v-00612317="" className="md:hidden inline" />{' '}
                    программе
                  </span>
                </div>
                <div
                  data-v-00612317=""
                  className="form-success__bonus-subtitle md:text-lg text-base md:text-left text-center font-normal text-[#575757] mb-6"
                >
                  Кешбэк, специальные цены, бесплатные
                  <br data-v-00612317="" />
                  услуги — все это FIT BONUS!
                </div>{' '}
                <a
                  data-v-00612317=""
                  href="https://bonus.fitauto.ru/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full md:w-[130px] h-[38px] justify-center items-center bg-[#F47D32] text-sm font-medium text-white rounded-lg"
                >
                  Подключиться
                </a>{' '}
                <img
                  src={cardSuccess}
                  alt=""
                  className="absolute md:block hidden bottom-[130px] right-[0px]"
                />
              </div>
              <div data-v-00612317="" className="text-center">
                <div
                  data-v-00612317=""
                  className="form-success__our-links-title text-2xl font-bold mb-6"
                >
                  Следите за нашими новостями
                </div>
                <ul
                  data-v-00612317=""
                  className="flex items-center justify-center"
                >
                  <li data-v-00612317="" className="mr-10 md:mr-6">
                    <a
                      data-v-00612317=""
                      href="https://www.youtube.com/channel/UCH_tSjkwIYaGJW4lGkZOuIA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        data-v-00612317=""
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAzMCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi43Mzc5IDEuMTQyMzVDMjguMDIyOSAxLjQ4ODI0IDI5LjAzNjEgMi41MDExOCAyOS4zODIxIDMuNzg1ODhDMzAuMDI0NiA2LjEzMjk0IDI5Ljk5OTkgMTEuMDI0NyAyOS45OTk5IDExLjAyNDdDMjkuOTk5OSAxMS4wMjQ3IDI5Ljk5OTkgMTUuODkxOCAyOS4zODIxIDE4LjIzODhDMjkuMDM2MSAxOS41MjM1IDI4LjAyMjkgMjAuNTM2NSAyNi43Mzc5IDIwLjg4MjRDMjQuMzkwMyAyMS41IDE0Ljk5OTkgMjEuNSAxNC45OTk5IDIxLjVDMTQuOTk5OSAyMS41IDUuNjM0MjQgMjEuNSAzLjI2MTkzIDIwLjg1NzZDMS45NzY5MyAyMC41MTE4IDAuOTYzNzUyIDE5LjQ5ODggMC42MTc3OSAxOC4yMTQxQzAgMTUuODkxOCAwIDExIDAgMTFDMCAxMSAwIDYuMTMyOTQgMC42MTc3OSAzLjc4NTg4QzAuOTYzNzUyIDIuNTAxMTggMi4wMDE2NCAxLjQ2MzUzIDMuMjYxOTMgMS4xMTc2NUM1LjYwOTUzIDAuNSAxNC45OTk5IDAuNSAxNC45OTk5IDAuNUMxNC45OTk5IDAuNSAyNC4zOTAzIDAuNSAyNi43Mzc5IDEuMTQyMzVaTTE5LjgxODYgMTEuMDAyM0wxMi4wMDk3IDE1LjQ5ODhWNi41MDU4NkwxOS44MTg2IDExLjAwMjNaIiBmaWxsPSIjQzRDQkQxIi8+Cjwvc3ZnPgo="
                        alt=""
                      />
                    </a>
                  </li>
                  <li data-v-00612317="" className="mr-10 md:mr-6">
                    <a
                      data-v-00612317=""
                      href="https://t.me/fitservice_official"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img data-v-00612317="" src={telegram} alt="" />
                    </a>
                  </li>
                  <li data-v-00612317="" className="mr-10 md:mr-6">
                    <a
                      data-v-00612317=""
                      href="https://www.tiktok.com/@fitservice_official"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img data-v-00612317="" src={tiktok} alt="" />
                    </a>
                  </li>
                  <li data-v-00612317="" className="mr-10 md:mr-6">
                    <a
                      data-v-00612317=""
                      href="https://vk.com/fit_service"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img data-v-00612317="" src={vk} alt="" />
                    </a>
                  </li>
                  <li data-v-00612317="">
                    <a
                      data-v-00612317=""
                      href="https://ok.ru/group/54078179442879"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img data-v-00612317="" src={ok} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OldModals;
