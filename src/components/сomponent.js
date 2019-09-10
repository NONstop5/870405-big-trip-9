class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate BaseComponent, only concrete one.`);
    }
    this._element = null;

    this._state = {};
  }

  /**
   * Получаем шаблон элемента
   */
  get template() {
    throw new Error(`You have to define template() method.`);
  }

  /**
   * Получаем ссылку на текущий елемент
   */
  get element() {
    return this._element;
  }

  /**
   * Создаем обработчики событий
   */
  addEvents() {
    throw new Error(`You have to define addEvents() method.`);
  }

  /**
   * Удаляем обработчики событий
   */
  removeEvents() {
    throw new Error(`You have to define removeEvents() method.`);
  }

  /**
   * Отрисовываем элемент
   * @return {link}
   */
  render() {
    this._element = null || document.createElement(`div`);

    this._element.innerHTML = this.template;
    this._element = this._element.firstElementChild;

    this.addEvents();

    return this._element;
  }

  /**
   * Стираем элемент
   */
  unrender() {
    this.removeEvents();
    this._element = null;
  }
}

export {
  Component
};
