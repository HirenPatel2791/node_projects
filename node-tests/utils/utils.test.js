const expect = require('expect');
const utils = require('./utils');

it("should add two numbers", () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if(res != 44)
    //     throw new Error(`Expected 44, but got ${res}`);
});

it("should square two numbers", () => {
    var res = utils.square(3);
    // if(res != 9)
    //     throw new Error(`Expected 9, but got ${res}`);
    expect(res).toBe(9).toBeA('number');
});

it("should expect some value", () => {
    // expect(12).toNotBE(12);
    // expect({ name : 'Hiren' }).toNotEqual({ name: Hiren});

    //expect([2, 3, 4]).toExclude(1);

    expect({
        name: 'Hiren',
        location: 'NJ',
        age:25
    }).toInclude({
        age: 25
    });
});

it("should verify first and last name", () => {
    var user;
    var res = utils.setName( user, 'Hiren Patel');

    expect(res).toInclude({
        firstName: 'Hiren',
        lastName: 'Patel'
    })
});