import Utils from "../../utils";

/**
 * Class representing an IndexedDB.
 * @class
 */
export class IndexedDb {
  #dbName;
  #mainIndexedDataBase;
  constructor(dbName) {
    console.group("IndexedDB initialization...")
    this.#dbName = dbName;
    const IDBOpenRequest = window.indexedDB.open(`${this.#dbName}`);
    IDBOpenRequest.onerror = () => {
      Utils.alert.send(`Unable to open local database "${this.#dbName}".`, true)
    };
    IDBOpenRequest.onsuccess = () => {
      this.#mainIndexedDataBase = IDBOpenRequest.result
      console.debug(`Successful opening of the database "${this.#dbName}".`)
      console.trace(this.#mainIndexedDataBase)
    };
    console.groupEnd()
  }

  getMainDbName() {
    return this.#dbName;
  }

  /**
   * Throws an error indicating that the specified database is not open.
   *
   * @throws {Error} - If the database is not open.
   */
  #openDatabaseError() {
    const errorMessage = `Database "${this.#dbName}" is not open.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  /**
   * Creates a transaction for the specified store in the IndexedDB.
   *
   * @param {string} storeName - The name of the store to create a transaction for.
   * @param {string} [mode='readwrite'] - The transaction mode ('readonly' or 'readwrite'). Default is 'readwrite'.
   * @return {IDBTransaction} - The created transaction object.
   * @throws {Error} - Throws an error if the main IndexedDB is not available.
   */
  createTransaction(storeName, mode = 'readwrite') {
    if (this.#mainIndexedDataBase) {
      return this.#mainIndexedDataBase.transaction(storeName, mode);
    } else {
      this.#openDatabaseError();
    }
  }
}

export default IndexedDb;