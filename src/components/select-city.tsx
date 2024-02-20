import React, {
  Dispatch,
  LegacyRef,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import regions from './form-record/regions.json';
import { typeCity } from 'src/utils/types';
interface IProps {
  selectedCity?: typeCity;
  setSelectCity: Dispatch<SetStateAction<typeCity | undefined>>;
  setshowPopupSelectCity: React.Dispatch<React.SetStateAction<boolean>>;
}
const SelectCity = ({ setSelectCity, setshowPopupSelectCity }: IProps) => {
  const [search, setSearch] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  return (
    <div className="dropdown shadow-2xl flex flex-col md:min-w-[420px] rounded-2xl bg-white absolute top-[54px] right-[12px] z-50">
      <div className="dropdown__header flex justify-between mb-4 p-4">
        <span className="text-2xl font-bold text-black">Укажите город</span>
        <button type="button" className="btn-close text-black w-3 h-3" />
      </div>
      <div className="search w-full mb-4 px-4 relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Поиск"
          className="search-input rounded-lg border border-transparent appearance-none w-full p-4 pl-11 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-50 focus:border-gray-200"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn-clear w-[8px] h-[8px] absolute top-[24px] right-[32px]"
        />
      </div>
      <div className="flex flex-col flex-start">
        <ul className="custom-scroll p-4 max-h-[400px] overflow-y-auto">
          {regions
            .filter((reg) =>
              reg.name.toLowerCase().includes(search?.toLowerCase() ?? '')
            )
            .map((region) => (
              <li
                className="text-base font-normal text-black p-1 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectCity(region);
                  setshowPopupSelectCity(false);
                  localStorage.setItem('selectedCity', JSON.stringify(region));
                }}
              >
                {region.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectCity;
