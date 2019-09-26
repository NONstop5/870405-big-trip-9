import {Component} from './сomponent';

export class TripDay extends Component {
  constructor(day, dayIndex) {
    super();
    this._day = day;
    this._dayIndex = dayIndex;
    this._element = null;
  }

  get template() {
    return `
      <li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${this._dayIndex + 1}</span>
          <time class="day__date" datetime="${this._day}">MAR 18</time>
        </div>
    
        <ul class="trip-events__list">
        </ul>
      </li>
    `;
  }

  /**
   * Создаем обработчики событий
   */
  addEvents() {}
}
