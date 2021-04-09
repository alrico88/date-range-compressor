import {getDaysInRange} from './helpers/days';
import {getMonthsInRange} from './helpers/months';
import {formatDate} from './helpers/parser';
import {getYearsInRange} from './helpers/years';

interface CompressedDateRange {
  years?: string[];
  months?: string[];
  days?: string[];
}

/**
 * Compresses a date range between two days expressed as YYYYMMDD strings
 *
 * @export
 * @param {string} start Starting day as YYYYMMDD
 * @param {string} end End day as YYYYMMDD
 * @return {CompressedDateRange} The full years, full months and days included in that range
 */
export function compressDateRange(start: string, end: string): CompressedDateRange {
  const formattedStart = formatDate(start);
  const formattedEnd = formatDate(end);

  const fullYearsBetween = getYearsInRange(formattedStart, formattedEnd);
  const fullMonthsBetween = getMonthsInRange(formattedStart, formattedEnd, fullYearsBetween);
  const daysBetween = getDaysInRange(formattedStart, formattedEnd, fullMonthsBetween, fullYearsBetween);

  return {
    years: fullYearsBetween,
    months: fullMonthsBetween,
    days: daysBetween,
  };
}
