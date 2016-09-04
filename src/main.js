const exampleReducers = require('./reducers/exampleReducers');
const exampleSelector = require('./selector/exampleSelector');
const compare = require('./util/compare');

let rootState = exampleReducers.initialState();

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

console.log('================================================');
console.log('\x1b[32m%s\x1b[0m', 'With nothing change');
console.time('[With: Selector]');
exampleSelector(rootState);
console.timeEnd('[With: Selector]');

console.time('[With: getVisibleData]');
exampleReducers.getVisibleData(rootState);
console.timeEnd('[With: getVisibleData]');
console.log('================================================\n');

console.log('================================================');
console.log('\x1b[36m%s\x1b[0m', 'Change pagination condition [start: 0 => 100, end: 10 => 800]');
rootState.filter = rootState.filter.mergeIn(['pagination'], {start: 100, end: 800});
console.time('[With: Selector]');
exampleSelector(rootState);
console.timeEnd('[With: Selector]');

console.time('[With: getVisibleData]');
exampleReducers.getVisibleData(rootState);
console.timeEnd('[With: getVisibleData]');
console.log('================================================\n');

console.log('================================================');
console.log('\x1b[33m%s\x1b[0m', 'Change sorting condition [sortingKey: AP_ID => _id]');
rootState.filter = rootState.filter.mergeIn(['sortingCondition'], {sortingKey: '_id'});

console.time('[With: Selector]');
let test = exampleSelector(rootState);
console.timeEnd('[With: Selector]');

console.time('[With: getVisibleData]');
exampleReducers.getVisibleData(rootState);
console.timeEnd('[With: getVisibleData]');
console.log('================================================\n');
