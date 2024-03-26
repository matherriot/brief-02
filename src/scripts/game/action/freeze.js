import {freezeAll, unFreezeAll} from "../../gameLoop.js";

let flipFlopFreeze = false
function toggleFreeze() {
  flipFlopFreeze ? flipFlopFreeze = false : flipFlopFreeze = true
  if (flipFlopFreeze) {
    freezeAll();
  } else {
    unFreezeAll()
  }
}

export default toggleFreeze;