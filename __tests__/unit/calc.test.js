const sum = require('../../src/utils/sum')

describe('Test calc', () => {
    it('should sum', () => {
        const sumTwo = sum(2);
        const result = sumTwo(4);

        expect(result).toBe(6);
    });

    it("should sum failed", () => {
        const sumTwo = sum(2);
        const result = sumTwo(3);

        expect(result).not.toBe(6);
    });
});