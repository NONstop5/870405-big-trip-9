import {Component} from "./сomponent";

export class Waypoint extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._destination = data.destination;
    this._timeStart = data.timeStart;
    this._timeEnd = data.timeEnd;
    this._duration = data.duration;
    this._price = data.price;
    this._photo = data.photo;
    this._offers = data.offers;
    this._text = data.text;

    this._onClick = null;
    this._onWaypointClick = this._onWaypointClick.bind(this);
  }

  /**
   * Генерирует html-код оферов
   * @param {array} offerList
   * @return {array}
   */
  _generateOffersHtml(offerList) {
    return offerList.reduce((resultHtml, offerItem) => {
      return resultHtml + `
        <li class="event__offer">
          <span class="event__offer-title">${offerItem.title}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${offerItem.price}</span>
        </li>
    `;
    }, ``);
  }

  /**
   * Генерирует html - код текстовых предложений
   * @param {array} textList
   * @return {string}
   */
  _generateTextHtml(textList) {
    return textList.reduce((resultHtml, textItem) => {
      return resultHtml + `${textItem}<br>`;
    }, ``);
  }

  /**
   * Получаем шаблон элемента
   * @return {string}
   */
  get template() {
    return `
      <li class="trip-events__item">
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/${this._type.toLowerCase()}.png" alt="Event type icon">
          </div>
          <h3 class="event__title">${this._type} to ${this._destination}</h3>
  
          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T${this._timeStart}">${this._timeStart}</time>
              &mdash;
              <time class="event__end-time" datetime="2019-03-18T${this._timeEnd}">${this._timeEnd}</time>
            </p>
            <p class="event__duration">${this._duration}</p>
          </div>
  
          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${this._price}</span>
          </p>
  
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
            ${this._generateOffersHtml(this._offers)}
          </ul>
  
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>
  `;
  }

  _onWaypointClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  /**
   * Создаем обработчики событий
   */
  addEvents() {
    this._element.addEventListener(`click`, this._onWaypointClick);
  }

  /**
   * Удаляем обработчики событий
   */
  removeEvents() {
    this._element.removeEventListener(`click`, this._onWaypointClick);
  }
}
