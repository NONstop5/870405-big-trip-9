import createFilterItem from './create-filter';
import {
  FILTER_NAME_LIST,
  WAYPOINT_TYPE_LIST,
  WAYPOINT_DESTINATION_LIST,
  WAYPOINT_TIME_LIST,
  WAYPOINT_DURATION_LIST,
  WAYPOINT_PRICE_LIST,
  getPhotoList,
  getOfferList,
  getTextList
} from './data';
import {
  getRandomValueRange
} from './utils';
import {
  Waypoint
} from './waypoint';
import {
  WaypointEdit
} from './waypoint-edit';

const tripFilterElem = document.querySelector(`.trip-filter`);
const waypointsElem = document.querySelector(`.trip-day__items`);

/**
 * Создание заданного перечня фильтров
 * @param {array} filterList
 */
const generateFilters = (filterList) => {
  tripFilterElem.innerHTML = filterList.reduce((resultHtml, filterNameItem) => {
    return resultHtml + createFilterItem(filterNameItem);
  }, ``);
};

/**
 * Обработчики события для фильтров
 */
const addFiltersEvents = () => {
  tripFilterElem.addEventListener(`click`, () => {
    generateWaypoints(waypointsElem, getRandomValueRange(0, 7));
  });
};

/**
 * Создание заданного числа маршрутов
 * @param {link} containerElem
 * @param {int} pointsCount
 */
const generateWaypoints = (containerElem, pointsCount) => {
  containerElem.innerHTML = ``;
  for (let i = 1; i <= pointsCount; i++) {
    const type = WAYPOINT_TYPE_LIST[getRandomValueRange(0, WAYPOINT_TYPE_LIST.length - 1)];
    const waypointObj = {
      type: {
        name: type.name,
        icon: type.icon
      },
      typeList: WAYPOINT_TYPE_LIST,
      destination: WAYPOINT_DESTINATION_LIST[getRandomValueRange(0, WAYPOINT_DESTINATION_LIST.length - 1)],
      time: WAYPOINT_TIME_LIST[getRandomValueRange(0, WAYPOINT_TIME_LIST.length - 1)],
      duration: WAYPOINT_DURATION_LIST[getRandomValueRange(0, WAYPOINT_DURATION_LIST.length - 1)],
      price: WAYPOINT_PRICE_LIST[getRandomValueRange(0, WAYPOINT_PRICE_LIST.length - 1)],
      photo: getPhotoList(),
      offers: getOfferList(),
      text: getTextList()
    };

    const waypointComponent = new Waypoint(waypointObj);
    const waypointEditComponent = new WaypointEdit(waypointObj);

    containerElem.appendChild(waypointComponent.render());

    waypointComponent.onClick = () => {
      waypointEditComponent.render();
      containerElem.replaceChild(waypointEditComponent.element, waypointComponent.element);
      waypointComponent.unrender();
    };

    waypointEditComponent.onSubmit = () => {
      waypointComponent.render();
      containerElem.replaceChild(waypointComponent.element, waypointEditComponent.element);
      waypointEditComponent.unrender();
    };

    waypointEditComponent.onReset = () => {
      waypointComponent.render();
      containerElem.replaceChild(waypointComponent.element, waypointEditComponent.element);
      waypointEditComponent.unrender();
    };
  }
};

// Отрисовываем фильтры
generateFilters(FILTER_NAME_LIST);

// Отрисовываем маршруты
generateWaypoints(waypointsElem, 7);

// Добавляем обработчики событий фильтрам
addFiltersEvents();
