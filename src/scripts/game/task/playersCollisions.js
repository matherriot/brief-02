import entity from "../entity.js";


const players = await entity.getPlayers()
const obstacles = await entity.getObstacles()

async function performCollisionsCheck() {
  players.forEach((player)=> {
    obstacles.forEach((obstacle) => {
      const obstacleId = obstacle.getDomId()
      //
    })
  })
}