import dayjs, { Dayjs, OpUnitType } from 'dayjs';
import { DateFormats } from './format';

/**
 * Gets the difference between two Dayjs objects in desired units
 *
 * @export
 * @param {Dayjs} endDate The end date
 * @param {Dayjs} startDate The start date
 * @param {OpUnitType} units The desired units to see difference in
 * @return {number} The difference between the two dates
 */
export function getDifferenceBetweenDates(
  endDate: Dayjs,
  startDate: Dayjs,
  units: OpUnitType
): number {
  return endDate.diff(startDate, units);
}

export function getMonthsDifference(
  endDate: string,
  startDate: string
): number {
  return getDifferenceBetweenDates(
    dayjs(endDate, DateFormats.Month),
    dayjs(startDate, DateFormats.Month),
    'months'
  );
}
