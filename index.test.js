const suffix = require('./index').default;

describe('Suffixing values', () => {
  it('does not handle negative numbers', () => {
    expect(suffix(-10000)).toEqual(0);
  });

  it('handles numbers with scientific notation', () => {
    expect(suffix(1e8, 3)).toEqual('100M');
  });

  it('will not suffix numbers under 100 by default', () => {
    expect(suffix(0)).toEqual(0);
    expect(suffix(10)).toEqual(10);
    expect(suffix(99)).toEqual(99);
  });

  it('will suffix numbers to closest metric value by default', () => {
    expect(suffix(100)).toEqual('1.0h');
    expect(suffix(1000)).toEqual('1.0k');
    expect(suffix(10001)).toEqual('10k');
    expect(suffix(100001)).toEqual('100k');
    expect(suffix(1000001)).toEqual('1.0M');
  });

  it('will lock point precision based on argument', () => {
    expect(suffix(1000, 2)).toEqual('1.0k');
    expect(suffix(100000, 4)).toEqual('100.0k');
  });

  it('will round numbers to point precision', () => {
    expect(suffix(481516, 5)).toEqual('481.52k');
  });
});
