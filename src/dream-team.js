const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(inputArray) {
  if(!Array.isArray(inputArray)) return false

  const correctedArray = inputArray
    .filter(name => typeof name === "string")
    .map(element => {
      const tmp = element.replace(/\s/g, "")
      return tmp[0].toUpperCase()
    })
    .sort((a, b) => {
      if(a > b) return 1
      if(a < b) return -1
      return 0
    })
  
  return correctedArray.join("")
}

module.exports = {
  createDreamTeam
};
