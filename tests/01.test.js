let charLength = require('../src/01')

test("Panjang karakter 'Hello' = 5", () => {
    expect(charLength("Hello")).toBe(5);
})