import {getRandomValueRange} from './utils';
import {
  FILTER_NAME_LIST,
  DAY_LIST,
  WAYPOINT_TYPE_LIST,
  WAYPOINT_DESTINATION_LIST,
  WAYPOINT_OFFER_LIST,
  getPointType,
  getDestionation,
  getTimeStart,
  getTimeEnd,
  getDuration,
  getPrice,
  getPhotoList,
  getOfferCheckedIndexes,
  getTextList
} from './data';
import menu from './components/trip-tabs';
import filter from './components/filter';
import sort from './components/sort';
import {TripDay} from './components/trip-day';
import {Waypoint} from './components/waypoint';
import {WaypointEdit} from './components/waypoint-edit';

const tripControlsElem = document.querySelector(`.trip-main__trip-controls`);
const tripDaysElem = document.querySelector(`.trip-days`);
const waypointsElem = document.querySelector(`.trip-day__items`);
const tripEventsElem = document.querySelector(`.trip-events`);

const EVENTS_COUNT = 3;
/**
 * Отрисовка меню
 */
const renderMenu = () => {
  const tripTabsHeader = tripControlsElem.querySelector(`h2`);

  tripTabsHeader.insertAdjacentHTML(`afterend`, menu());
};

/**
 * Отрисовка заданного перечня фильтров
 * @param {array} filterList
 */
const renderFilters = (filterList) => {
  const tripFilters = tripControlsElem.querySelector(`.trip-filters`);

  tripFilters.insertAdjacentHTML(`afterbegin`, filterList.reduce((resultHtml, filterNameItem) => {
    return resultHtml + filter(filterNameItem);
  }, ``));
};

/**
 * Отрисовка сортировок
 */
const renderSort = () => {
  tripEventsElem.querySelector(`h2`).insertAdjacentHTML(`afterend`, sort());
};

/**
 * Отрисовка дней
 */
const renderDays = () => {
  tripDaysElem.innerHTML = ``;

  DAY_LIST.forEach(function (day, dayIndex) {
    const tripDayComponent = new TripDay(day, dayIndex);

    tripDaysElem.appendChild(tripDayComponent.render());
    generateWaypoints(tripDayComponent.element.querySelector(`.trip-events__list`), getRandomValueRange(1, EVENTS_COUNT));
  });
};

/**
 * Обработчики события для фильтров
 */
const addFiltersEvents = () => {
  const tripFilterElem = document.querySelector(`.trip-filters__filter`);

  tripFilterElem.addEventListener(`click`, () => {
    generateWaypoints(waypointsElem, getRandomValueRange(0, EVENTS_COUNT));
  });
};

/**
 * Заменяетодин компонент другим
 * @param {Element} containerElem
 * @param {object} newComponent
 * @param {object} oldComponent
 */
const replaceComponents = (containerElem, newComponent, oldComponent) => {
  newComponent.render();
  containerElem.replaceChild(newComponent.element, oldComponent.element);
  oldComponent.unrender();
};

/**
 * Создание заданного числа маршрутов
 * @param {Element} containerElem
 * @param {int} pointsCount
 */
const generateWaypoints = (containerElem, pointsCount) => {
  containerElem.innerHTML = ``;

  for (let i = 1; i <= pointsCount; i++) {
    const waypointObj = {
      price: getPrice(),
      timeStart: getTimeStart(),
      timeEnd: getTimeEnd(),
      id: 0,
      isFavorite: false,
      offerCheckedIndexes: getOfferCheckedIndexes(),
      offerList: WAYPOINT_OFFER_LIST,
      destination: getDestionation(),
      destinationList: WAYPOINT_DESTINATION_LIST,
      type: getPointType(),
      typeList: WAYPOINT_TYPE_LIST,
      duration: getDuration(),
      photoList: getPhotoList(),
      textList: getTextList()
    };

    const waypointComponent = new Waypoint(waypointObj);
    const waypointEditComponent = new WaypointEdit(waypointObj);

    containerElem.appendChild(waypointComponent.render());

    waypointComponent.onClick = () => {
      replaceComponents(containerElem, waypointEditComponent, waypointComponent);
    };

    waypointEditComponent.onSubmit = () => {
      replaceComponents(containerElem, waypointComponent, waypointEditComponent);
    };

    waypointEditComponent.onReset = () => {
      replaceComponents(containerElem, waypointComponent, waypointEditComponent);
    };
  }
};

// Отрисовываем меню
renderMenu();

// Отрисовываем фильтры
renderFilters(FILTER_NAME_LIST);

// Добавляем обработчики событий фильтрам
addFiltersEvents();

// Отрисовываем сортировки
renderSort();

// Отрисовываем дни
renderDays();
