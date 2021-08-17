import dayjs from 'dayjs';
import {getDaysInRange} from './days';
import {getMonthsDifference} from './difference';
import {DateFormats} from './format';
import {padNumber} from './padder';
import {parseDate} from './parser';

/**
 * Gets all days in a month
 *
 * @param {string} month Month to get days of, YYYYMM
 * @return {string[]} The days in the month as array of YYYYMMDD
 */
function getDaysInMonth(month: string): string[] {
  const daysInMonth = dayjs(month, DateFormats.Month).daysInMonth();

  return getDaysInRange(`${month}01`, `${month}${daysInMonth}`);
}

/**
 * Checks if all days of the month are included in a list of days
 *
 * @param {string[]} daysInMonth The list of days in a month
 * @param {string[]} listOfDays The full list of days to see if they're included
 * @return {boolean} Whether all of the month's days are included in the list
 */
function monthHasAllDays(daysInMonth: string[], listOfDays: string[]): boolean {
  let response = true;

  for (const day of daysInMonth) {
    if (!listOfDays.includes(day)) {
      response = false;
      break;
    }
  }

  return response;
}

/**
 * Gets the next Nth month from starting month
 *
 * @param {string} month The starting month as YYYYMM
 * @param {number} n The nth month after
 * @return {string} The desired month as YYYYMM
 */
function getNthNextMonth(month: string, n: number): string {
  return dayjs(month, DateFormats.Month).add(n, 'months').format(DateFormats.Month);
}

/**
 * Gets all full months between two dates
 *
 * @export
 * @param {string} start The start date as YYYYMMDD
 * @param {string} end The end date as YYYYMMDD
 * @param {string[]} [excludedYears=[]] The list of years to exclude for checking as YYYY
 * @return {string[]} The list of full months included in the range
 */
export function getMonthsInRange(start: string, end: string, excludedYears: string[] = []): string[] {
  const ranges: string[][] = [];

  const range: string[] = [];

  if (excludedYears.length > 0) {
    const firstBatch = [start, dayjs(excludedYears[0], DateFormats.Year).subtract(1, 'day').format(DateFormats.Day)];
    const lastBatch = [dayjs((Number(excludedYears[excludedYears.length - 1]) + 1).toString(), DateFormats.Year).startOf('year').format(DateFormats.Day), end];
    ranges.push(firstBatch, lastBatch);
  } else {
    ranges.push([start, end]);
  }

  for (const [rangeStart, rangeEnd] of ranges) {
    const parsedRangeStart = parseDate(rangeStart);
    const parsedRangeEnd = parseDate(rangeEnd);

    const rangeStartMonth = `${parsedRangeStart.year}${padNumber(parsedRangeStart.month)}`;
    const rangeEndMonth = `${parsedRangeEnd.year}${padNumber(parsedRangeEnd.month)}`;

    const daysInRange = getDaysInRange(rangeStart, rangeEnd);

    const monthsDifference = getMonthsDifference(rangeEndMonth, rangeStartMonth);
    const monthsBetween: string[] = monthsDifference === 0 ? [rangeStartMonth] : [];

    for (let i = 0; i < monthsDifference; i++) {
      monthsBetween.push(getNthNextMonth(rangeStartMonth, i));
    }

    for (const month of monthsBetween) {
      const daysInMonth = getDaysInMonth(month);
      const hasAllDays = monthHasAllDays(daysInMonth, daysInRange);

      if (hasAllDays) {
        range.push(month);
      }
    }
  }

  return range;
}
