import dayjs from 'dayjs';
import { DateFormats } from './format';

interface ParsedDate {
  day: number;
  month: number;
  year: number;
}

/**
 * Parses a YYYYMMDD string into year, month and day
 *
 * @export
 * @param {string} date YYYYMMDD string
 * @return {ParsedDate} The parsed date
 */
export function parseDate(date: string): ParsedDate {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(4, 6));
  const day = Number(date.slice(6, 8));

  return {
    day,
    month,
    year,
  };
}

/**
 * Parses any valid date expression into a YYYYMMDD string
 *
 * @export
 * @param {string} date string
 * @return {string} date in YYYYMMDD format
 */
export function formatDate(date: string): string {
  if (dayjs(date).isValid()) {
    return dayjs(date).format(DateFormats.Day);
  }
  if (dayjs(date, DateFormats.Day).isValid()) {
    return date;
  }
  throw new Error('Unrecognized date format');
}
