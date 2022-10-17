const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(inputValue) {
  if(typeof inputValue !== "string" || !+inputValue || +inputValue < 0 || +inputValue > 15) return false

  let AdivA0 = MODERN_ACTIVITY / +inputValue
  let k = 0.693 / HALF_LIFE_PERIOD
  let t = Math.log(AdivA0) / k
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
