const Immutable = require('immutable');
const source = require('../datasource/data');
const compare = require('../util/compare');

/**
 * To generate an example state
 */
const initialState = () => {
  const initialFilterState = Immutable.fromJS({
    sortingCondition: {
      orderBy: 'asc',
      sortingKey: '_id'
    },
    pagination: {
      start: 0,
      end: 10
    }
  });
  const initialDataSourceState = Immutable.fromJS(source);

  return {
    filter: initialFilterState,
    data: initialDataSourceState
  };
}

const getSortingState = (state) => state.filter.get('sortingCondition')

const getPaginationState = (state) => state.filter.get('pagination')

const getDataState = (state) => state.data

/**
 * Sorting and paginating immutable data source
 * @param  {any} state root state tree
 * @return {Array}       data result with array
 */
const getVisibleData = (state) => {
  let sortingKey = state.filter.getIn(['sortingCondition', 'sortingKey']),
      orderBy = state.filter.getIn(['sortingCondition', 'orderBy']) === 'asc' ? 1 : -1,
      start = state.filter.getIn(['pagination', 'start']),
      end = state.filter.getIn(['pagination', 'end']);

  return state.data
          .sortBy(data => data.get(sortingKey), (v, k) => orderBy * compare(v, k))
          .slice(start, end)
          .toList()
          .toJS();
}

module.exports = {
  initialState,
  getSortingState,
  getPaginationState,
  getDataState,
  getVisibleData
}
