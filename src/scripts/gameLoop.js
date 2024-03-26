import Game from "./game/index.js";
import entitiesAnimation from "./game/task/entitiesAnimation.js";

let startup = true
let pastTimestamp = 0;
let elapsed = 0
let lastElapsed = 0
let maxFpsInterval = 1000 / Game.Config.maxFps;
let elapsedHistory = []
let freeze = false

export function freezeAll() {
  freeze = true;
  document.getElementById("stats").innerHTML += ` | FREEZE`
}
export function unFreezeAll() {
  freeze = false
  window.requestAnimationFrame(gameLoop);
}

function calculateAverage(array) {
  const arrayLength = array.length;
  const sum = sumArrayElements(array);
  return sum / arrayLength;
}

function sumArrayElements(array) {
  return array.reduce((accumulator, current) => accumulator + current, 0);
}

function getCurrentFPS() {
  return Math.round(1000/elapsed)
}
function getAvgFPS() {
  return Math.round(1000/calculateAverage(elapsedHistory))
}
export async function getElapsed() {
  return elapsed
}
  export function gameLoop(timestamp) {
  elapsed = timestamp - pastTimestamp
  lastElapsed = elapsed
  if (!freeze) {
    if (elapsed !== 0) {
      elapsedHistory.push(elapsed)
    }
    if (elapsedHistory.length > 120) {
      elapsedHistory.shift()
    }
    if (pastTimestamp === timestamp || elapsed < maxFpsInterval) {
      window.requestAnimationFrame(gameLoop);
      return}
    if (startup) {
      //TODO AT STARTUP ================= STATE

      startup = false;
      Game.Controls.initControls().then(r => {
        console.log("Configuration innitiale des touches effectué !")
      });
      Game.Controls.newControl("keydown", "o", ()=>{
        console.log("Bonjour mec !")
      })
    }
    if (pastTimestamp === 0) {
      pastTimestamp = timestamp
    } else {
      document.getElementById("stats").innerHTML =
        `FPS: ${getCurrentFPS()}/${getAvgFPS()} (now/avg) | MSPF: ${Math.floor(elapsed)}`;
    }

    if (!Game.getPauseState() && !Game.isOver && Game.isStarted) {
      //TODO GAME STARTED =============== STATE
      entitiesAnimation(elapsed)

      // Do obstacle move
    }
    if (Game.getPauseState(timestamp)) {
      document.getElementById("pause").style.display = "block";
      //TODO GAME PAUSED  =============== STATE

      //Game.Task.Obstacle.moveObstacle(timestamp)
    } else {
      if (document.getElementById("pause").style.display === "block") {
        document.getElementById("pause").style.display = "none";
      }
    }

    pastTimestamp = timestamp
    window.requestAnimationFrame(gameLoop);
  }
}

export default gameLoop;