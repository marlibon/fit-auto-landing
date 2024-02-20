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
import { Location, typeCity, typeSto } from 'src/utils/types';
import all from '../all.json';

interface IProps {
  city: Location;
}

export const MapForAddress = ({ city }: IProps) => {
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
          center: [city.lat, city.lng],
          zoom: 11,
          controls: ['zoomControl']
        }}
        width="100%"
        height={`${window.innerHeight * 0.7}px`}
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
        <Placemark
          // onClick={() => {
          //   setSelected(sto);
          // }}
          defaultGeometry={[city.lat, city.lng]}
          options={{
            // iconImageSize: [10, 10],
            preset: 'islands#orangeIcon',
            openHintOnHover: true,
            iconLayout: 'default#image',
            iconImageHref: iconSelect,
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -20]
          }}
          properties={{
            iconContent: 'fit',
            hintContent: city.address,
            balloonContentHeader: city.address,
            autoPan: true,
            offset: [34, 40]
          }}
        />
      </Map>
    </YMaps>
  );
};
