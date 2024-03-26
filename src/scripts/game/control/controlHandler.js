import controlsList from "./controlsList.js";

/**
 * Creates a new control object with the specified type, key, and callback.
 *
 * @param {string} type - The type of the control.
 * @param {string} key - The key of the control.
 * @param {function} callback - The callback function to be executed when the control is triggered.
 *
 * @return {Promise<void>} A Promise that resolves when the control is initialized.
 */
function newControl(type, key, callback) {
  initControl(controlsList.push({
    "key": `${key}`,
    "type": `${type}`,
    "callback": callback
  })-1).then(r => {
    console.log(`["${key}"] post-implémenté ! (${type})`);
    console.log(controlsList)
  });
}
document.addEventListener("keydown",()=>{

})
/* Void function */
function voided() {}

/**
 * Initializes event listeners for control inputs.
 * @return {Promise<boolean>} A promise that resolves when the event listeners are successfully initialized.
 */
async function initControls() {
  controlsList.forEach((control)=>{
    if (typeof control.callback === "function") {
      document.addEventListener(`${control.type}`, (event)=>{
        event.key === control.key ? control.callback(event) : voided();
      })
    } else {
      throw new TypeError(`The callback of the control ${control.key} is invalid.`)
    }
  })
}

/**
 * Initialize a control with the specified index.
 *
 * @async
 * @param {number} index - The index of the control to initialize.
 * @throws {TypeError} - If the callback of the control is invalid.
 */
async function initControl(index) {
    if (typeof controlsList[index].callback === "function") {
      document.addEventListener(`${controlsList[index].type}`, (event)=>{
        event.key === controlsList[index].key ? controlsList[index].callback(event) : voided();
      })
    } else {
      throw new TypeError(`The callback of the control ${controlsList[index].key} is invalid. (post-indexed)`)
    }
}

const Controls = {
  initControls,
  newControl
}

export default Controls;