import dayjs from 'dayjs';
import {DateFormats} from './format';
import {padNumber} from './padder';
import {parseDate} from './parser';

/**
 * Gets the days in range between to days
 *
 * @export
 * @param {string} start YYYYMMDD to start the range
 * @param {string} end YYYYMMDD to end the range
 * @param {string[]} [excludedMonths=[]] The months to exclude in range YYYYMM
 * @param {string[]} [excludedYears=[]] The years to exclude in range YYYY
 * @return {string[]} The days range
 */
export function getDaysInRange(start: string, end: string, excludedMonths: string[] = [], excludedYears: string[] = []): string[] {
  const differenceInDays = dayjs(end, DateFormats.Day).diff(dayjs(start, DateFormats.Day), 'days');

  let range: string[] = [];

  for (let i = 0; i <= differenceInDays; i++) {
    range.push(dayjs(start, DateFormats.Day).add(i, 'days').format(DateFormats.Day));
  }

  if (excludedYears.length > 0) {
    range = range.filter((d) => {
      const {year} = parseDate(d);

      return excludedYears.includes(year.toString()) === false;
    });
  }

  if (excludedMonths.length > 0) {
    range = range.filter((d) => {
      const {year, month} = parseDate(d);

      return excludedMonths.includes(`${year}${padNumber(month)}`) === false;
    });
  }

  return range;
}
