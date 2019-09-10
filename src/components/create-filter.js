/**
 * Отрисовка фильтра
 * @param {string} filterName
 * @param {boolean} isChecked
 * @return {string}
 */
export default (filterName, isChecked = false) => {
  const checkedText = isChecked ? `checked` : ``;
  return `
    <input type="radio" id="filter-${filterName}" name="filter" value="${filterName}" ${checkedText}>
    <label class="trip-filter__item" for="filter-${filterName}">${filterName}</label>
  `;
};
