import checkToday from '../check-today';

describe('date/check-today', () => {
  test('return true with Date', () => {
    const time = new Date();

    const result = checkToday(time);
    expect(result).toBe(true);
  });

  test('return true with string', () => {
    const time = new Date().toDateString();

    const result = checkToday(time);
    expect(result).toBe(true);
  });

  test('return true with number', () => {
    const time = new Date().getTime();

    const result = checkToday(time);
    expect(result).toBe(true);
  });

  test('return false because time Date is not today ', () => {
    const time = new Date(0);

    const result = checkToday(time);

    expect(result).toBe(false);
  });

  test('return false because time string is not today', () => {
    const time = new Date(0).toDateString();

    const result = checkToday(time);
    expect(result).toBe(false);
  });

  test('return false because time number is not today', () => {
    const time = 0;

    const result = checkToday(time);
    expect(result).toBe(false);
  });

  test('return error because time is not valid Date', () => {
    const time = {};

    expect(() => checkToday(time as Date)).toThrow();
  });

  test('return error because time is not correct string format', () => {
    const time = 'hello~~';

    expect(() => checkToday(time)).toThrow();
  });

  test('return error because time is not correct number format', () => {
    const time = Number.MAX_SAFE_INTEGER;

    expect(() => checkToday(time)).toThrow();
  });
});
