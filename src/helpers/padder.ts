/**
 * Pads a date string to 2 characters
 *
 * @export
 * @param {string} str String to pad
 * @return {string} The padded string
 */
export function padString(str: string): string {
  return str.padStart(2, '0');
}

/**
 * Pads a date number to 2 characters
 *
 * @export
 * @param {number} num Number to pad
 * @return {string} The padded number
 */
export function padNumber(num: number): string {
  return padString(num.toString());
}
