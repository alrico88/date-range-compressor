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
  const year = Number(date.substr(0, 4));
  const month = Number(date.substr(4, 2));
  const day = Number(date.substr(6, 2));

  return {
    day,
    month,
    year,
  };
}
