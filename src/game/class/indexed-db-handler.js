import Utils from "../../utils";

/**
 * Class representing an IndexedDB.
 * @class
 */
/**
 * Represents a wrapper around the IndexedDB API for easy database management.
 */
class IndexedDb {
  constructor(dbName) {
    console.group("IndexedDB initialization...")
    this.dbName = dbName;
    this.DB_NOT_OPEN_ERROR = `Database is not open`;
    this.OPEN_DB_SUCCESS_MSG = `Successful opening of the database`;
    this.openAndHandleDbRequest();
  }

  openAndHandleDbRequest() {
    const IDBOpenRequest = window.indexedDB.open(this.dbName);
    IDBOpenRequest.onerror = () => {
      Utils.alert.send(`Unable to open local database "${this.dbName}".`, true)
    };
    IDBOpenRequest.onsuccess = () => {
      this.database = IDBOpenRequest.result;
      console.debug(`${this.OPEN_DB_SUCCESS_MSG} "${this.dbName}".`);
      console.trace(this.database);
    };
    console.groupEnd()
  }

  /**
   * Gets the name of the main database.
   *
   * @return {string} The name of the main database.
   */
  getMainDbName() {
    return this.dbName;
  }

  /**
   * Throws an error if the database is not open.
   *
   * @throws {Error} - Error indicating that the database is not open.
   */
  throwDatabaseNotFoundError() {
    const errorMessage = `${this.DB_NOT_OPEN_ERROR} "${this.dbName}".`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  /**
   * Opens a transaction on the specified store using the given mode.
   *
   * @param {string} storeName - The name of the store to open the transaction on.
   * @param {IDBTransactionMode} mode - The mode of the transaction to be opened. Valid values
   * are 'readonly', 'readwrite', and 'versionchange'.
   * @return {IDBTransaction} - The opened transaction.
   * @throws {Error} - If the database is not available.
   */
  openTransaction(storeName, mode) {
    if (this.database) {
      return this.database.transaction(storeName, mode);
    } else {
      this.throwDatabaseNotFoundError();
    }
  }

  /**
   * Opens an IndexedDB object store.
   *
   * @param {string} storeName - The name of the database store to open.
   * @param {string} objectName - The name of the object store to open.
   * @param {IDBTransactionMode} mode - The mode to open the object store in.
   *
   * @returns {IDBObjectStore} - The opened object store.
   */
  openObjectStore(storeName, objectName, mode) {
    const trans = this.openTransaction(storeName, mode);
    return trans.objectStore(objectName);
  }
}

export default IndexedDb;