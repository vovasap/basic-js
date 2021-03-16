module.exports = function countCats(backyard) {
  let counter = 0
  backyard.forEach(arr => {
    counter += arr.filter(el => el === '^^').length
  })

  return counter
};

