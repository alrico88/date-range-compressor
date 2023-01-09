import { describe, test, expect, it } from 'vitest';
import {
  compressDateRange,
  getDaysInRange,
  getMonthsInRange,
  getYearsInRange,
} from '../src/index';

describe('Test helper methods', () => {
  test('getDaysInRange method should return a range of dates including start and end', () => {
    expect(getDaysInRange('20200101', '20200103')).toStrictEqual([
      '20200101',
      '20200102',
      '20200103',
    ]);
  });

  test('getMonthsInRange method should return a range of months including start and end', () => {
    expect(getMonthsInRange('20200101', '20200331')).toStrictEqual([
      '202001',
      '202002',
      '202003',
    ]);
  });

  test('getYearsInRange method should return a range of years including start and end', () => {
    expect(getYearsInRange('20200101', '20230401')).toStrictEqual([
      '2020',
      '2021',
      '2022',
    ]);
  });
});

describe('Test if compression works', () => {
  it('Should detect full years and months, and output the rest as days', () => {
    const expectedResponse = {
      years: ['2020'],
      months: ['202101', '202102'],
      days: [...getDaysInRange('20191205', '20191231'), '20210301'],
    };
    expect(compressDateRange('20191205', '20210301')).toEqual(expectedResponse);
  });

  it('Should output only days if range is in same month', () => {
    const { years, months, days } = compressDateRange('20200101', '20200103');
    expect([years, months, days]).toStrictEqual([
      [],
      [],
      ['20200101', '20200102', '20200103'],
    ]);
  });

  it('Should accept other input formats and output the full months and separate days', () => {
    const { years, months, days } = compressDateRange(
      '2020-01-01',
      '2020-03-01'
    );
    expect([years, months, days]).toStrictEqual([
      [],
      ['202001', '202002'],
      ['20200301'],
    ]);
  });

  it('Should return the same result regardless of the format if the input range is the same', () => {
    const resultYYYYMMDD = compressDateRange('20200101', '20200301');
    const resultWithDashes = compressDateRange('2020-01-01', '2020-03-01');
    expect(resultYYYYMMDD).toStrictEqual(resultWithDashes);
  });

  it('Should detect that a single month with its full dates range should be compressed', () => {
    const { months } = compressDateRange('2020-01-01', '2020-01-31');
    expect(months).toStrictEqual(['202001']);
  });

  it('Should detect that a single month without its full dates range should not be compressed', () => {
    const { months } = compressDateRange('2020-01-01', '2020-01-30');
    expect(months).toStrictEqual([]);
  });
});
