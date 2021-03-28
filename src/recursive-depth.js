const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1
    let depth = 1
    if(arr.length) {
      arr.forEach(el=>{
        if(Array.isArray(el)) {
          depth += this.calculateDepth(el)
        }
        if(maxDepth < depth) {
          maxDepth = depth
        }
        depth = 1
      })
    }
    return maxDepth
  }
};