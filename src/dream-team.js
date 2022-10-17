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
function createDreamTeam(members) {

  if (members.length < 1 && typeof members !== "string") {
    return false;
  } else {
  
    let trimElements = members.map(function(withoutSpaces) {
      return withoutSpaces.trim();
    });

    let membersFirstLetter = trimElements.map(function(letter) {
      return letter[0];
    });

    let abbr = membersFirstLetter.sort().join('').toUpperCase();
    return abbr;
  }
}

//+ 'should return sequence from pre-sorted array'
//+ 'should return sorted sequence'
//+ 'empty team shouldn\'t lead to error'
//+ 'should handle whitespaces'
//+ 'should handle lowercase' 
//  'should return false on wrong type'
//+ 'should ignore non-string values' 
//  'should handle non-standard cases'


module.exports = {
  createDreamTeam
};
