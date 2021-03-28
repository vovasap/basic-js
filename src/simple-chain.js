const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length
  },
  addLink(value = '( )') {
    if(value === null) value = 'null'
    this.chains.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if(!this.chains[position] || typeof position !== 'number' || !Number.isInteger(position)) {
      this.chains = []
      throw new Error()
    }
    this.chains.splice(position-1,1)
    return this
  },
  reverseChain() {
    this.chains.reverse()
    return this
  },
  finishChain() {
    const r = this.chains.join('~~')
    this.chains = []
    return r
  }
};

module.exports = chainMaker;
