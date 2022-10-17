const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(inputArr) {
  if (!Array.isArray(inputArr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (inputArr.length === 0) return [];

  let newArray = [...inputArr];

  let val = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];

  newArray.map((item) => {
    if (val.includes(item)) {
      let sequence = newArray.indexOf(item);

      switch (item) {
        case val[0]: //--discard-next
          if (sequence !== newArray.length - 1)
            newArray.splice(sequence + 1, 1);
          break;

        case val[1]: //--discard-prev
          if (sequence !== 0) newArray.splice(sequence - 1, 1);
          break;

        case val[2]: //--double-next
          if (sequence !== newArray.length - 1)
            newArray[sequence] = newArray[sequence + 1];
          break;

        case val[3]: //--double-prev
          if (sequence !== 0) newArray[sequence] = newArray[sequence - 1];
          break;

        default:
          return newArray;
      }
    }
  });

  return newArray.filter((item) => !val.includes(item));
}

console.log(transform(["--discard-prev", 1, 2, 3]));

module.exports = {
  transform,
};
