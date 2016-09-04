const reselect = require('reselect');
const Immutable = require('immutable');

const defaultMemoize = reselect.defaultMemoize;
const createSelectorCreator = reselect.createSelectorCreator;

const createImmutableEqualsSelector = createSelectorCreator(defaultMemoize, Immutable.is);

module.exports = createImmutableEqualsSelector;
