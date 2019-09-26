import {Component} from "./сomponent";

class WaypointEdit extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._typeList = data.typeList;
    this._destination = data.destination;
    this._time = data.time;
    this._duration = data.duration;
    this._price = data.price;
    this._photo = data.photo;
    this._offers = data.offers;
    this._text = data.text;

    this._onSubmit = null;
    this._onReset = null;
    this._onWaypointSubmit = this._onWaypointSubmit.bind(this);
    this._onWaypointReset = this._onWaypointReset.bind(this);
  }

  /**
   * Генерирует html-код оферов
   * @param {array} offerList
   * @return {array}
   */
  _generateOffersHtml(offerList) {
    return offerList.reduce((resultHtml, offerItem) => {
      return resultHtml + `
      <li>
        <button class="trip-point__offer">${offerItem}</button>
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
   * Генерирует html - код фотографий
   * @param {array} photoList
   * @return {string}
   */
  _generatePhotoHtml(photoList) {
    return photoList.reduce((resultHtml, photoItem) => {
      return resultHtml + `<img src="${photoItem}" alt="picture from place" class="point__destination-image">`;
    }, ``);
  }

  /**
   * Генерирует html - типов маршрутов
   * @param {object} type
   * @param {array} typeList
   * @return {string}
   */
  _generateTypeListHtml(type, typeList) {
    return typeList.reduce((resultHtml, typeItem) => {
      return resultHtml + `
            <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-${typeItem.name}" name="travel-way" value="${typeItem.name}" ${typeItem.name === type.name ? `checked` : ``}>
            <label class="travel-way__select-label" for="travel-way-${typeItem.name}">${typeItem.icon} ${typeItem.name}</label>
            `;
    }, ``);
  }

  /**
   * Получаем шаблон элемента
   * @return {string}
   */
  get template() {
    return `
      <article class="point">
        <form action="" method="get">
          <header class="point__header">
            <label class="point__date">
              choose day
              <input class="point__input" type="text" placeholder="MAR 18" name="day">
            </label>

            <div class="travel-way">
              <label class="travel-way__label" for="travel-way__toggle">${this._type.icon}</label>

              <input type="checkbox" class="travel-way__toggle visually-hidden" id="travel-way__toggle">

              <div class="travel-way__select">
                <div class="travel-way__select-group">
                ${this._generateTypeListHtml(this._type, this._typeList)}
                </div>

                <div class="travel-way__select-group">
                  <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-check-in" name="travel-way" value="check-in">
                  <label class="travel-way__select-label" for="travel-way-check-in">🏨 check-in</label>

                  <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-sightseeing" name="travel-way" value="sight-seeing">
                  <label class="travel-way__select-label" for="travel-way-sightseeing">🏛 sightseeing</label>
                </div>
              </div>
            </div>

            <div class="point__destination-wrap">
              <label class="point__destination-label" for="destination">${this._type.name} to</label>
              <input class="point__destination-input" list="destination-select" id="destination" value="${this._destination}" name="destination">
              <datalist id="destination-select">
                <option value="airport"></option>
                <option value="Geneva"></option>
                <option value="Chamonix"></option>
                <option value="hotel"></option>
              </datalist>
            </div>

            <label class="point__time">
              choose time
              <input class="point__input" type="text" value="${this._time}" name="time" placeholder="00:00 — 00:00">
            </label>

            <label class="point__price">
              write price
              <span class="point__price-currency">€</span>
              <input class="point__input" type="text" value="${this._price}" name="price">
            </label>

            <div class="point__buttons">
              <button class="point__button point__button--save" type="submit">Save</button>
              <button class="point__button" type="reset">Delete</button>
            </div>

            <div class="paint__favorite-wrap">
              <input type="checkbox" class="point__favorite-input visually-hidden" id="favorite" name="favorite">
              <label class="point__favorite" for="favorite">favorite</label>
            </div>
          </header>

          <section class="point__details">
            <section class="point__offers">
              <h3 class="point__details-title">offers</h3>

              <div class="point__offers-wrap">
                <input class="point__offers-input visually-hidden" type="checkbox" id="add-luggage" name="offer" value="add-luggage">
                <label for="add-luggage" class="point__offers-label">
                  <span class="point__offer-service">Add luggage</span> + €<span class="point__offer-price">30</span>
                </label>

                <input class="point__offers-input visually-hidden" type="checkbox" id="switch-to-comfort-class" name="offer" value="switch-to-comfort-class">
                <label for="switch-to-comfort-class" class="point__offers-label">
                  <span class="point__offer-service">Switch to comfort class</span> + €<span class="point__offer-price">100</span>
                </label>

                <input class="point__offers-input visually-hidden" type="checkbox" id="add-meal" name="offer" value="add-meal">
                <label for="add-meal" class="point__offers-label">
                  <span class="point__offer-service">Add meal </span> + €<span class="point__offer-price">15</span>
                </label>

                <input class="point__offers-input visually-hidden" type="checkbox" id="choose-seats" name="offer" value="choose-seats">
                <label for="choose-seats" class="point__offers-label">
                  <span class="point__offer-service">Choose seats</span> + €<span class="point__offer-price">5</span>
                </label>
              </div>

            </section>
            <section class="point__destination">
              <h3 class="point__details-title">Destination</h3>
              <p class="point__destination-text">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
              <div class="point__destination-images">
                ${this._generatePhotoHtml(this._photo)}
              </div>
            </section>
            <input type="hidden" class="point__total-price" name="total-price" value="">
          </section>
        </form>
      </article>
  `;
  }

  _onWaypointSubmit() {
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  _onWaypointReset() {
    if (typeof this._onReset === `function`) {
      this._onReset();
    }
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  set onReset(fn) {
    this._onReset = fn;
  }

  /**
   * Создаем обработчики событий
   */
  addEvents() {
    const pointBtnSubmitElem = this._element.querySelector(`.point__button--save`);
    const pointBtnResetElem = this._element.querySelector(`[type="reset"]`);
    pointBtnSubmitElem.addEventListener(`click`, this._onWaypointSubmit);
    pointBtnResetElem.addEventListener(`click`, this._onWaypointReset);
  }

  /**
   * Удаляем обработчики событий
   */
  removeEvents() {
    const pointBtnSubmitElem = this._element.querySelector(`.point__button--save`);
    const pointBtnResetElem = this._element.querySelector(`[type="reset"]`);
    pointBtnSubmitElem.removeEventListener(`click`, this._onWaypointSubmit);
    pointBtnResetElem.removeEventListener(`click`, this._onWaypointReset);
  }
}

export {
  WaypointEdit
};
