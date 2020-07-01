const bilanganPrima = require('../src/05')

test("2 = bilangan prima", () => {
    expect(bilanganPrima(2)).toBe(true);
})

test("4 = bukan bilangan prima", () => {
    expect(bilanganPrima(4)).toBe(false);
})