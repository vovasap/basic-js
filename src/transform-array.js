module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error()
  let convertedArr = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '--discard-next') {
      if (arr.length > i + 1) {
        i++
      }
    } else if (arr[i] === '--discard-prev') {
      if(i > 0 && convertedArr.length - 1 >= 0 && arr[i - 2] !== '--discard-next') {
        convertedArr.pop()
      }
    } else if (arr[i] === '--double-next') {
      if (arr.length > i + 1) {
        convertedArr.push(arr[i + 1])
        convertedArr.push(arr[i + 1])
        i++
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        convertedArr.push(arr[i - 1])
      }
    } else {
      convertedArr.push(arr[i])
    }
  }

  return convertedArr
};
