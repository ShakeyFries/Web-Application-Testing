const show = require('./Display');

describe('Display module', () => {
  describe('sum function for strikes', () => {
    it('will be strike 1', () => {
      const expectedOutput = 1;
      const actualOutput = show.sum(1);
      expect(actualOutput).toBe(expectedOutput)
    });
    it('will be strike 2', () => {
      const expectedOutput = 2;
      const actualOutput = show.sum(1,1);
      expect(actualOutput).toBe(expectedOutput)
    });
    it('will be strike 3', () => {
      const expectedOutput = 3;
      const actualOutput = show.sum(1,1,1);
      expect(actualOutput).toBe(expectedOutput)
    });
  });
  describe('display module', () => {
    describe('sum function for balls', () => {
      it('will be ball 1', () => {
        const expectedOutput = 1;
        const actualOutput = show.sum(1);
        expect(actualOutput).toBe(expectedOutput)
      })
      it('will be ball 2', () => {
        const expectedOutput = 2;
        const actualOutput = show.sum(1,1);
        expect(actualOutput).toBe(expectedOutput)
      });
      it('will be ball 3', () => {
        const expectedOutput = 3;
        const actualOutput = show.sum(1,1,1);
        expect(actualOutput).toBe(expectedOutput)
      });
      it('will be ball 4', () => {
        const expectedOutput = 4;
        const actualOutput = show.sum(1,1,1,1);
        expect(actualOutput).toBe(expectedOutput)
      });
    });
  });
  describe('display module', () => {
    describe('sum function for fouls', () => {
      it('will be foul 1', () => {
        const expectedOutput = 1;
        const actualOutput = show.sum(1);
        expect(actualOutput).toBe(expectedOutput)
      });
      it('will be foul 2', () => {
        const expectedOutput = 2;
        const actualOutput = show.sum(1,1);
        expect(actualOutput).toBe(expectedOutput)
      });
      it('will be foul 3', () => {
        const expectedOutput = 3;
        const actualOutput = show.sum(1,1,1);
        expect(actualOutput).toBe(expectedOutput)
    });
  })
})
})