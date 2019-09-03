const {Farm} = require('./index')

test('A new Farm can be created', () => {
    const farm = new Farm('Test_Name');
    expect(farm.name).toBe('Test_Name');
})