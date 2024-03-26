import GameObject from "./GameObject.js";


class Pterodactyl extends GameObject {
  constructor(hasCollision, CurrentSpeedMultiplier, y) {
    super("obstacle", hasCollision, CurrentSpeedMultiplier, y);
    super.setMovingDirection("left")
  }
  updatePosition(lastTimestamp) {
    super.move(lastTimestamp)
  }

  getDomId() {
    return super.getDomId();
  }

}
export default Pterodactyl;