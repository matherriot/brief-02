import Game from "../index.js";


function pause() {
  console.log("Action pause !")
  Game.togglePauseState(Date.now())
}

export default pause;