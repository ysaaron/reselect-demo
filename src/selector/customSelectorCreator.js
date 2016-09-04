const reselect = require('reselect');
const Immutable = require('immutable');

const defaultMemoize = reselect.defaultMemoize;
const createSelectorCreator = reselect.createSelectorCreator;

/**
 * To create a custom selector creator for immutable object.
 *
 * Default custom selector creator use "===" to detect the state is changed,
 * but it's only can be used simple type like string|number etc.
 */
const createImmutableEqualsSelector = createSelectorCreator(defaultMemoize, Immutable.is);

module.exports = createImmutableEqualsSelector;
