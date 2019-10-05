import {Component} from './сomponent';

class WaypointEdit extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._typeList = data.typeList;
    this._destination = data.destination;
    this._destinationList = data.destinationList;
    this._timeStart = data.timeStart;
    this._timeEnd = data.timeEnd;
    this._price = data.price;
    this._photoList = data.photoList;
    this._offerCheckedIndexes = data.offerCheckedIndexes;
    this._offerList = data.offerList;
    this._textList = data.textList;
    this._isFavorite = data.isFavorite;

    this._onSubmit = null;
    this._onReset = null;
    this._onKeyPress = null;
    this._onWaypointSubmit = this._onWaypointSubmit.bind(this);
    this._onWaypointReset = this._onWaypointReset.bind(this);
    this._onWaypointKeyPress = this._onWaypointKeyPress.bind(this);
  }

  /**
   * Генерирует html - типов маршрутов
   * @param {object} type
   * @param {array} typeList
   * @return {string}
   */
  _generateTypeListHtml(type, typeList) {
    return typeList.reduce((result, typeItem) => {
      return result + `
          <div class="event__type-item">
            <input id="event-type-${typeItem}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeItem}">
            <label class="event__type-label  event__type-label--${typeItem}" for="event-type-${typeItem}-1">${typeItem[0].toUpperCase() + typeItem.slice(1)}</label>
          </div>
      `;
    }, ``);
  }

  _generateDestinationListHtml(destination, destinationList) {
    return destinationList.reduce((result, destinationItem) => {
      return result + `
        <option value="${destinationItem}"></option>
      `;
    }, ``);
  }

  _getOfferCheckedStatus(offerIndex) {
    return this._offerCheckedIndexes.some((offerItem) => {
      return offerItem === offerIndex;
    }) ? `checked` : ``;
  }

  /**
   * Генерирует html-код оферов
   * @param {array} offerList
   * @return {array}
   */
  _generateOffersHtml(offerList) {
    return offerList.reduce((resultHtml, offerItem, offerIndex) => {
      return resultHtml + `
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offerItem.type}-1" type="checkbox" name="event-offer-${offerItem.type}" ${this._getOfferCheckedStatus(offerIndex)}>
          <label class="event__offer-label" for="event-offer-${offerItem.type}-1">
            <span class="event__offer-title">${offerItem.title}</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${offerItem.price}</span>
          </label>
        </div>
    `;
    }, ``);
  }

  /**
   * Генерирует html - код текстовых предложений
   * @param {array} textList
   * @return {string}
   */
  _generateTextListHtml(textList) {
    return textList.reduce((resultHtml, textItem) => {
      return resultHtml + `${textItem}<br>`;
    }, ``);
  }

  /**
   * Генерирует html - код фотографий
   * @param {array} photoList
   * @return {string}
   */
  _generatePhotoListHtml(photoList) {
    return photoList.reduce((resultHtml, photoItem) => {
      return resultHtml + `<img class="event__photo" src="${photoItem}" alt="Event photo">`;
    }, ``);
  }

  /**
   * Получаем шаблон элемента
   * @return {string}
   */
  get template() {
    return `
      <li class="trip-events__item">
        <form class="event  event--edit" action="#" method="post">
          <header class="event__header">
            <div class="event__type-wrapper">
              <label class="event__type  event__type-btn" for="event-type-toggle-1">
                <span class="visually-hidden">Choose event type</span>
                <img class="event__type-icon" width="17" height="17" src="img/icons/${this._type}.png" alt="Event type icon">
              </label>
              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

              <div class="event__type-list">
                <fieldset class="event__type-group">
                  <legend class="visually-hidden">Transfer</legend>
                    ${this._generateTypeListHtml(this._type, this._typeList)}
                </fieldset>
              </div>
            </div>

            <div class="event__field-group  event__field-group--destination">
              <label class="event__label  event__type-output" for="event-destination-1">
                ${this._type} at
              </label>
              <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${this._destination}" list="destination-list-1">
              <datalist id="destination-list-1">
                ${this._generateDestinationListHtml(this._destination, this._destinationList)}
              </datalist>
            </div>

            <div class="event__field-group  event__field-group--time">
              <label class="visually-hidden" for="event-start-time-1">
                From
              </label>
              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 ${this._timeStart}">
              &mdash;
              <label class="visually-hidden" for="event-end-time-1">
                To
              </label>
              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 ${this._timeEnd}">
            </div>

            <div class="event__field-group  event__field-group--price">
              <label class="event__label" for="event-price-1">
                <span class="visually-hidden">Price</span>
                &euro;
              </label>
              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${this._price}">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Delete</button>

            <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${this._isFavorite ? `checked` : ``}>
            <label class="event__favorite-btn" for="event-favorite-1">
              <span class="visually-hidden">Add to favorite</span>
              <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
              </svg>
            </label>

            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </header>

          <section class="event__details">

            <section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>

              <div class="event__available-offers">${this._generateOffersHtml(this._offerList)}</div>
            </section>

            <section class="event__section  event__section--destination">
              <h3 class="event__section-title  event__section-title--destination">Destination</h3>
              <p class="event__destination-description">${this._generateTextListHtml(this._textList)}</p>

              <div class="event__photos-container">
                <div class="event__photos-tape">
                ${this._generatePhotoListHtml(this._photoList)}
                </div>
              </div>
            </section>
          </section>
        </form>
      </li>
  `;
  }

  _onWaypointSubmit() {
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  _onWaypointReset() {
    if (typeof this._onReset === `function`) {
      this._onReset();
    }
  }

  set onReset(fn) {
    this._onReset = fn;
  }

  _onWaypointKeyPress(evt) {
    if (typeof this._onReset === `function`) {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._onReset();
      }
    }
  }

  set onKeyPress(fn) {
    this._onKeyPress = fn;
  }

  /**
   * Создаем обработчики событий
   */
  addEvents() {
    const eventBtnSubmitElem = this._element.querySelector(`.event__save-btn`);
    const eventBtnResetElem = this._element.querySelector(`.event__reset-btn`);

    eventBtnSubmitElem.addEventListener(`click`, this._onWaypointSubmit);
    eventBtnResetElem.addEventListener(`click`, this._onWaypointReset);
    document.addEventListener(`keydown`, this._onWaypointKeyPress);
  }

  /**
   * Удаляем обработчики событий
   */
  removeEvents() {
    const eventBtnSubmitElem = this._element.querySelector(`.event__save-btn`);
    const eventBtnResetElem = this._element.querySelector(`.event__reset-btn`);

    eventBtnSubmitElem.removeEventListener(`click`, this._onWaypointSubmit);
    eventBtnResetElem.removeEventListener(`click`, this._onWaypointReset);
    document.removeEventListener(`keydown`, this._onWaypointKeyPress);
  }
}

export {
  WaypointEdit
};
