const {Farm} = require('./index');
const {Sugarcane, Wheat} = require('./crops');
const {Cow, Pig, Horse} = require('./animals');

const farm = new Farm('Farm 1');
farm.addCrop(new Wheat(100));
farm.addCrop(new Sugarcane(200));
farm.addAnimal(new Pig(5));
farm.addAnimal(new Cow(10));
farm.addAnimal(new Horse(6));

module.exports = farm
