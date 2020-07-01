let isLeapYear = require('../src/04')

test("2000 is Leap Year", () => {
    expect(isLeapYear(2000)).toBe(true);
})

test("2001 is not a Leap Year", () => {
    expect(isLeapYear(2001)).toBe(false);
})