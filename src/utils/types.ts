export type typeCity = {
  id: string;
  name: string;
  isDeleted: boolean;
  currencyCode: string;
  countryCode: string;
  phoneCode: string;
  lat: number;
  lng: number;
};

export type typeSto = {
  id: string;
  name: string;
  isFolder: boolean;
  isClosed: boolean;
  isDeleted: boolean;
  code: string;
  address: string;
  regionId: string;
  lat: number;
  lng: number;
};

export type Promotion = {
  id: number;
  name: string;
  colorTitle: string;
  subtitle: string;
  description: string;
  htmlCode: string;
  slug: string;
  backgroundImagePromo: string;
  mainImagePromo: string;
  promoImg1: string;
  promoImg2: string;
  options: string[];
};
export type Location = {
  id: number;
  name: string;
  slug: string;
  address: string;
  lat: number;
  lng: number;
  images: string[];
  tel: string;
  phoneNumbers: string[];
};
