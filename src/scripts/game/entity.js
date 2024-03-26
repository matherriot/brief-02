import Class from "./class/index.js";

let players = new Array(0)
/**
 * Array containing obstacles.
 *
 * @type {Array<Object>}
 */
let obstacles = new Array(0)
let backgrounds = new Array(0)

/**
 * Appends an entity to the specified type in the entity object.
 *
 * @param {Object} entity - The entity object.
 *
 * @return {void}
 */
function appendEntity(entity) {
  let type = entity.type;
  switch (type) {
    case "player":
      console.log("Append new player")
      console.log(entity)
      players.push(entity)
      break
    case "obstacle":
      console.log("Append new obstacle")
      console.log(entity)
      obstacles.push(entity)
      break
    case "background":
      console.log("Append new background")
      console.log(entity)
      backgrounds.push(entity)
      break
  }
}

/**
 * Retrieves the players from the database.
 *
 * @returns {Promise<Array<Class.Dyno>>} A promise that resolves to an array of players retrieved from the database.
 */
async function getPlayers() {
  return players;
}

/**
 * Retrieves obstacles from an external source.
 *
 * @returns {Promise<Array<Class.Cactus | Class.Pterodactyl>>} A Promise that resolves with an array of obstacles.
 */
async function getObstacles() {
  return obstacles;
}
async function getBackgrounds() {
  return backgrounds;
}

let entity = {
  appendEntity,
  getPlayers,
  getObstacles,
  getBackgrounds
}
export default entity;