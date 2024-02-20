// import './tailwind.css';
// import './styles.css';

// import React, { LegacyRef, MutableRefObject, useRef, useState } from 'react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ruLocale from 'date-fns/locale/ru';
// import SelectOffice from './components/form-record/select-office';
// import Modal from './components/modal';
// import Footer from './components/footer';
// import Promo from './components/promo';
// import { typeCity, typeSto } from './types';
// import FormRecord from './components/form-record/form-record';
// import Timer from './components/timer';
// import Pluses from './components/pluses';
// import OtherPromo from './components/other-promo';
// import OldModals from './components/old-modals';
// import DescriptionPromo from './components/description-promo';

// function App() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);
//   const [isShowModalSelectOffice, setisShowModalSelectOffice] = useState(false);
//   const [selectedOffice, setSelectedOffice] = useState<typeSto>();
//   const [selectedCity, setSelectCity] = useState<typeCity>();
//   const [showPopupSelectCity, setshowPopupSelectCity] =
//     useState<boolean>(false);

//   const onChange = (dates: any) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);
//   };
//   registerLocale('ru', ruLocale);
//   return (
//     <>
//       <div>
//         <div id="__layout">
//           <div
//             id="scroll-container"
//             className="font-fact flex flex-col h-screen w-full overflow-x-hidden"
//           >
//             <div className="main-page flex-grow">
//               <Promo
//                 sectionRef={sectionRef}
//                 selectedCity={selectedCity}
//                 setSelectCity={setSelectCity}
//                 showPopupSelectCity={showPopupSelectCity}
//                 setshowPopupSelectCity={setshowPopupSelectCity}
//               />
//               <FormRecord isIncludes={false} />
//               <DescriptionPromo />
//               <Timer />
//               <Pluses />
//               <OtherPromo />
//               <OldModals />
//               <Footer />
//             </div>
//           </div>
//         </div>
//       </div>
//       {isShowModalSelectOffice && (
//         <Modal
//           onClose={() => {
//             setisShowModalSelectOffice(false);
//           }}
//         >
//           <SelectOffice
//             selectedOffice={selectedOffice}
//             setSelectedOffice={setSelectedOffice}
//             onClose={() => {
//               setisShowModalSelectOffice(false);
//             }}
//           />
//         </Modal>
//       )}
//     </>
//   );
// }

// export default App;
