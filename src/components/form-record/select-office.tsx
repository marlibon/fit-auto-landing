import React, { Dispatch, SetStateAction, useState } from 'react';
import { Maps } from './maps/maps';
import { typeCity, typeSto } from '../../../src/utils/types';
import regions from './regions.json';
import all from './all.json';

const idCity = '629148fd-b3e7-11e7-ae44-005056991fe0';

interface IProps {
  selectedOffice?: typeSto;
  setSelectedOffice: Dispatch<SetStateAction<typeSto | undefined>>;
  onClose: () => void;
}
const SelectOffice = ({
  selectedOffice,
  setSelectedOffice,
  onClose
}: IProps) => {
  const city = regions[141];
  const [selected, setSelected] = useState<typeSto>();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <ul className="address-list custom-scroll overflow-y-auto max-h-[600px]">
            {all
              .filter((sto: typeSto, index) => sto.regionId === city.id)
              .map((s: typeSto, i: number) => (
                <li
                  className="address-list__item rounded-lg item p-2 cursor-pointer"
                  key={s.id}
                  onClick={() => {
                    setSelected(s);
                  }}
                  style={
                    selected && selected.id === s.id
                      ? { textDecoration: 'underline' }
                      : {}
                  }
                >
                  <p className="text-lg font-medium pb-4">{s.name}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="maps rounded-lg overflow-hidden">
            <div id="map-wrap">
              <Maps city={city} selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-default bg-[#F47D32] h-[54px] w-full text-white font-medium rounded-lg mr-0 lg:mr-6 mb-2 lg:mb-0 hover:bg-orange-600"
            style={{ width: '100%' }}
            onClick={() => {
              if (selected) {
                setSelectedOffice(selected);
                onClose();
              }
            }}
            disabled={!selected}
          >
            Выбрать
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectOffice;
