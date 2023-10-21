/**
 * Adds a specified number of days to the current date and returns the result as a Unix timestamp.
 *
 * @param {number} days - The number of days to add to the current date.
 * @returns {number} The Unix timestamp representing the date after adding the specified number of days.
 *
 * @example
 * const numberOfDaysToAdd = 7;
 * const unixTimestamp = calculateFutureDate(numberOfDaysToAdd);
 * console.log("Unix timestamp after adding", numberOfDaysToAdd, "days:", unixTimestamp);
 */
export const calculateFutureDate = function (days: number): number {
    const currentDate: Date = new Date();
    const futureDate: Date = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + days);
    return Math.floor(futureDate.getTime() / 1000); // Return Unix timestamp in seconds
};
