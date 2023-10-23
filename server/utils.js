/**
 * Checks if a string includes another string in a case-insensitive manner.
 *
 * @param {string} str - The main string to be checked.
 * @param {string} searchValue - The substring to search for within the main string.
 * @returns {boolean} Returns `true` if the main string contains the substring (ignoring case), otherwise `false`.
 */
const caseInsensitiveMatch = (str, searchValue) => {
  if (!str || typeof str !== "string") return false;
  return str.toLowerCase().includes(searchValue.toLowerCase());
};

module.exports = {
  caseInsensitiveMatch,
};
