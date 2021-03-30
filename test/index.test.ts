import {getDaysInRange} from '../src/helpers/days';
import {compressDateRange} from '../src/index';

describe('Test helper methods', () => {
  test('getDaysInRange method should return a range of dates including start and end', () => {
    expect(getDaysInRange('20200101', '20200103')).toStrictEqual(['20200101', '20200102', '20200103']);
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
});