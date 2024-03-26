import Class from "./class/index.js";
import Controls from './control/controlHandler.js'
import entity from "./entity.js";
import Utils from "./utils.js";
import GameView from "./gameViewHandler.js";
import Task from "./task/index.js";
import AnimationHandler from "./animation/animationHandler.js";
import AudioHandler from "./assets/audioHandler.js";
let Config = {
  "godMode": true,
  "maxFps": 30,
  "delayBetweenPause": 1_500,
  "baseDifficultyFactor":  1,
  "pointPerPass": 10,
  "minGapBetwenObstacle": 32,
  "maxGapBetwenObstacle": 256,
  "minSpeed": 1,
  "maxSpeed": 5,
}

///////////////////////////

entity.appendEntity(new Class.Dyno(true,0,48))
entity.appendEntity(new Class.Dyno(true,0, 125))
//entity.appendEntity(new Class.Pterodactyl(true,0,12,12))
console.log(await entity.getPlayers())


//////////////////////////

let players = await entity.getPlayers()
let player01 = players[0]

let startTimestamp;
let pauseState = false;
let isStarted = true;
let isOver = false
let lastPausedTimestamp = 0;

function promptGameMenu() {
  //TODO
}
function startGame() {
  startTimestamp = Date.now()
  isStarted = true;
  isOver = false
  //TODO
}
function stopGame() {
  //TODO
  isOver = true;
}
/**
 * Toggle the pause state.
 * If enough time has passed since the last pause state change,
 * the pause state will be flipped.
 * Otherwise, a message "SPAM" will be logged.
 *
 * @param {number} timestamp - The current timestamp in milliseconds.
 * @return {undefined} - No return value.
 */
function togglePauseState(timestamp) {
  if (lastPausedTimestamp + Config.delayBetweenPause < timestamp) {
    // Flip/Flop
    pauseState ? pauseState = false : pauseState = true
    lastPausedTimestamp = timestamp
  } else {
    console.log("SPAM")
  }
}
function getPauseState() {
  return pauseState
}

let Game = {
  Utils,
  Controls,
  Config,
  GameView,
  AnimationHandler,
  AudioHandler,
  entity,
  isStarted,
  isOver,
  togglePauseState,
  getPauseState,
  stopGame,
  startGame,
  promptGameMenu,
  Task
}
export default Game;
