/**
 * Returns the array with the smallest grade dropped
 * @param {Array} array
 * @returns {Array}
 */
const dropSmallest = (grades) => {
  // Find the smallest value
  const smallestValue = Math.min(...grades);

  // Find the index of the smallest value
  const smallestIndex = grades.indexOf(smallestValue);

  // Remove the smallest value from the array
  if (smallestIndex !== -1) {
    grades.splice(smallestIndex, 1);
  }

  return grades;
};

export default dropSmallest;
