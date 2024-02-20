import React from 'react';

const Timer = () => {
  return (
    <section
      data-v-6c884b7d=""
      className="section description pb-12 mb-12 relative hidden"
    >
      <div data-v-6c884b7d="" className="max-w-[1280px] mx-auto px-6">
        <div
          data-v-6c884b7d=""
          className="flex flex-col lg:flex-row items-center py-8"
        >
          <div
            data-v-6c884b7d=""
            className="lg:w-1/2 flex flex-col relative order-2 md:order-1"
          >
            <div
              data-v-6c884b7d=""
              className="bg-white shadow-custom rounded-lg p-4 lg:w-[416px] lg:py-10"
            >
              <div
                data-v-6c884b7d=""
                className="flex justify-between items-center mb-6"
              >
                <h5
                  data-v-6c884b7d=""
                  className="text-2xl font-bold w-[40%] md:w-auto mb-4"
                >
                  Оставьте заявку на звонок
                </h5>
              </div>
              <div data-v-6c884b7d="">
                <form className="bg-white w-full flex flex-col">
                  <div className="flex flex-col items-center mb-4 flex-wrap gap-4 md:flex-col" />
                  <div className="flex flex-col items-center mb-4 md:flex-col">
                    <div className="relative w-full mb-4">
                      <div>
                        <input
                          id="geo-modal"
                          type="text"
                          placeholder="Выберите автосервис"
                          className="max-w-full text-[#ababab] truncate border border-transparent h-[58px] rounded-lg bg-[#fafafa] appearance-none w-full cursor-pointer p-4 leading-tight focus:outline-none focus:bg-orange-50 focus:border-gray-200"
                        />{' '}
                        <span className="pointer-events-none icon-map-form w-[24px] h-[24px] absolute top-[16px] right-[16px]" />
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center md:w-full md:ml-0 hidden">
                      <div className="form-item w-1/2 mr-2 relative">
                        <div className="vdp-datepicker rounded-lg text-[#ababab] bg-[#fafafa] cursor-pointer appearance-none w-full p-4 leading-tight focus:outline-none focus:shadow-outline h-[58px]">
                          {/* <div className="">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              locale="ru"
                              placeholderText="Дата"
                              className="input-datepicker"
                              dateFormat="dd.MM.yyyy"
                              excludeDates={[new Date()]}
                              excludeDateIntervals={[
                                {
                                  start: new Date(0),
                                  end: new Date()
                                }
                              ]}
                            />
                          </div> */}
                        </div>

                        <span className="pointer-events-none icon-calendar w-[24px] h-[24px] absolute top-[16px] right-[16px]" />
                      </div>
                      <div className="form-item w-1/2 ml-2 relative">
                        <input
                          id="timepicker"
                          type="text"
                          placeholder="Время"
                          className="custom-scroll text-[#ababab] border border-transparent h-[58px] rounded-lg bg-[#fafafa] appearance-none w-full p-4 leading-tight cursor-pointer focus:outline-none focus:bg-orange-50 focus:border-gray-200"
                        />
                        <button
                          type="button"
                          className="pointer-events-none btn-input-arrow w-[10px] h-[8px] absolute top-[26px] right-[16px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center mb-4 md:flex-col">
                    <div className="form-item w-full md:w-full mb-2 md:mb-2 md:mr-0">
                      <input
                        maxLength={70}
                        type="text"
                        placeholder="Имя"
                        className="rounded-lg border border-transparent bg-[#fafafa] appearance-none w-full p-4 text-[#ababab] leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-50 focus:border-gray-200"
                      />
                    </div>
                    <div className="form-item w-full md:w-full md:ml-0">
                      <div className="relative">
                        <input
                          id="tel"
                          type="text"
                          placeholder="Номер телефона"
                          maxLength={18}
                          className="rounded-lg text-[#ababab] focus:text-[#000] border border-transparent bg-[#fafafa] appearance-none w-full p-4 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-50 focus:border-gray-200"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center pt-4 border-t border-gray-300 md:flex-col">
                    <p className="text-sm font-normal text-gray-400 mb-4 md:mb-0 pr-0 order-1 md:order-2">
                      Нажимая на кнопку Отправить, вы принимаете{' '}
                      <a
                        href="https://fitauto.ru/new/assets/files/politika-konfidencialnosti-ooo.pdf"
                        target="_blank"
                        rel="noreferrer"
                        title="Политика конфиденциальности ООО ФИТ АВТОСЕРВИС"
                        className="underline"
                      >
                        политику обработки персональных данных
                      </a>{' '}
                      2024 © ООО «ФИТ Автосервис».
                    </p>
                    <button className="h-[58px] w-full rounded-lg bg-[#F47D32] text-white font-medium md:w-full mb-4 md:mb-2 order-2 md:order-1">
                      Отправить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            data-v-6c884b7d=""
            className="lg:w-1/2 flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 w-full sm:max-w-[100%] md:max-w-[70%] lg:max-w-[auto] mx-auto lg:mx-0"
          >
            <div
              data-v-6c884b7d=""
              className="text-black text-4xl lg:text-5xl font-bold mb-12"
            >
              До конца акции осталось
            </div>{' '}
            <span data-v-6c884b7d="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
