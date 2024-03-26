import GameObject from "./GameObject.js";
import Utils from "../utils.js";

/**
 * Represents a Tyrannosaurus as a subclass of GameObject.
 *
 * @class
 * @extends GameObject
 */
export class Tyrannosaurus extends GameObject {
  /**
   * Constructs a new Player object.
   *
   * @param {boolean} hasCollision - Indicates whether the player has collision or not.
   * @param {number} CurrentSpeedMultiplier - The current speed multiplier for the player.
   * @param {number} y - The y-coordinate of the player in the game world.
   * @return {void}
   */
  constructor(hasCollision, CurrentSpeedMultiplier, y) {
    super("player", hasCollision, CurrentSpeedMultiplier, y);
    super.setMovingDirection("static")
  }

  /**
   * Checks if a collision occurs between the current GameObject and the obstacle with the given obstacle ID.
   *
   * @param {string} obstacleId - The ID of the obstacle to check for collision with.
   * @returns {boolean} - Returns true if a collision is detected, false otherwise.
   */
  checkCollision(obstacleId) {
    const self = Utils.getDomElementDimensionsAndStyle(`hitbox-${super.getDomId()}`)
    const target = Utils.getDomElementDimensionsAndStyle(`hitbox-${obstacleId}`)
    // Vérifie si l'obstacle est dans la zone de dimension GameObject * 2
    const inBoundingZone = (
      target.computedStyle.width < self.computedStyle.width + 2 * self.computedStyle.width &&
      target.computedStyle.width + target.width > self.computedStyle.width
    );

    if(inBoundingZone) {
      // Si tel est le cas, effectue une vérification de collision plus précise.
      const collide = (
        target.computedStyle.width < self.computedStyle.left + self.computedStyle.width &&
        target.computedStyle.width + target.width > self.computedStyle.width &&
        target.computedStyle.height < self.computedStyle.top + self.computedStyle.height &&
        target.computedStyle.height + target.height > self.computedStyle.top
      );
      if(collide) {
        console.log("Collision Detected!");
        return true
      } else {
        console.log("No Collision hitbox");
        return false
      }
    } else {
      console.log("No Collision zone");
      return false
    }
  }
}
export default Tyrannosaurus;