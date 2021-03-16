module.exports = function repeater(str, options) {
  let extendedStr = ''
  let extendedStrings = []
  let additionalStr = ''
  let additionalStrings = []
  const hasOption = option => {
    return Object.keys(options).includes(option)
  }

  if(hasOption('addition')) {
    if(options.addition === null) options.addition = 'null'
    if(typeof options.addition !== 'string') options.addition.toString()
    additionalStrings.push(options.addition)
    if(hasOption('additionRepeatTimes')) {
      additionalStrings.length = options.additionRepeatTimes
      additionalStrings.fill(additionalStrings[0], 1)
    }
    if(hasOption('additionSeparator')) {
      additionalStr = additionalStrings.join(options.additionSeparator)
    } else {
      additionalStr = additionalStrings.join('|')
    }
  }
  if(str === null) str = 'null'
  if(typeof str !== 'string') str.toString()
  extendedStrings.push(`${str}${additionalStr}`)
  if(hasOption('repeatTimes')) {
    extendedStrings.length = options.repeatTimes
    extendedStrings.fill(extendedStrings[0], 1)
  }
  if(hasOption('separator')) {
    extendedStr = extendedStrings.join(options.separator)
  } else {
    extendedStr = extendedStrings.join('+')
  }

  return extendedStr
};
  