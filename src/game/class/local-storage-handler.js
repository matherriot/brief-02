/**
 * A class that provides interface to manipulate local storage.
 */
export class LocalStorage {
  #instance;

  SET_VALIDATION_WARNING_MSG = `Invalid key-value pair!`;
  STORAGE_WARN_MSG = `Unable to perform operation!`;

  constructor() {
    this.#instance = window.localStorage;
  }

  #isValidPair(key, value) {
    return !(key && value);
  }

  /**
   * Sets a key-value pair in the instance.
   *
   * @param {string} key - The key of the pair.
   * @param {*} value - The value of the pair.
   * @returns {boolean} - Indicates whether the key-value pair was successfully set.
   * @throws {DOMException} - If the storage quota has been exceeded.
   */
  set(key, value) {
    if (!this.#isValidPair(key, value)) {
      console.warn(this.SET_VALIDATION_WARNING_MSG)
      return false
    }
    try {
      this.#instance.setItem(key, value);
      console.debug(`Value stored successfully. \n(key:"${key}", value:"${value}")`)
      return true
    } catch (QuotaExceededError) {
      throw new DOMException(QuotaExceededError);
    }
  }

  /**
   * Retrieves the value associated with the given key from storage.
   *
   * @param {string} key - The key for the value to be retrieved.
   *
   * @return {any} - The value associated with the given key.
   *                If the key is not specified or falsy, undefined will be returned.
   *                If the key is found in storage, the corresponding value will be returned.
   *
   * @throws {DOMException} - If the storage quota is exceeded.
   */
  get(key) {
    if (!key) {
      console.warn(`${this.STORAGE_WARN_MSG} \n(key:"${key}")`)
      return undefined
    }
    try {
      const result = this.#instance.getItem(key);
      console.debug(`Value read successfully. \n(key:"${key}", value:"${result}")`);
      return result;
    } catch (QuotaExceededError) {
      throw new DOMException(QuotaExceededError);
    }
  }

  /**
   * Clears all values in the instance.
   *
   * @throws {DOMException} If an error occurs while clearing the values.
   * @return {boolean} True if all values cleared successfully.
   */
  clearAll() {
    try {
      this.#instance.clear();
      console.debug("All values cleared successfully");
      return true
    } catch (QuotaExceededError) {
      throw new DOMException(QuotaExceededError);
    }
  }

  /**
   * Retrieve the total length of the data in the instance.
   *
   * @returns {number} - The total length of the data.
   */
  getTotalDataLength() {
    return this.#instance.length();
  }
}

export default LocalStorage;