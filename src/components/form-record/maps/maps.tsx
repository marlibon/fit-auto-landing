import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import { YMaps, Map, Placemark, TypeSelector } from '@pbe/react-yandex-maps';
import iconSelect from '../../../images/map-icon-point.svg';
import iconPoint from '../../../images/point-orange.svg';
import { API_KEY } from 'src/utils/constants';
import { typeCity, typeSto } from 'src/utils/types';
import all from '../all.json';

interface IProps {
  city: typeCity;
  selected?: typeSto;
  setSelected: Dispatch<SetStateAction<typeSto | undefined>>;
}

export const Maps = ({ city, selected, setSelected }: IProps) => {
  const ref2 = useRef();

  return (
    <YMaps
      query={{
        load: 'package.full',
        apikey: API_KEY
      }}
    >
      <Map
        instanceRef={ref2}
        state={{
          center: selected
            ? [selected.lat, selected.lng]
            : [city.lat, city.lng],
          zoom: 11,
          controls: ['zoomControl']
        }}
        width="100%"
        height="600px"
        modules={['control.ZoomControl']}
      >
        {/* <ZoomControl options={{ float: "right" }} /> */}
        {/* <SearchControl options={{ float: 'right' }} /> */}

        <TypeSelector
          options={{
            //@ts-ignore
            float: 'right'
          }}
        />
        {all.map((sto, i) => {
          return (
            <Placemark
              onClick={() => {
                setSelected(sto);
              }}
              key={i}
              defaultGeometry={[sto.lat, sto.lng]}
              options={{
                // iconImageSize: [10, 10],
                preset: 'islands#orangeIcon',
                openHintOnHover: true,
                iconLayout: 'default#image',
                iconImageHref:
                  selected && selected.id === sto.id ? iconSelect : iconPoint,
                iconImageSize: [40, 40],
                iconImageOffset: [-20, -20]
              }}
              properties={{
                iconContent: 'fit',
                hintContent: sto.name,
                balloonContentHeader: sto.name,
                autoPan: true,
                offset: [34, 40]
              }}
            />
          );
        })}
      </Map>
    </YMaps>
  );
};
