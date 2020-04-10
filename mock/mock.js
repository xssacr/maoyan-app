const dataset = require('./hotshowing.json');

module.exports = () => {
  return {
    hotshowing: dataset.datalist
  }
}