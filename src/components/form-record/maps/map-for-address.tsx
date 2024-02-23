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
import { API_KEY, urlImages } from 'src/utils/constants';
import { Location, typeCity, typeSto } from 'src/utils/types';
import all from '../all.json';

interface IProps {
  city: Location;
  width?: string;
  height?: string;
  balloonContentBody?: string;
}

export const MapForAddress = ({ city, width, height }: IProps) => {
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
          zoom: 12,
          controls: ['zoomControl']
        }}
        width={width ? width : '100%'}
        height={height ? height : `${window.innerHeight * 0.7}px`}
        modules={['control.ZoomControl']}
      >
        <TypeSelector
          options={{
            //@ts-ignore
            float: 'right'
          }}
        />
        <Placemark
          defaultGeometry={[city.lat, city.lng]}
          options={{
            preset: 'islands#orangeIcon',
            openHintOnHover: true,
            iconLayout: 'default#image',
            iconImageHref: iconSelect,
            iconImageSize: [50, 50],
            iconImageOffset: [-20, -20],
            hasBalloon: true,
            hideIconOnBalloonOpen: true,
            iconOffset: [0, -10]
          }}
          properties={{
            iconContent: 'fit',
            balloonContentHeader: city.address,
            balloonContentBody: `
            <img src="${urlImages + city.img1}" alt="" width="100%" />
            `,
            maxWidth: 100,
            autoPan: true
          }}
        />
      </Map>
    </YMaps>
  );
};
