import Game from "./index.js";
/**
 * Represents a game box element.
 * @type {HTMLDivElement}
 */
const DomElement = document.getElementById("game")
function getDimensions() {
  return Game.Utils.getDomElementDimensions(DomElement.id)
}

function wipeContent() {
  DomElement.innerHTML = "";
}

function isOutOfRange(elementId, graceMargin) {


}

function append(element) {
  DomElement.appendChild(element);
}
const GameView = {
  DomElement,
  wipeContent,
  append
}
export default GameView;

