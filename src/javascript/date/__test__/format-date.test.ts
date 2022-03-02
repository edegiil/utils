import formatDate from '../format-date';

describe('date/format-date', () => {
  test('YYYY format', () => {
    const time = new Date('2022-02-22');

    const result = formatDate(time, 'YYYY');
    expect(result).toBe('2022');
  });

  test('YYY format', () => {
    const time = new Date('2022-02-22');

    const result = formatDate(time, 'YY');
    expect(result).toBe('22');
  });

  test('YY format', () => {
    const time = new Date('2022-02-22');

    const result = formatDate(time, 'YY');
    expect(result).toBe('22');
  });

  test('MM format with one digit month', () => {
    const time = new Date('2022-02-22');

    const result = formatDate(time, 'MM');
    expect(result).toBe('02');
  });

  test('MM format with two digit month', () => {
    const time = new Date('2022-12-22');

    const result = formatDate(time, 'MM');
    expect(result).toBe('12');
  });

  test('M format with two digit month', () => {
    const time = new Date('2022-12-22');

    const result = formatDate(time, 'M');
    expect(result).toBe('12');
  });

  test('M format with one digit month', () => {
    const time = new Date('2022-02-22');

    const result = formatDate(time, 'M');
    expect(result).toBe('2');
  });

  test('DD format with one digit day', () => {
    const time = new Date('2022-02-22');

    const result = formatDate(time, 'DD');
    expect(result).toBe('22');
  });

  test('DD format with one digit day', () => {
    const time = new Date('2022-02-02');

    const result = formatDate(time, 'DD');
    expect(result).toBe('02');
  });

  test('D format with one digit day', () => {
    const time = new Date('2022-02-02');

    const result = formatDate(time, 'D');
    expect(result).toBe('2');
  });

  test('D format with one digit day', () => {
    const time = new Date('2022-02-22');

    const result = formatDate(time, 'D');
    expect(result).toBe('22');
  });

  test('hh format with one digit hour', () => {
    const time = new Date('2022-02-22 08:24:44');

    const result = formatDate(time, 'hh');
    expect(result).toBe('08');
  });

  test('hh format with two digit hour', () => {
    const time = new Date('2022-02-22 18:24:44');

    const result = formatDate(time, 'hh');
    expect(result).toBe('18');
  });

  test('h format with one digit hour', () => {
    const time = new Date('2022-02-22 08:24:44');

    const result = formatDate(time, 'h');
    expect(result).toBe('8');
  });

  test('h format with two digit hour', () => {
    const time = new Date('2022-02-22 18:24:44');

    const result = formatDate(time, 'h');
    expect(result).toBe('18');
  });

  test('mm format with one digit minutes', () => {
    const time = new Date('2022-02-22 08:04:44');

    const result = formatDate(time, 'mm');
    expect(result).toBe('04');
  });

  test('mm format with two digit minutes', () => {
    const time = new Date('2022-02-22 18:24:44');

    const result = formatDate(time, 'mm');
    expect(result).toBe('24');
  });

  test('m format with one digit minutes', () => {
    const time = new Date('2022-02-22 08:04:44');

    const result = formatDate(time, 'm');
    expect(result).toBe('4');
  });

  test('m format with two digit minutes', () => {
    const time = new Date('2022-02-22 18:24:44');

    const result = formatDate(time, 'm');
    expect(result).toBe('24');
  });

  test('ss format with one digit seconds', () => {
    const time = new Date('2022-02-22 08:04:04');

    const result = formatDate(time, 'ss');
    expect(result).toBe('04');
  });

  test('ss format with two digit seconds', () => {
    const time = new Date('2022-02-22 18:24:44');

    const result = formatDate(time, 'ss');
    expect(result).toBe('44');
  });

  test('s format with one digit seconds', () => {
    const time = new Date('2022-02-22 08:04:04');

    const result = formatDate(time, 's');
    expect(result).toBe('4');
  });

  test('s format with two digit seconds', () => {
    const time = new Date('2022-02-22 18:24:44');

    const result = formatDate(time, 's');
    expect(result).toBe('44');
  });

  test('s format with two digit seconds', () => {
    const time = new Date('2022-02-22 18:24:44');

    const result = formatDate(time, 's');
    expect(result).toBe('44');
  });

  test('A format of PM', () => {
    const time = new Date('2022-02-22 18:24:44');

    const result = formatDate(time, 'A hh');
    expect(result).toBe('오후 06');
  });

  test('A format of AM', () => {
    const time = new Date('2022-02-22 08:24:44');

    const result = formatDate(time, 'A hh');
    expect(result).toBe('오전 08');
  });
});
