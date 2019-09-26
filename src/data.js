import {
  getRandomValueRange
} from './utils';

// Список фильтров
const FILTER_NAME_LIST = [
  `everything`,
  `future`,
  `past`
];

// Список дней машрута
const DAY_LIST = [
  `2019-03-18`,
  `2019-03-19`,
  `2019-03-20`
];

// Список типов маршрутов
const WAYPOINT_TYPE_LIST = [
  `taxi`,
  `bus`,
  `train`,
  `flight`,
  `check-in`,
  `sightseeing`
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

// Список времени начала маршрутов
const WAYPOINT_START_TIME_LIST = [
  `9:00`,
  `10:00`,
  `11:00`,
  `12:00`
];

// Список времени окончания маршрутов
const WAYPOINT_END_TIME_LIST = [
  `10:00`,
  `11:00`,
  `12:00`,
  `13:00`
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

// Список типов офферов
/*
const WAYPOINT_OFFER_TYPE_LIST = [
  `taxi`,
  `bus`,
  `train`,
  `ship`,
  `transport`,
  `drive`,
  `flight`,
  `check-in`,
  `sightseeing`,
  `restaurant`
];
*/

// Список предложений
const WAYPOINT_OFFER_LIST = [
  {
    title: `Add luggage`,
    price: 10
  },
  {
    title: `Switch to comfort`,
    price: 10
  },
  {
    title: `Rent a car`,
    price: 10
  },
  {
    title: `Add breakfast`,
    price: 10
  },
  {
    title: `Book tickets`,
    price: 10
  },
  {
    title: `Lunch in city`,
    price: 10
  },
  {
    title: `Choose seats`,
    price: 10
  },
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

/**
 * Возвращает цену
 * @return {string}
 */
const getPrice = () => {
  return WAYPOINT_PRICE_LIST[getRandomValueRange(0, WAYPOINT_PRICE_LIST.length - 1)];
};

/**
 * Возвращает длительность
 * @return {string}
 */
const getDuration = () => {
  return WAYPOINT_DURATION_LIST[getRandomValueRange(0, WAYPOINT_DURATION_LIST.length - 1)];
};

/**
 * Возвращает дату начала
 * @return {string}
 */
const getTimeStart = () => {
  return WAYPOINT_START_TIME_LIST[getRandomValueRange(0, WAYPOINT_START_TIME_LIST.length - 1)];
};

/**
 * Возвращает дату окончания
 * @return {string}
 */
const getTimeEnd = () => {
  return WAYPOINT_END_TIME_LIST[getRandomValueRange(0, WAYPOINT_END_TIME_LIST.length - 1)];
};

/**
 * Возвращает пункт назначения
 * @return {string}
 */
const getDestionation = () => {
  return WAYPOINT_DESTINATION_LIST[getRandomValueRange(0, WAYPOINT_DESTINATION_LIST.length - 1)];
};

/**
 * Возвращает тип маршрута
 * @return {string}
 */
const getPointType = () => {
  return WAYPOINT_TYPE_LIST[getRandomValueRange(0, WAYPOINT_TYPE_LIST.length - 1)];
};

export {
  FILTER_NAME_LIST,
  DAY_LIST,
  WAYPOINT_TYPE_LIST,
  getPointType,
  getDestionation,
  getTimeStart,
  getTimeEnd,
  getDuration,
  getPrice,
  getPhotoList,
  getOfferList,
  getTextList
};
