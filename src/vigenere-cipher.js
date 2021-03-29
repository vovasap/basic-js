class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  isStraight
  constructor(isStraight = true) {
    this.isStraight = isStraight
  }
  encrypt(message, key) {
    message = message.toUpperCase()
    key = key.toUpperCase()
    let encryptedMessage = ''
    let letterIndex = 0
    for(let i=0; i<message.length; i++){
      if(this.alphabet.indexOf(message[i]) !== -1){
        const messageIndex = this.alphabet.indexOf(message[i])
        const keyIndex = this.alphabet.indexOf(key[letterIndex>key.length-1 ? letterIndex%key.length : letterIndex])
        const encryptedIndex = messageIndex + keyIndex
        const encryptedChar = this.alphabet[encryptedIndex > this.alphabet.length - 1 ? encryptedIndex % this.alphabet.length : encryptedIndex]
        encryptedMessage += encryptedChar
        letterIndex++
      } else {
        encryptedMessage += message[i]
      }
    }
    if(!this.isStraight) {
      return encryptedMessage.split('').reverse().join('')
    }
    return encryptedMessage
  }
  decrypt(cyphre, key) {
    key = key.toUpperCase()
    let decryptedMessage = ''
    let letterIndex = 0
    for(let i=0; i<cyphre.length; i++){
      if(this.alphabet.indexOf(cyphre[i]) !== -1){
        const cyphreIndex = this.alphabet.indexOf(cyphre[i])
        const keyIndex = this.alphabet.indexOf(key[letterIndex>key.length-1 ? letterIndex%key.length : letterIndex])
        const decryptedIndex = cyphreIndex - keyIndex < 0 ? cyphreIndex + this.alphabet.length - keyIndex : cyphreIndex - keyIndex
        const decryptedChar = this.alphabet[decryptedIndex]
        decryptedMessage += decryptedChar
        letterIndex++
      } else {
        decryptedMessage += cyphre[i]
      }
    }
    if(!this.isStraight) {
      return decryptedMessage.split('').reverse().join('')
    }
    return decryptedMessage
  }
}

module.exports = VigenereCipheringMachine;
