const dataset = require('./hotshowing.json');
const mostexpected = require('./mostexpected.json')

module.exports = () => {
  return {
    hotshowing: dataset.datalist,
    mostexpected: mostexpected.coming
  }
}