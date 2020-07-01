let mbToKb = require('../src/03')

test("1MB = 1024 Kb", () => {
    expect(mbToKb(1)).toBe(1024);
})

test("5MB = 5120 Kb", () => {
    expect(mbToKb(5)).toBe(5120);
})