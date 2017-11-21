const numericalSuffix = require('./');

describe('value-suffix tests', () => {
  it('should return expected results', () => {
    expect(numericalSuffix(42)).toEqual(42);
    expect(numericalSuffix(999)).toEqual(999);
    expect(numericalSuffix(1000)).toEqual('1.0k');

    expect(numericalSuffix(1234, 2)).toEqual('1.2k');
    expect(numericalSuffix(12345, 2)).toEqual('12k');
    expect(numericalSuffix(123456, 2)).toEqual('123k');

    expect(numericalSuffix(1234, 3)).toEqual('1.23k');
    expect(numericalSuffix(12345, 3)).toEqual('12.3k');
    expect(numericalSuffix(123456, 3)).toEqual('123k');

    expect(numericalSuffix(1234, 4)).toEqual('1.234k');
    expect(numericalSuffix(12345, 4)).toEqual('12.35k');
    expect(numericalSuffix(123456, 4)).toEqual('123.5k');

    expect(numericalSuffix(986725)).toEqual('987k');
    expect(numericalSuffix(986725, 4)).toEqual('986.7k');
    expect(numericalSuffix(986725123)).toEqual('987M');
    expect(numericalSuffix(986725123, 5)).toEqual('986.73M');
  });
});
