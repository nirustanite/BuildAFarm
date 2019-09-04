const {Farm} = require('./index');
const {Wheat, Sugarcane} = require('./crops');
const {Cow, Pig, Horse} = require('./animals');
const farm = require('./printReport')

test('A new Farm can be created', () => {
    const farm = new Farm('Test_Name');
    expect(farm.name).toBe('Test_Name');
})

test('We can add a crop to our farm',() => {
    const farm = new Farm('Test_Name');
    farm.addCrop(new Wheat(100));
})

test('The income of empty farm is 0',() => {
    const farm = new Farm('Test_name');
    expect(farm.calculateIncome()).toBe(0);
})

test('The income of a 100 Wheat + 100 Sugarcame fam is X',() => {
    const farm = new Farm('Test_name');
    farm.addCrop(new Wheat(100));
    farm.addCrop(new Sugarcane(100));
    expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1);
})

test('Animals can be added to the farm', () => {
    const farm = new Farm();
    farm.addAnimal(new Cow(100));
})

test('Animals will be taken into account for calculating Income', () => {
    const farm = new Farm('Test_name');
    farm.addAnimal(new Cow(100));
    expect(farm.calculateIncome()).not.toBe(0);
})

test('Add animals and Crops for calculating Income', () =>{
    const farm = new Farm('Test_name');
    farm.addCrop(new Wheat(100));
    farm.addCrop(new Sugarcane(200));
    farm.addAnimal(new Pig(5));
    farm.addAnimal(new Cow(10));
    farm.addAnimal(new Horse(6));
    expect(farm.calculateIncome()).toBeCloseTo(3178.32,2);
})

farm.printReport()