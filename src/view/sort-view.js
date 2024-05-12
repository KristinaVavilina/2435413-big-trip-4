import AbstractView from '../framework/view/abstract-view.js';
import { SortType } from '../const.js';

const createSortTemplate = () => {
  let result = '';
  let sortL = '';

  Object.values(SortType).forEach((sort) => {
    sortL = sort.toLowerCase();

    result += `<div class="trip-sort__item  trip-sort__item--${sortL}">
      <input id="sort-${sortL}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortL}" ${sort === SortType.DAY ? 'checked' : ''}>
      <label class="trip-sort__btn" for="sort-${sortL}">${sort}</label>
    </div>`;
  });

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${result}
          </form>`;
};

export default class SortView extends AbstractView {
  #numberSort = null;
  #onSortComponentClick = null;

  constructor(numberSort, onComponentSortClick) {
    super();

    this.#numberSort = numberSort;
    this.#onSortComponentClick = onComponentSortClick;

    this.element.querySelectorAll('.trip-sort__btn').forEach((sortButtonElement) =>
      sortButtonElement.addEventListener('click', this.#onSortComponentClick));
  }

  get template() {
    return createSortTemplate(this.#numberSort);
  }
}
