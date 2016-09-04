const isPlainObject = require('lodash/isPlainObject');
const isArray = require('lodash/isArray');
const isNull = require('lodash/isNull');
const isUndefined = require('lodash/isUndefined');

const isNullOrUndefined = (v) => isNull(v) || isUndefined(v)

/**
 * Simple compare function
 * @param  {(string|number|boolean|date)} v
 * @param  {(string|number|boolean|date)} k
 * @return {number}   comparing result with 0, 1, -1
 */
module.exports = function compare(v, k) {
  if(isNullOrUndefined(v) || isNullOrUndefined(k))
    throw new Error('Input value cannot be null or undefined');

  if(isPlainObject(v) || isPlainObject(k))
    throw new Error('Input can only be string, integer, date');

  if(v !== k) {
    if(v > k)
      return 1;

    if(v < k)
      return -1;
  }

  return 0;
}
