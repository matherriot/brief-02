import Game from "../index.js";


/**
 * Moves the obstacles in the game by updating their positions.
 *
 * @param {number} lastTimestamp - The timestamp of the last update.
 * @return {Promise<void>} - A promise that resolves when the obstacles are moved.
 */
async function moveObstacles(lastTimestamp) {
  console.log("Moving obstacle");
  let obstacles = await Game.entity.getObstacles()
  obstacles.forEach((obstacle)=>{
    obstacle.updatePosition(lastTimestamp)
  })
}

const ObstaclesMovement = {
  moveObstacles
}
export default ObstaclesMovement;