/**
 * @param {number} num number to be formatted
 * @param {number} digits the amount of digits that the number should have to be formatted
 * @returns {string} String representing a number 
 * @desc Returns a number with zeros prepended
 */

// formatNumber(1, 3) returns "001"
// formatNumber(10, 5) returns "00010"

function formatNumber(num, digits) {
  let strNum = num.toString();

  if (strNum.length < digits) {
    const len = digits - strNum.length;
    let zeros = '';

    for (let i = 0; i < len; i++) {
      zeros += '0';
    }

    strNum = zeros + strNum;
  }

  return strNum;
}

/**
 * @param {Date} date 
 * @param {string} seperator what to seperator the date numbers with 
 * @returns {string} String representing date
 * @desc Takes a date and returns a string representing the date in yyyy-mm-dd format
 */

function formatYYYYMMDD(date, seperator = '-') {
  const day = formatNumber(date.getDate(), 2);
  const month = formatNumber((date.getMonth() + 1), 2); // month is zero-based 
  const year = formatNumber(date.getFullYear(), 4);

  return [year, month, day].join(seperator);
}

export {
  formatYYYYMMDD
};
