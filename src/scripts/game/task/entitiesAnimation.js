import entity from "../entity.js";

/**
 * Performs animation for the entities.
 *
 * @param {number} elapsed - The time elapsed since the last frame.
 * @returns {Promise<void>} - A Promise that resolves when the animation is complete.
 */
async function entitiesAnimation(elapsed) {
  const players = await entity.getPlayers()
  const obstacles = await entity.getObstacles()
  const background = await entity.getBackgrounds()

  const entities = [players, obstacles, background]

  entities.forEach((array)=> {array.forEach(object => {object.doCurrentAnimation(elapsed)})})
  players.forEach((player)=> {
    player.move(elapsed)
  })
}
export default entitiesAnimation;