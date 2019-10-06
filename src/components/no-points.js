import {Component} from "./сomponent";

export class NoPoint extends Component {
  /**
   * Получаем шаблон элемента
   * @return {string}
   */
  get template() {
    return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
  }

  /**
   * Создаем обработчики событий
   */
  addEvents() {}

  /**
   * Удаляем обработчики событий
   */
  removeEvents() {}
}
