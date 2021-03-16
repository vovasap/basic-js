module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  return members.filter(el => typeof el === 'string').map(str => str.trim().slice(0, 1).toUpperCase()).sort().join('')
};
