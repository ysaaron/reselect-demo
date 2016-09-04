const exampleReducers = require('./reducers/exampleReducers');
const exampleSelector = require('./selector/exampleSelector');
const compare = require('./util/compare');

let rootState = exampleReducers.initialState();

/**
 * start: 500
 * end: 4000
 * sortingKey: _id
 * orderBy: asc
 */
console.log('================================================');
console.log('\x1b[36m%s\x1b[0m', 'Change pagination condition [start: 0 => 500, end: 10 => 4000]');
rootState.filter = rootState.filter.mergeIn(['pagination'], {start: 500, end: 4000});

console.time('[With: Selector]');
exampleSelector(rootState);
console.timeEnd('[With: Selector]');

console.time('[With: getVisibleData]');
exampleReducers.getVisibleData(rootState);
console.timeEnd('[With: getVisibleData]');
console.log('================================================\n');

/**
 * start: 500
 * end: 4000
 * sortingKey: AP_ID
 * orderBy: desc
 */
console.log('================================================');
console.log('\x1b[33m%s\x1b[0m', 'Change sorting condition [sortingKey: _id => AP_ID, orderBy: asc => desc]');
rootState.filter = rootState.filter.mergeIn(['sortingCondition'], {sortingKey: 'AP_ID', orderBy: 'desc'});

console.time('[With: Selector]');
exampleSelector(rootState);
console.timeEnd('[With: Selector]');

console.time('[With: getVisibleData]');
exampleReducers.getVisibleData(rootState);
console.timeEnd('[With: getVisibleData]');
console.log('================================================\n');

/**
 * start: 500
 * end: 4000
 * sortingKey: AP_ID
 * orderBy: desc
 *
 * Recaculate again
 */
console.log('================================================');
console.log('\x1b[32m%s\x1b[0m', 'With nothing change');
console.time('[With: Selector]');
exampleSelector(rootState);
console.timeEnd('[With: Selector]');

console.time('[With: getVisibleData]');
exampleReducers.getVisibleData(rootState);
console.timeEnd('[With: getVisibleData]');
console.log('================================================\n');

/**
 * start: 100
 * end: 800
 * sortingKey: AP_ID
 * orderBy: desc
 */
console.log('================================================');
console.log('\x1b[36m%s\x1b[0m', 'Change pagination condition [start: 500 => 100, end: 4000 => 800]');
rootState.filter = rootState.filter.mergeIn(['pagination'], {start: 100, end: 800});
console.time('[With: Selector]');
exampleSelector(rootState);
console.timeEnd('[With: Selector]');

console.time('[With: getVisibleData]');
exampleReducers.getVisibleData(rootState);
console.timeEnd('[With: getVisibleData]');
console.log('================================================\n');

/**
 * start: 350
 * end: 800
 * sortingKey: _id
 * orderBy: desc
 */
console.log('================================================');
console.log('\x1b[33m%s\x1b[0m', 'Change sorting & pagination condition [sortingKey: AP_ID => _id, start: 100 => 350]');
rootState.filter = rootState.filter
                              .mergeIn(['sortingCondition'], {sortingKey: '_id',})
                              .mergeIn(['pagination'], {start: 350});

console.time('[With: Selector]');
exampleSelector(rootState);
console.timeEnd('[With: Selector]');

console.time('[With: getVisibleData]');
exampleReducers.getVisibleData(rootState);
console.timeEnd('[With: getVisibleData]');
console.log('================================================\n');
