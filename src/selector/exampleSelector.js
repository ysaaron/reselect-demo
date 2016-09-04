const createImmutableEqualsSelector = require('./customSelectorCreator');
const compare = require('../util/compare');
const exampleReducers = require('../reducers/exampleReducers');

/**
 * Get state function
 */
const getSortingState = exampleReducers.getSortingState;
const getPaginationState = exampleReducers.getPaginationState;
const getDataState = exampleReducers.getDataState;

/**
 * Sorting immutable data source
 * @param  {Map} source           immutable data source
 * @param  {string} sortingKey       property of data
 * @param  {string} orderByCondition 'asc' or 'desc'
 * @return {List}                  immutable testing data source with sorting
 */
const sortingData = (source, sortingKey, orderByCondition) => {
  let orderBy = orderByCondition === 'asc' ? 1 : -1;

  return source.sortBy(data => data.get(sortingKey), (v, k) => orderBy * compare(v, k));
}

/**
 * Paginating data from sortingSelector
 * @param  {List} sortedData immutable data source with sorting
 * @param  {number} start
 * @param  {number} end
 * @return {array}            sorting data with pagination and converting Immutable.List to array
 */
const pagination = (sortedData, start, end) => sortedData.slice(start, end).toList().toJS()

/**
 * Partial selector only to do sorting
 */
const sortingSelector = createImmutableEqualsSelector(
  [
    getDataState, // get data source
    getSortingState
  ],
  (dataState, sortingCondition) => sortingData(dataState, sortingCondition.get('sortingKey'), sortingCondition.get('orderBy'))
)
/**
 * Root selector to paginate data from sortingSelector
 */
const paginationSelector = createImmutableEqualsSelector(
  [
    sortingSelector, // bind selector to be new data source
    getPaginationState
  ],
  (sortedData, paginationCondition) => pagination(sortedData, paginationCondition.get('start'), paginationCondition.get('end'))
)

module.exports = paginationSelector;
