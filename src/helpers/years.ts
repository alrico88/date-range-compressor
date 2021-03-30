import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
dayjs.extend(isLeapYear);
import {DateFormats} from './format';
import {parseDate} from './parser';

/**
 * Gets the starting day of the year
 *
 * @param {string} year YYYY
 * @return {string} The start of the year as YYYYMMDD
 */
function getStartOfYear(year: string): string {
  return dayjs(year, DateFormats.Year).startOf('year').format(DateFormats.Day);
}

/**
 * Gets the ending day of the year
 *
 * @param {string} year YYYY
 * @return {string} The end of the year as YYYYMMDD
 */
function getEndOfYear(year: string): string {
  return dayjs(year, DateFormats.Year).endOf('year').format(DateFormats.Day);
}

/**
 * Checks if either the start or end date include the whole year
 *
 * @param {string} startDate The starting date YYYYMMDD
 * @param {string} endDate The end date YYYYMMDD
 * @return  {{start: boolean; end: boolean}}
 */
function isSameYearComplete(startDate: string, endDate: string): {start: boolean; end: boolean} {
  const startOfYear = getStartOfYear(parseDate(startDate).year.toString());
  const endOfYear = getEndOfYear(parseDate(endDate).year.toString());

  return {
    start: startOfYear === startDate,
    end: endOfYear === endDate,
  };
}

/**
 * Gets full years in date range
 *
 * @export
 * @param {string} start The starting date YYYYMMDD
 * @param {string} end The end date YYYYMMDD
 * @return {string[]} Full years between start and end
 */
export function getYearsInRange(start: string, end: string): string[] {
  const years: string[] = [];

  const {year: startYear} = parseDate(start);
  const {year: endYear} = parseDate(end);

  for (let i = 0 + 1; i < endYear - startYear; i++) {
    years.push((startYear + i).toString());
  }

  // Check for same year
  if (startYear !== endYear) {
    const {start: isStartComplete, end: isEndComplete} = isSameYearComplete(start, end);

    if (isStartComplete === true) {
      years.unshift(startYear.toString());
    }

    if (isEndComplete === true) {
      years.push(endYear.toString());
    }
  }

  return years;
}
