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
 * Compresses a date range between two days expressed as string date expressions
 *
 * @export
 * @param {string} start Starting day as any valid date string
 * @param {string} end End day as any valid date string
 * @link https://day.js.org/docs/en/parse/string-format Possible date formats
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
