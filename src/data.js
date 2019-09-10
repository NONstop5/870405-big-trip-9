import {
  getRandomValueRange
} from './utils';

// Список фильтров
const FILTER_NAME_LIST = [
  `everything`,
  `future`,
  `past`
];

// Список типов маршрутов
const WAYPOINT_TYPE_LIST = [
  {
    name: `Taxi`,
    icon: `🚕`
  },
  {
    name: `Bus`,
    icon: `🚌`
  },
  {
    name: `Train`,
    icon: `🚂`
  },
  {
    name: `Ship`,
    icon: `🛳️`
  },
  {
    name: `Transport`,
    icon: `🚊`
  },
  {
    name: `Drive`,
    icon: `🚗`
  },
  {
    name: `Flight`,
    icon: `✈️`
  },
  {
    name: `Check-in`,
    icon: `🏨`
  },
  {
    name: `Sightseeing`,
    icon: `🏛️`
  },
  {
    name: `Restaurant`,
    icon: `🍴`
  }
];

// Список имен маршрутов
const WAYPOINT_DESTINATION_LIST = [
  `Airport`,
  `Geneva`,
  `Chamonix`,
  `hotel`,
  `London`,
  `New York`
];

// Список времени маршрутов
const WAYPOINT_TIME_LIST = [
  `9:00&nbsp;&mdash; 10:00`,
  `10:00&nbsp;&mdash; 11:00`,
  `11:00&nbsp;&mdash; 12:00`,
  `12:00&nbsp;&mdash; 13:00`
];

// Список продолительности маршрутов
const WAYPOINT_DURATION_LIST = [
  `1h 00m`,
  `1h 10m`,
  `1h 20m`,
  `1h 30m`
];

// Список стоимости маршрутов
const WAYPOINT_PRICE_LIST = [
  `10`,
  `20`,
  `30`,
  `40`
];

// Список предложений
const WAYPOINT_OFFER_LIST = [
  `Add luggage`,
  `Switch to comfort class`,
  `Add meal`,
  `Choose seats`
];

// Список текстовых предложений
const WAYPOINT_TEXT_LIST = [
  `Lorem ipsum dolor sit amet,consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

/**
 * Генерирует и возвращает массив оферов
 * @return {array}
 */
const getOfferList = () => {
  const offersCount = getRandomValueRange(0, 2);
  let offerList = [];
  for (let i = 1; i <= offersCount; i++) {
    offerList.push(WAYPOINT_OFFER_LIST[getRandomValueRange(0, WAYPOINT_OFFER_LIST.length - 1)]);
  }

  return offerList;
};

/**
 * Генерирует и возвращает массив текстовых предложений
 * @return {array}
 */
const getTextList = () => {
  const textsCount = getRandomValueRange(1, 3);
  let textList = [];
  for (let i = 1; i <= textsCount; i++) {
    textList.push(WAYPOINT_TEXT_LIST[getRandomValueRange(0, WAYPOINT_TEXT_LIST.length - 1)]);
  }

  return textList;
};

/**
 * Генерирует и возвращает массив фотографий
 * @return {array}
 */
const getPhotoList = () => {
  const photoCount = getRandomValueRange(3, 5);
  let photoList = [];
  for (let i = 1; i <= photoCount; i++) {
    photoList.push(`http://picsum.photos/300/150?r=${Math.random()}`);
  }

  return photoList;
};

export {
  FILTER_NAME_LIST,
  WAYPOINT_TYPE_LIST,
  WAYPOINT_DESTINATION_LIST,
  WAYPOINT_TIME_LIST,
  WAYPOINT_DURATION_LIST,
  WAYPOINT_PRICE_LIST,
  WAYPOINT_OFFER_LIST,
  getPhotoList,
  getOfferList,
  getTextList
};
