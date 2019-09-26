/**
 * Отрисовка фильтра
 * @param {string} filterName
 * @param {boolean} isChecked
 * @return {string}
 */
export default (filterName, isChecked = false) => {
  const checkedText = isChecked ? `checked` : ``;
  return `
    <div class="trip-filters__filter">
      <input id="filter-${filterName}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterName}" ${checkedText}>
      <label class="trip-filters__filter-label" for="filter-${filterName}">${filterName}</label>
    </div>
  `;
};
